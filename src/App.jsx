import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from "./components/Expertise.jsx";
import AboutMe from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <>
            <Navbar/>
            <div id="home"><Hero/></div>
            <div id="expertise"><Expertise/></div>
            <div id="about"><AboutMe/></div>
            <div id="portfolio"><Projects/></div>
            <div id="contact"><Contact/></div>
            <div id="footer"><Footer/></div>

        </>
    )
}

export default App;