import Navbar from "../../components/Navbar";
import Contact from "./Contact";
import Landing from "./Landing";
import Partners from "./Partners";
import Printing from "./Printing";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <Services />
            <Printing />
            <Contact />
            <Partners />
            <Reviews />
        </>
    );
}

export default Home;
