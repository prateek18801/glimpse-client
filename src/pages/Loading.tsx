import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = ({ error }: { error: boolean }) => {
    return (
        <section className="flex flex-col items-center justify-center w-screen h-screen text-white bg-black">
            <div className="mb-10 text-5xl select-none font-logo md:text-6xl">GLIMPSE</div>
            {error ?
                <div className="px-8 text-center text-neutral-300">We are facing some trouble at the moment, please try again shortly!</div>
                :
                <div className="text-2xl md:text-3xl animate-spin"><AiOutlineLoading3Quarters /></div>
            }
        </section>
    );
}

export default Loading;
