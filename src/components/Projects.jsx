import React from "react";
import fitness from "../assets/fitness-tracker.webp";
import calculator from "../assets/investment-calculator.webp";
// import portfolio from "../assets/portfolio.webp";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
    {
        title: "Fitness-Tracker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: fitness,
        link: "#"
    },
    {
        title: "Investment Calculator",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: calculator,
        link: "#"
    },
    {
        title: "FiTest Mobile App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: fitness,
        link: "#"
    },
    {
        title: "Website Portfolio",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: fitness,
        link: "#"
    }

];

export default function Portfolio(){
    return (
            <div className="px-6 md:px-12 lg:px-20 py-32 ">
                <div className="flex flex-col items-start">
                <p className="text-xs text-gray-500 lg:text-sm font-semibold pb-3">Recent Projects</p>
                <h1 className="text-4xl tracking-tight font-bold mb-8">My Portfolio</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {projects.map((project, index) => (
                       <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
    );
};
