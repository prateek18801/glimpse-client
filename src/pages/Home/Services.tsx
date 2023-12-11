const Services = () => {

    const services = [
        {
            title: "Direct Print Mail",
            description: "Delivering communication solutions, ensuring your messages reach the intended recipients seamlessly and with maximum impact."
        },
        {
            title: "Merchandise For Fairs",
            description: "Creating customized merchandise that embodies your brand identity, captivates your target audience, and leaves a lasting impression."
        },
        {
            title: "Welcome Kit Programs",
            description: "Managing exceptional welcome kits that foster a sense of belonging and appreciation among new members."
        }
    ];

    return (
        <section className="py-10 bg-neutral-300">
            <div className="mb-12 text-2xl font-semibold text-center">Services We Offer</div>
            <div className="flex flex-wrap px-8">
                {services.map(service => {
                    return <ServiceCard {...service} />;
                })}
            </div>
        </section>
    );
}

const ServiceCard = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="mb-10 bg-white rounded-sm shadow">
            <div className="bg-gray-400 aspect-square">
                {/* <img src="https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp" alt="temp" /> */}
            </div>
            <div className="p-4">
                {title}
                {description}
            </div>
        </div>
    );
}

export default Services;
