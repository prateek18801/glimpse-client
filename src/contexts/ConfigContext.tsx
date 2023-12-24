import { createContext, useState, useEffect } from "react";
import ConfigDataType, { defaultConfig } from "../config";
import useFetch from "../hooks/useFetch";

const ConfigContext = createContext<{ data: ConfigDataType, loading: boolean }>({
    data: defaultConfig,
    loading: true
});

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [data, setData] = useState<ConfigDataType>(defaultConfig);

    const { response, loading, error } = useFetch<ConfigDataType>("/api/v1/config", defaultConfig);

    useEffect(() => {
        setData(() => {
            return error ? defaultConfig : response;
        });
    }, [response, error]);

    return (
        <ConfigContext.Provider value={{ data, loading }}>
            {children}
        </ConfigContext.Provider>
    );
}

export default ConfigContext;
