import { useContext } from "react";
import { Link } from "react-router-dom";
import ConfigContext from "../../contexts/ConfigContext";

const Services = () => {

    const config = useContext(ConfigContext);
    const services = config.data.services;

    return (
        <section className="py-10 mb-20 bg-black">
            <div className="mb-12 text-2xl font-semibold text-center text-white">Services We Offer</div>
            <div className="flex flex-wrap justify-center gap-16 px-8 mb-10">
                {services.map((service, i) => {
                    return <ServiceCard key={i} {...service} />;
                })}
            </div>
        </section>
    );
}

const ServiceCard = ({ title, image, description }: { title: string, image: string, description: string }) => {
    return (
        <div className="overflow-hidden bg-white rounded-sm shadow md:w-1/4 group ">
            <Link to="/services">
                <div className="relative w-full overflow-hidden bg-gray-400 h-72">
                    <img className="absolute duration-300 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:scale-105 group-hover:transition-transform" src={image} alt={title} />
                    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-2xl font-medium" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>{title}</div>
                </div>
                <div className="p-4">
                    {description}
                </div>
            </Link>
        </div>
    );
}

export default Services;
