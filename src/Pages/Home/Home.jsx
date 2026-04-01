import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header"
import Project from "../../Components/Projects/Project";
import Services from "../../Components/Services/Services"
import TechTools from "../../Components/TechTools/TechTools"


export default function Home() {
    return(
    <div>
        <Header />
        <About />
        <Services />
        <TechTools />
        <Project />
        <Contact />
    </div>
    )
}