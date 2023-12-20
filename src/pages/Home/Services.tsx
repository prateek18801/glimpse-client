import { Link } from "react-router-dom";

const Services = () => {

    const services = [
        {
            title: "Direct Print Mail",
            backdrop: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            description: "Delivering communication solutions, ensuring your messages reach the intended recipients seamlessly and with maximum impact."
        },
        {
            title: "Merchandise For Fairs",
            backdrop: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            description: "Creating customized merchandise that embodies your brand identity, captivates your target audience, and leaves a lasting impression."
        },
        {
            title: "Welcome Kit Programs",
            backdrop: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            description: "Managing exceptional welcome kits that foster a sense of belonging and appreciation among new members."
        }
    ];

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

const ServiceCard = ({ title, backdrop, description }: { title: string, backdrop: string, description: string }) => {
    return (
        <div className="overflow-hidden bg-white rounded-sm shadow md:w-1/4 group ">
            <Link to="/services">
                <div className="relative w-full overflow-hidden bg-gray-400 h-72">
                    <img className="absolute duration-300 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:scale-105 group-hover:transition-transform" src={backdrop} alt={title} />
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
