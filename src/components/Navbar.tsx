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
            <div className="md:hidden">
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
                        <NavLink to="/login"><button className="px-4 py-2 text-white bg-black rounded-sm">LOGIN</button></NavLink>
                    </ul>
                </div>
            </div>
            <div className="fixed top-0 left-0 z-30 items-center justify-between hidden w-full px-16 py-6 bg-white shadow-sm md:flex">
                <div className="flex gap-x-16">
                    <div className="text-2xl font-logo">GLIMPSE</div>
                    <ul className="flex items-center gap-4 text-sm font-medium text-neutral-600">
                        <li className="">
                            <NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-8 text-black" : ""}>HOME</NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/services" className={({ isActive }) => isActive ? "underline underline-offset-8 text-black" : ""}>SERVICES</NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/about" className={({ isActive }) => isActive ? "underline underline-offset-8 text-black" : ""}>ABOUT</NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "underline underline-offset-8 text-black" : ""}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to="/login"><button className="px-6 py-3 text-sm font-medium text-white bg-black rounded-sm">LOGIN</button></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
