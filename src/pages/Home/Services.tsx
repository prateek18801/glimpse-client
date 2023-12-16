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
            <div className="flex flex-wrap px-8">
                {services.map((service, i) => {
                    return <ServiceCard key={i} {...service} />;
                })}
            </div>
        </section>
    );
}

const ServiceCard = ({ title, backdrop, description }: { title: string, backdrop: string, description: string }) => {
    return (
        <div className="mb-10 overflow-hidden bg-white rounded-sm shadow">
            <div className="bg-gray-400 w-full aspect-square relative">
                <img className="shadow" src={backdrop} alt={title} />
                <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center text-2xl font-medium" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>{title}</div>
            </div>
            <div className="p-4">
                {description}
            </div>
        </div>
    );
}

export default Services;
