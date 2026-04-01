import Javascript from "../../../assets/TechToolsImages/js.png"
import React from "../../../assets/TechToolsImages/react.png"
import Html from "../../../assets/TechToolsImages/html.png"
import Css from "../../../assets/TechToolsImages/css.png"
import "./FrontEnd.css"



export default function FrontEnd() {
    return(
        <div className="frontEnd">
            <div className="frontEnd-top">
                <p className="frontEnd-top-text">Frontend Engineering</p>
                <div className="frontEnd-top-line"></div>
            </div>
            <p className="frontEnd-description">
                Building immersive, responsive, and performant user interfaces with cutting-edge libraries and frameworks.
            </p>

            <div className="frontEnd-cards">
                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Javascript} alt="" />
                        </div>
                        <p className="frontEnd-title">JavaScript</p>
                    </div>

                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={React} alt="" />
                        </div>
                        <p className="frontEnd-title">React</p>
                    </div>

                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Html} alt="" />
                        </div>
                        <p className="frontEnd-title">HTML</p>
                    </div>

                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Css} alt="" />
                        </div>
                        <p className="frontEnd-title">CSS</p>
                    </div>
            </div>
        </div>
    )
}