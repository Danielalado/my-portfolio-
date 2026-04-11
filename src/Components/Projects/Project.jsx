import FoodApp from "../../assets/ProjectImages/FoodApp2.png"
import Date from "../../assets/ProjectImages/calendar.png"
import Arrow from "../../assets/HeaderImages/right-arrow.png"
import Coffee from "../../assets/ProjectImages/Coffee.png"
import EBooks from "../../assets/ProjectImages/EBook.png"
import Journey from "../../assets/ProjectImages/Journey.png"
import "./Project.css"



export default function Project() {
    return(
        <div className="projects" id="projects">
            <h1 className="project-top">Featured</h1>
            <h1 className="project-bottom">Projects</h1>
            <p className="project-description">
                Success stories from clients who trusted my expertise to bring their vision to life.
            </p>

            <div className="project-cards">
                <div className="project-left">
                    <img src={FoodApp} alt="" />
                </div>

                <div className="project-right">
                    <div className="project-right-top">
                        <p className="date">
                            <img src={Date} alt="" />
                            <p>2026</p>
                        </p>
                        <p className="number">1</p>
                    </div>

                    <h2 className="project-name">Food App</h2>
                    <p className="project-name-description">Finally all your food needs are solved with one app</p>
                    <p className="project-name-about">Food App is an innovative app that helps solve all your food need in one app with just a click that connect you to the best food vendours near you</p>
                    <hr className="project-hr" />

                    <div className="project-right-bottom">
                        <div className="left">
                            <p className="left-top">FRONTEND DEVELOPMENT</p>
                            {/* <p className="left-bottom">WEB DESIGN</p> */}
                        </div>
                        <div className="right">
                            <a href="https://foodapp-eosin-ten.vercel.app/" target="_blank">
                            <p>EXPLORE</p>
                            </a>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="project-cards">
                <div className="project-left">
                    <img src={EBooks} alt="" />
                </div>

                <div className="project-right">
                    <div className="project-right-top">
                        <p className="date">
                            <img src={Date} alt="" />
                            <p>2026</p>
                        </p>
                        <p className="number">2</p>
                    </div>

                    <h2 className="project-name">EBooks App</h2>
                    <p className="project-name-description">Finally all your EBooks needs are solved with one app</p>
                    <p className="project-name-about">EBook App is an innovative app that helps solve all your book needs in one app with just a click that connect you to a hub of soft copy of books at your confort.</p>
                    <hr className="project-hr" />

                    <div className="project-right-bottom">
                        <div className="left">
                            <p className="left-top">FRONTEND DEVELOPMENT</p>
                            {/* <p className="left-bottom">WEB DESIGN</p> */}
                        </div>
                        <div className="right">
                            <a href="https://danielalado.github.io/SupremEBook/" target="_blank">
                            <p>EXPLORE</p>
                            </a>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="project-cards">
                <div className="project-left">
                    <img src={Coffee} alt="" />
                </div>

                <div className="project-right">
                    <div className="project-right-top">
                        <p className="date">
                            <img src={Date} alt="" />
                            <p>2025</p>
                        </p>
                        <p className="number">3</p>
                    </div>

                    <h2 className="project-name">Coffee Shop</h2>
                    <p className="project-name-description">Finally all your Coffee needs are solved with one shop</p>
                    <p className="project-name-about">Coffee Shop is an innovative shop that helps solve all your coffee needs in one app with just a click that connect you to the best coffee vendour near you</p>
                    <hr className="project-hr" />

                    <div className="project-right-bottom">
                        <div className="left">
                            <p className="left-top">FRONTEND DEVELOPMENT</p>
                            {/* <p className="left-bottom">WEB DESIGN</p> */}
                        </div>
                        <div className="right">
                            <a href="https://danielalado.github.io/coffe-shop/" target="_blank">
                            <p>EXPLORE</p>
                            </a>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="project-cards">
                <div className="project-left">
                    <img src={Journey} alt="" />
                </div>

                <div className="project-right">
                    <div className="project-right-top">
                        <p className="date">
                            <img src={Date} alt="" />
                            <p>2025</p>
                        </p>
                        <p className="number">4</p>
                    </div>

                    <h2 className="project-name">Devlopement Journey</h2>
                    <p className="project-name-description">This is how I started my developement Journey</p>
                    <p className="project-name-about">I started my developement journey with NODE8, an innovative hub with the focus on assisting young youth in and arout Ho to acquired a hands-on skills</p>
                    <hr className="project-hr" />

                    <div className="project-right-bottom">
                        <div className="left">
                            <p className="left-top">FRONTEND DEVELOPMENT</p>
                            {/* <p className="left-bottom">WEB DESIGN</p> */}
                        </div>
                        <div className="right">
                            <a href="https://danielalado.github.io/DevJourney/" target="_blank">
                            <p>EXPLORE</p>
                            </a>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="view-project">
                <p>VIEW ALL PROJECTS</p>
                <img src={Arrow} alt="" />
            </div>

        </div>
    )
}