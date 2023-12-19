import { IoSearch } from "react-icons/io5";

const Landing = () => {
    return (
        <section className="my-24">
            <div className="w-full mb-8 bg-gray-400 aspect-square">
                <img src="https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp" alt="temp" />
            </div>
            <div className="mx-4">
                <div className="mb-2 text-2xl font-semibold text-center">High quality printing services for universities</div>
                <div className="mb-10 text-sm font-medium text-center text-gray-600">Order prints by course, departments or special events!</div>
                <div className="flex w-full">
                    <div className="flex items-center flex-grow px-4 mr-2 rounded-sm shadow">
                        <input type="text" className="w-full h-full py-4 outline-none" placeholder="Enter your requirement" />
                        <div className="text-xl"><IoSearch /></div>
                    </div>
                    <button className="px-4 py-2 text-white bg-black rounded-sm">Search</button>
                </div>
            </div>
        </section>
    );
}

export default Landing;
