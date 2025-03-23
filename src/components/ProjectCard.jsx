import React from "react";

export default function ProjectCard({ image, title, description,link }) {
    return (
        <div className="w-[50%] lg:w-full">
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative shadow-xl rounded-lg cursor-pointer overflow-hidden group block"
        >
            <img
                src={image}
                alt={title}
                className="h-48 lg:h-64 w-full object-cover  rounded-t-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-400/50 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
            <div className="p-4 relative z-10">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
            </div>
        </a>
        </div>
    );
}
