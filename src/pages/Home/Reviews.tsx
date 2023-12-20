import { FaStar } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Reviews = () => {

    const reviews = [
        {
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            org: "Ajay Kumar Garg Engineering College",
            stars: 4
        },
        {
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            org: "Ajay Kumar Garg Engineering College",
            stars: 5
        },
        {
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            org: "Ajay Kumar Garg Engineering College",
            stars: 3
        },
        {
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            org: "Ajay Kumar Garg Engineering College",
            stars: 5
        },
        {
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            org: "Ajay Kumar Garg Engineering College",
            stars: 2
        }
    ];

    return (
        <section className="mb-20 md:px-16">
            <div className="mb-12 text-2xl font-semibold text-center">Reviews From Our Users</div>
            <div className="flex gap-4 px-8 py-4 overflow-x-scroll">
                {reviews.map((review, i) => {
                    return <ReviewCard key={i} {...review} />
                })}
            </div>
        </section>
    );
}

const ReviewCard = ({ content, author, org, stars }: { content: string, author: string, org: string, stars: number }) => {
    return (
        <div className="p-6 rounded-sm shadow-md bg-neutral-50">
            <div className="text-lg font-semibold">{author}</div>
            <div className="mb-4 text-xs italic text-gray-600">{org}</div>
            <div className="flex gap-1 mb-4 text-xl">
                {Array(stars).fill(<FaStar />)}
            </div>
            <div className="mb-1"><FaQuoteLeft /></div>
            <div className="w-64 h-20 mb-6 text-sm overflow-ellipsis">{content}</div>
            <div><FaQuoteRight /></div>
        </div>
    );
}

export default Reviews;
