import config from "../config";

const About = () => {
    return (
        <section className="my-32">
            <div className="mb-20 text-2xl font-semibold text-center md:text-3xl">Who Are We</div>
            <div className="flex flex-wrap justify-center px-8 gap-x-12 gap-y-10">
                {config.about.map((point, i) => {
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
    );
}

export default About;
