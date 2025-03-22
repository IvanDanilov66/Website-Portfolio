import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full p-4 flex items-center justify-between sticky top-0 left-0 bg-white shadow-md z-50">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
                <img src={logo} alt="Logo" className="w-auto ml-5 md:ml-10 h-10" />
            </Link>

            <ul className="hidden md:flex space-x-6 text-black mr-10">
                {["Hero", "Expertise", "About", "Portfolio"].map((section, index) => (
                    <li key={index}>
                        <Link
                            to={section.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="hover:text-purple-400 cursor-pointer capitalize"
                        >
                            {section}
                        </Link>
                    </li>
                ))}
            </ul>

            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hidden md:block border border-purple-400 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-400 hover:border-white hover:text-white cursor-pointer"
            >
                Contact Me
            </Link>

            <button
                className="md:hidden text-2xl mr-5 text-black z-50 relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes className="text-black" /> : <FaBars className="text-black" />}
            </button>

            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-lg transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {["Hero", "Expertise", "About", "Portfolio", "Contact"].map((section, index) => (
                    <Link
                        key={index}
                        to={section.toLowerCase()}
                        smooth={true}
                        duration={500}
                        className="text-black hover:text-purple-400 cursor-pointer text-xl"
                        onClick={() => setIsOpen(false)}
                    >
                        {section}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
