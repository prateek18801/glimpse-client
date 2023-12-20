import { Link } from "react-router-dom";

const Printing = () => {
    const prints = [
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        }
    ];

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
