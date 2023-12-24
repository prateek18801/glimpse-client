import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ConfigContext from "./contexts/ConfigContext";

const App = () => {

    const config = useContext(ConfigContext);
    const loading = config.loading;    

    return (
        loading ?
            <h1>Loading Glimpse</h1>
            :
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
            </Routes>
    );
}

export default App;
