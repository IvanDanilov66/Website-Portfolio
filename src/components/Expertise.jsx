import { Code, Smartphone, Database, BarChart } from "lucide-react";
import Card from "./Card.jsx";

export default function Expertise(){
    const skills = [
        {
            icon: <Code size={32} />,
            title: "Web Development",
            desc: "I specialize in building robust and scalable web applications using Java Spring and React, combined with the power of Tailwind CSS for modern, responsive design."
        },
        {
            icon: <Smartphone size={32} />,
            title: "Mobile Development",
            desc: "Though still growing in this space, I have experience in Flutter and creating mobile applications with a focus on performance and cross-platform functionality."
        },
        {
            icon: <Database size={32} />,
            title: "Automation with Python",
            desc: "Using Python and Selenium, I automate repetitive tasks and create test scripts that improve the efficiency of workflows, saving time and reducing human error."
        },
        {
            icon: <BarChart size={32} />,
            title: "Data Science & Analytics",
            desc: "With a growing interest in data science, I explore using Python for data analysis, visualization, and building predictive models to unlock insights and make data-driven decisions."
        }
    ]


    return (
        <div className="mx-auto text-center px-6 md:px-12 lg:px-20 py-20">
            <div className="flex flex-col lg:items-start items-center">
            <p className="text-xs lg:text-sm text-gray-500 font-semibold pb-3">My skills</p>
            <h1 className="text-4xl tracking-tight font-bold mb-8">My Expertise</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10">
                {skills.map((skill, index) => (
                    <Card key={index} {...skill}  />
                ))}
            </div>
        </div>
    );
};