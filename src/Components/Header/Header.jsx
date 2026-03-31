import HeaderImage from "../../assets/HeaderImages/right-arrow.png" 
import "./Header.css"

export default function Header () {
    return(
        <section id="header">
             <div className="header">
            <p className="header-top">FRONTEND DEVELOPER <span className="slash">//</span> GRAPHIC DESIGNER</p>
            <h1 className="header-top-h1">Creative</h1>
            <h1 className="header-top-h1-bottom">Web Developer</h1>
            <p className="description">
                I'm a Ghanaian-based web designer and frontend developer specializing in React and JavaScript. I design and build high-converting websites and product UIs that feel premium and ship fast.
            </p>

            <div className="my-works">
                <a href="#contacts" className="project">
                    START PROJECT
                    <img src={HeaderImage} alt="" />
                </a>

                <a href="#" className="portfolio">
                    PORTFOLIO
                </a>
            </div>

            <div className="header-bottom-line"></div>

        </div>
        </section>
       
    )
}