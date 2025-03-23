import about from '../assets/about.png';

export default function AboutMe() {
    return (
        <div className="flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20 py-20 space-y-10 lg:space-y-0">

            {/* Image Container */}
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center">
                <img
                    src={about}
                    alt="About Me"
                    className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-2/3 h-auto rounded-full object-cover"
                />
            </div>

            {/* Text Container */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 sm:px-8">
                <p className="text-xs lg:text-sm text-gray-500 font-semibold pb-3">About</p>
                <h1 className="text-3xl sm:text-4xl tracking-tight font-bold mb-6">About Me</h1>
                <div className="max-w-[90%] mx-auto lg:mx-0">
                    <p className="pb-4 text-sm sm:text-base">
                        I’m a student with a passion for coding and mathematics.
                        I have a solid foundation in Java Spring, React with Tailwind, and standard CSS, as well as some experience with Flutter, Python Selenium, and Data Science.
                        While I still have my graduation to complete, I’ve successfully passed all my exams and am eager to jump into the professional world.
                        In my free time, you’ll often find me gaming, watching movies, or spending time with friends.
                    </p>
                    <p className="text-sm sm:text-base">
                        I believe in the power of continuous learning and strive to stay on top of the latest technologies and trends.
                        My goal is to combine my love for problem-solving with the ability to create efficient, scalable software solutions.
                        The journey of learning and improving never stops, and I’m excited for the future!
                    </p>
                </div>
            </div>
        </div>
    );
}
