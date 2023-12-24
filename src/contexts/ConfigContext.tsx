import { createContext, useState } from "react";
import ConfigDataType, { sampleConfig } from "../config";

const ConfigContext = createContext<{ data: ConfigDataType, setData: React.Dispatch<React.SetStateAction<ConfigDataType>> }>({
    data: sampleConfig,
    setData: () => { }
});

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [data, setData] = useState<ConfigDataType>(sampleConfig);
    return (
        <ConfigContext.Provider value={{ data, setData }}>
            {children}
        </ConfigContext.Provider>
    );
}

export default ConfigContext;
