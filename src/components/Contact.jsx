import {useState} from "react";

export default function Contact(){
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d30bf057-3491-43b6-8689-c5a05bd1556e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className="flex flex-col items-center px-6 md:px-12 lg:px-20 py-20">
        <p className="text-xs lg:text-sm text-gray-500 font-semibold">Get in touch</p>
        <h1 className="text-4xl tracking-tight font-bold mb-8 pt-4  flex items-center">Contact me</h1>
        <form onSubmit={onSubmit} className="flex flex-col space-y-6 w-full max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col w-full">
                    <label className="mb-1 font-medium">First Name</label>
                    <input name="first-name" type="text" className="bg-blue-400/10 border border-purple-500 p-2 rounded-md w-full" required />
                </div>
                <div className="flex flex-col w-full">
                    <label className="mb-1 font-medium">Last Name</label>
                    <input name="last-name" type="text" className="bg-blue-400/10 border border-purple-500 p-2 rounded-md w-full"  required />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col w-full">
                    <label className="mb-1 font-medium">Email</label>
                    <input name="email" type="email" className="bg-blue-400/10 border border-purple-500 p-2 rounded-md w-full" placeholder="your@email.com"  required />
                </div>
                <div className="flex flex-col w-full">
                    <label className="mb-1 font-medium">Choose a topic</label>
                    <select name="topic" className="bg-blue-400/10 border border-purple-500 p-2 rounded-md w-full text-gray-400"  required >
                        <option value="" selected disabled>Select a topic</option>
                        <option>Web Development</option>
                        <option>Internship Opportunities</option>
                        <option>Freelance & Contract Work</option>
                        <option>Other(Specify in the message)</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Message</label>
                <textarea name="message" className="bg-blue-400/10 border border-purple-500 p-2 rounded-md w-full h-32 resize-none" placeholder="Write a message"></textarea>
            </div>
            <div className="flex justify-center">
            <button type="submit" className="bg-purple-400 text-white px-6 py-2 rounded-lg hover:bg-purple-500">Submit</button>
            </div>
            </form>
            <span className="text-green-500 pt-4">{result}</span>
    </div>);
}