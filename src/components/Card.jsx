export default function Card({icon,title,desc}){
    return(
    <div className="bg-blue-400/10 px-6 py-14 rounded-lg shadow-md flex flex-col text-left h-full">
        <div className="text-purple-500 mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
    </div>);
}