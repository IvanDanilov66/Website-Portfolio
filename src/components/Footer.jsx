import { Link } from 'react-scroll';
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full p-4 flex justify-between text-black bg-blue-400/10">
            <Link
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer"
            >
                <img src={logo} alt="Logo" className="w-auto ml-10 h-10" />
            </Link>

            <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 text-xl hover:text-purple-700">
                    <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 text-xl hover:text-purple-700">
                    <FaFacebookF />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 text-xl hover:text-purple-700">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 text-xl hover:text-purple-700">
                    <FaGithub />
                </a>
            </div>
        </footer>
    );
}