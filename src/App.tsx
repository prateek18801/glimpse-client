import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Loading from "./pages/Loading";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ConfigContext from "./contexts/ConfigContext";
import useFetch from "./hooks/useFetch";
import ConfigDataType, { sampleConfig } from "./config";

const App = () => {

    const { setData } = useContext(ConfigContext);
    const { response, status } = useFetch<ConfigDataType>("/v1/config", sampleConfig);

    useEffect(() => {
        setData(response);
    }, [response, status]);

    return (
        status === "success" ?
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            :
            <Loading status={status} />
    );
}

export default App;
