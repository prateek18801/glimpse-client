import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section className="py-20 mb-20 bg-black">
            <div className="mb-2 text-2xl font-semibold text-center text-white">Take the First Step Towards Printing Success</div>
            <div className="mb-12 text-center text-stone-300">Elevate your marketing needs to new levels!</div>
            <div className="flex justify-center">
                <Link to="/contact">
                    <button className="py-3 font-medium bg-white rounded-sm px-7">Contact Sales</button>
                </Link>
            </div>
        </section>
    );
}

export default Contact;
