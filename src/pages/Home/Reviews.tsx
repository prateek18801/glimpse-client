import { FaStar } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import config from "../../config";


const Reviews = () => {
    return (
        <section className="mb-20 md:px-16">
            <div className="mb-12 text-2xl font-semibold text-center">Reviews From Our Users</div>
            <div className="flex gap-4 px-8 py-4 overflow-x-scroll">
                {config.reviews.map((review, i) => {
                    return <ReviewCard key={i} {...review} />
                })}
            </div>
        </section>
    );
}

const ReviewCard = ({ description, author, institute, rating }: { description: string, author: string, institute: string, rating: number }) => {
    return (
        <div className="p-6 rounded-sm shadow-md bg-neutral-50">
            <div className="text-lg font-semibold">{author}</div>
            <div className="mb-4 text-xs italic text-gray-600">{institute}</div>
            <div className="flex gap-1 mb-4 text-xl">
                {[...Array(rating)].map((_, i) => <FaStar key={i} />)}
            </div>
            <div className="mb-1"><FaQuoteLeft /></div>
            <div className="w-64 h-20 mb-6 text-sm overflow-ellipsis">{description}</div>
            <div><FaQuoteRight /></div>
        </div>
    );
}

export default Reviews;
