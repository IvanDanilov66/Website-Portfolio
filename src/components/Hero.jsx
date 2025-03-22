import { useState, useEffect } from 'react';
import pic from '../assets/pic.png';

export default function Hero() {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);

    const roles = ['Software Engineer', 'React Developer', 'Full Stack Developer', 'Front End Developer'];
    const currentRole = roles[roleIndex];

    useEffect(() => {
        let interval;

        if (!isDeleting) {
            interval = setInterval(() => {
                setDisplayedText((prev) => {
                    if (prev.length < currentRole.length) {
                        return prev + currentRole[prev.length];
                    }
                    return prev;
                });

                if (displayedText.length === currentRole.length) {
                    clearInterval(interval);
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }, 150);
        } else {
            interval = setInterval(() => {
                setDisplayedText((prev) => {
                    if (prev.length > 0) {
                        return prev.slice(0, prev.length - 1);
                    }
                    return prev;
                });

                if (displayedText.length === 0) {
                    clearInterval(interval);
                    setIsDeleting(false);
                    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }
            }, 100);
        }

        return () => clearInterval(interval);
    }, [displayedText, isDeleting, roleIndex, currentRole]);

    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20 py-20 bg-blue-400/10">
            <div className="w-full max-w-3xl text-center lg:text-left pb-12 lg:pb-0">
                <p className="text-xs lg:text-sm text-gray-500 font-semibold pb-3">Hey, I am Ivan</p>
                <h1 className="text-3xl md:text-4xl tracking-tight font-bold mb-6 min-h-[60px]">
                    I am <span className="text-purple-500">{displayedText}</span>, building the future one line of code at a time.
                </h1>
                <p className="text-sm md:text-base">
                    My passion for coding and problem-solving drives me to create innovative solutions that make a real-world impact.
                    From web development to data science, I am always learning and evolving, with a particular interest in Java Spring, React, and Python.
                    Let's build something amazing together!
                </p>
                <div className="mt-6">
                    <button className="bg-purple-400 text-white px-6 py-2 rounded-lg hover:bg-purple-500">
                        My Portfolio
                    </button>
                </div>
            </div>

            <div className="w-full max-w-4xl flex justify-center lg:justify-end">
                <div className="relative w-[80%] max-w-sm sm:max-w-md md:max-w-lg">
                    <img src={pic} alt="Description" className="relative z-20 rounded-3xl w-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[60%] bg-purple-500 rounded-3xl z-10 blur-3xl"></div>
                </div>
            </div>
        </div>
    );
}
