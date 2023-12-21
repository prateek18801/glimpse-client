import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {

    const pointers = [
        {
            title: "Specializes",
            image: "",
            description: "Glimpse Education Private Limited specializes in providing comprehensive services in the field of direct print mail, merchandise for fairs, and welcome kits."
        },
        {
            title: "Commitment",
            image: "",
            description: "Their commitment to excellence and attention to detail has established them as a trusted partner for organizations seeking superior solutions for their promotional needs."
        },
        {
            title: "Tailored solutions",
            image: "",
            description: "We offer tailored solutions for designing, printing, and distributing promotional materials that cater to the unique requirements of each client."
        },
        {
            title: "Customized merchandise",
            image: "",
            description: "Glimpse Education Private Limited provides customized merchandise for fairs and events that embodies their clients' brand identity, captivates their target audience, and leaves a lasting impression."
        },
        {
            title: "Expertise",
            image: "",
            description: "The company has expertise in managing welcome kit programs and has successfully partnered with esteemed institutions such as Saint Louis University to create exceptional welcome kits."
        },
        {
            title: "Value",
            image: "",
            description: "We value professionalism, innovation, and client satisfaction above all else and have forged strong partnerships with globally renowned organizations such as Globally Recruit, Globalshala, and Excelerate."
        },
        {
            title: "Dedicated team",
            image: "",
            description: "Glimpse Education Private Limited's dedicated team of experts is always ready to go the extra mile to ensure that clients' expectations are exceeded."
        },
        {
            title: "Timely delivery",
            image: "",
            description: "Their commitment to excellence, tailored solutions, and timely delivery sets them apart in the industry and guarantees a remarkable experience for their clients."
        },
    ]

    return (
        <>
            <Navbar />
            <section className="my-32">
                <div className="mb-12 text-2xl font-semibold text-center md:text-3xl">Who Are We</div>
                <div className="flex flex-wrap justify-center px-8 gap-x-12 gap-y-16">
                    {pointers.map((point, i) => {
                        return (
                            <div key={i} className="md:w-1/5">
                                <div className="mb-2 text-xl font-semibold text-center">{point.title}</div>
                                <hr className="mb-2" />
                                <div className="text-justify">{point.description}</div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;
