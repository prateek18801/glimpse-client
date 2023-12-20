import { BsLinkedin, BsInstagram, BsEnvelopeAtFill, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center w-full py-8 mt-16 text-white bg-zinc-900">
            <div className="flex flex-col items-center justify-center w-full max-w-5xl px-8 mb-16 md:flex-row md:mb-12 md:justify-between">
                <div className="flex flex-col items-center mb-8 text-3xl font-logo md:mb-0">
                    GLIMPSE
                    <div className="font-sans text-base">Education Pvt. Ltd.</div>
                </div>
                <ul className="flex gap-8 text-sm font-medium">
                    <li className="cursor-pointer"><Link to="/services">Services</Link></li>
                    <li className="cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="cursor-pointer"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="flex gap-6 mb-6 text-lg">
                <a href=""><BsEnvelopeAtFill /></a>
                <a href=""><BsWhatsapp /></a>
                <a href=""><BsInstagram /></a>
                <a href=""><BsLinkedin /></a>
            </div>
            <div className="text-xs">&copy; Glimpse Education Pvt. Ltd. All rights reserved.</div>
        </footer>
    );
}

export default Footer;
