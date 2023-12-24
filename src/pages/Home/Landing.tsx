import { IoSearch } from "react-icons/io5";

const Landing = () => {
    return (
        <section className="my-24 md:my-0 md:flex md:flex-row-reverse md:items-center md:px-16 md:h-screen gap-x-24">
            <div className="w-full mb-8 bg-gray-400 md:w-2/5 md:mb-0">
                <img src="https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp" alt="temp" />
            </div>
            <div className="mx-4 md:w-3/5 md:mx-0">
                <div className="mb-2 text-2xl font-semibold text-center md:text-left md:text-4xl md:mb-4">High quality printing services for universities</div>
                <div className="mb-10 text-sm font-medium text-center text-gray-600 md:text-left md:text-2xl md:mb-14">Order prints by course, departments or special events!</div>
                <div className="flex w-full">
                    <div className="flex items-center flex-grow px-4 mr-2 bg-white rounded-sm shadow">
                        <input type="text" className="w-full h-full py-4 text-lg outline-none" placeholder="Enter your requirement" />
                        <div className="text-xl"><IoSearch /></div>
                    </div>
                    <button className="px-4 py-2 font-medium text-white bg-black rounded-sm md:px-8 md:text-lg">Search</button>
                </div>
            </div>
        </section>
    );
}

export default Landing;
