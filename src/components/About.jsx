import about from '../assets/about.png';

export default function AboutMe() {
    return (
        <div className="flex items-center justify-between flex-col lg:flex-row  px-6 md:px-12 lg:px-20 py-20 ">

            <div className="w-1/2">
                <img
                    src={about}
                    alt="About Me"
                    className="w-full lg:w-2/3 h-auto rounded-full object-cover"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center pl-8 ">
                <p className="text-xs lg:text-sm text-gray-500 font-semibold pb-3">About</p>
                <h1 className="text-4xl tracking-tight font-bold mb-8">About Me</h1>
                <div className="w-[90%]">
                <p className=" pb-5">
                    I’m a student with a passion for coding and mathematics.
                    I have a solid foundation in Java Spring, React with Tailwind and standard CSS, as well as some experience with Flutter, Python Selenium, and Data Science.
                    While I still have my graduation to complete, I’ve successfully passed all my exams and am eager to jump into the professional world.
                    In my free time, you’ll often find me gaming, watching movies, or spending time with friends.
                </p>
                <p> I believe in the power of continuous learning and strive to stay on top of the latest technologies and trends.
                    My goal is to combine my love for problem-solving with the ability to create efficient, scalable software solutions.
                    The journey of learning and improving never stops, and I’m excited for the future!</p>
                </div>
            </div>
        </div>
    );
}