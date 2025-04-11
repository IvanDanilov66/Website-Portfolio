import React from "react";
import fitness from "../assets/fitness-tracker.webp";
import calculator from "../assets/investment-calculator.webp";
import portfolio from "../assets/website-portfolio.png";
import flutter from "../assets/flutter.png";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
    {
        title: "Fitness-Tracker",
        description: "Full-stack fitness tracker for logging workouts and meals, with progress analysis. Built with React, Spring Boot, MySQL, and secured with JWT authentication.",
        image: fitness,
        link: "https://github.com/IvanDanilov66/Fitness-Tracker"
    },
    {
        title: "Investment Calculator",
        description: "React app that calculates investment growth with yearly breakdowns based on user inputs. Shows total contributions, interest earned, and portfolio value.",
        image: calculator,
        link: "https://github.com/IvanDanilov66/Investment-Calculator"
    },
    {
        title: "FiTest Mobile App",
        description: "Interactive quiz app where users answer questions and receive a score. Built with Firebase for data handling, and integrates Google Maps and camera functionality.",
        image: flutter,
        link: "https://github.com/IvanDanilov66/Mobilna-Aplikacija-FiTest"
    },
    {
        title: "Website Portfolio",
        description: "Responsive portfolio site built with React to showcase projects, skills, and experience. Features clean design, smooth navigation, and downloadable resume.",
        image: portfolio,
        link: "https://github.com/IvanDanilov66/Website-Portfolio"
    }

];

export default function Portfolio(){
    return (
            <div className="px-6 md:px-12 lg:px-20 py-32 ">
                <div className="flex flex-col lg:items-start items-center">
                <p className="text-xs text-gray-500 lg:text-sm font-semibold pb-3">Recent Projects</p>
                <h1 className="text-4xl tracking-tight font-bold mb-8">My Portfolio</h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10">
                    {projects.map((project, index) => (
                       <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
    );
};
