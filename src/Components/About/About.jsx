import HeaderImage from "../../assets/HeaderImages/right-arrow.png"
// import alado from "../../assets/AboutImages/alado.jpg"
import location from "../../assets/AboutImages/location.png"
// import { Link } from "react-router-dom"
import "./About.css"


export default function About () {
    return(
        <section id="about">
            <div className="about">
                <div className="left-col">
                    <div className="about-me">
                        <img src={location} alt="" />
                        <p>ABOUT ME</p>
                    </div>

                    <h1 className="about-me-h1">Hey, I'm</h1>
                    <h1 className="about-me-h1-bottom">Daniel!</h1>
                    <h2 className="about-me-h2">Frontend Developer</h2>
                    <p className="location">Based in Ghana,Volta Region</p>
                    <p className="about-description">
                        Design is where I started (graphic design), so I don't just “make websites” — I work in React, JavaScript, and Vanilla Css to ship fast, responsive sites with performance and UX baked in. Everything is intentional: it should look right, feel smooth, and communicate the brand clearly.
                    </p>
                    <p className="more-about-description">
                        // If you want a site that converts and doesn't crumble the second you need updates, that's my lane.
                    </p>

                    <div className="about-my-works">
                        <a href="#projects" className="project">
                            VIEW MY WORK
                            <img src={HeaderImage} alt="" />
                        </a>
                    
                        <a href="#contacts" className="portfolio">
                            GET IN TOUCH
                        </a>
                    </div>

                </div>

                <div className="image-wrapper">
                    <div className="right-col"></div>
                </div>
            </div>
        </section>
    )
}