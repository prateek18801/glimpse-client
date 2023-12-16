import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const navRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as HTMLDivElement)) {
                setIsExpanded(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    return (
        <nav ref={navRef}>
            <div className="fixed top-0 left-0 z-30 flex items-center justify-center w-screen py-8 bg-white shadow">
                <button className="absolute p-2 text-2xl left-6" onClick={() => setIsExpanded(prev => !prev)}>
                    <IoMdMenu />
                </button>
                <div className="text-xl font-logo">GLIMPSE</div>
            </div>
            <div className={`fixed top-0 left-0 h-screen z-20 pl-8 transition-transform bg-white w-60 ${isExpanded ? "" : "-translate-x-60"}`}>
                <ul className="mt-32 font-medium">
                    <li className="mb-6">
                        <NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>HOME</NavLink>
                    </li>
                    <li className="mb-6">
                        <NavLink to="/services" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>SERVICES</NavLink>
                    </li>
                    <li className="mb-6">
                        <NavLink to="/about" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>ABOUT</NavLink>
                    </li>
                    <li className="mb-12">
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>CONTACT</NavLink>
                    </li>
                    <NavLink to="/login"><button className="px-4 py-2 text-white bg-black">LOGIN</button></NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
