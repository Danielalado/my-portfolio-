import FrontEnd from "../../Components/TechTools/FrontEnd/FrontEnd"
import BackEnd from "../../Components/TechTools/BackEnd/BackEnd"
import Design from "../../Components/TechTools/Design/Design"
import Tools from "../../Components/TechTools/Tools/Tools"
import "./TechTools.css"

export default function TechTools() {
    return(
       <section id="TechTools">
            <div className="TechTools">
                <h1 className="TechTools-top-h1">My</h1>
                <h1 className="TechTools-top-bottom">Tech Universe</h1>
                <p className="TechTools-bottom-description">Navigating the digital space with a robust constellation of technologies, frameworks, and tools designed for scalability and performance.</p>

                <FrontEnd />
                <BackEnd />
                <Design />
                <Tools />
            </div>
       </section>
    )
}