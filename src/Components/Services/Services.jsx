import Code from "../../assets/ServicesImages/code.png"
import Graphic from "../../assets/ServicesImages/graphic.png"
import "./Services.css"



export default function Services() {
    return(
        <section id="services">
            <div className="services">
                <p className="services-top"><span className="services-top-slash">//</span> WHAT I DO</p>
                <h1 className="services-top-h1">My</h1>
                <h1 className="services-top-bottom">Services</h1>
                <p className="services-bottom-description">Expert solutions crafted with precision and innovation</p>

                <div className="services-cards">
                    <div className="card">
                        <div className="card-image">
                            <img src={Code} alt="" />
                        </div>
                        <p className="card-title">
                            Frontend Development
                        </p>
                        <p className="card-description">

                            I build fast, scalable frontends using React and Next.js with performance, accessibility, and UX baked in. Clean architecture, maintainable code, and interfaces that feel intentional—not slapped together.
                        </p>
                        <div className="card-bottom-line"></div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={Graphic} alt="" />
                        </div>
                        <p className="card-title">
                            Graphic Designing
                        </p>
                        <p className="card-description">
                           I create visually compelling designs that blend creativity with purpose. Every detail is intentional, from color and typography to layout,resulting in clean, impactful visuals that communicate clearly.
                        </p>
                        <div className="card-bottom-line"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}