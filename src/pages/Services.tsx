import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Services = () => {

    const services = [
        {
            title: "Direct Print Mail",
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            description: "Delivering communication solutions, ensuring your messages reach the intended recipients seamlessly and with maximum impact."
        },
        {
            title: "Merchandise For Fairs",
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            description: "Creating customized merchandise that embodies your brand identity, captivates your target audience, and leaves a lasting impression."
        },
        {
            title: "Welcome Kit Programs",
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            description: "Managing exceptional welcome kits that foster a sense of belonging and appreciation among new members."
        }
    ];

    return (
        <>
            <Navbar />
            <section className="my-32">
                <div className="mb-12 text-2xl font-semibold text-center">What We Do</div>
                <div className="flex flex-wrap gap-10 px-8">
                    {services.map((service, i) => {
                        return <ServiceCard key={i} {...service} />;
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
}

const ServiceCard = ({ title, image, description }: { title: string, image: string, description: string }) => {
    return (
        <div className="overflow-hidden bg-white rounded-sm shadow">
            <div className="w-full mb-4 bg-gray-400 aspect-square">
                <img src={image} alt={title} />
            </div>
            <div className="mx-4 mb-2 text-2xl font-medium text-center">{title}</div>
            <div className="mx-4 mb-4 text-center">{description}</div>
            <div className="mx-4 mb-8 text-center">
                <Link to="/contact" state={{subject: `Query: ${title}`}}>
                    <button className="p-4 font-medium text-white bg-black rounded-sm">Contact Sales</button>
                </Link>
            </div>
        </div>
    );
}

export default Services;
