import { useContext } from "react";
import { Link } from "react-router-dom";
import ConfigContext from "../../contexts/ConfigContext";

const Printing = () => {

    const config = useContext(ConfigContext);
    const prints = config.data.printing;

    return (
        <section className="px-4 mb-24 md:px-16">
            <div className="mb-12 text-2xl font-semibold text-center">Popular Printing Categories</div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
                {prints.map((print, i) => {
                    return <PrintingCard key={i} {...print} />;
                })}
            </div>
        </section>
    );
}

const PrintingCard = ({ image, title, description }: { image: string, title: string, description: string }) => {
    return (
        <div className="bg-white rounded-sm shadow">
            <Link to="/contact" state={{ subject: `Product: ${title}` }}>
                <div className="bg-gray-400 aspect-square">
                    <img src={image} alt={title} className="shadow-sm" />
                </div>
                <div className="p-4">
                    <div className="font-semibold">{title}</div>
                    <div className="text-xs text-gray-600">{description}</div>
                </div>
            </Link>
        </div>
    );
}

export default Printing;
