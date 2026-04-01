import "./Design.css"
import Canva from "../../../assets/TechToolsImages/canva.jfif"
import PixelLab from "../../../assets/TechToolsImages/pixelLab.jfif"
import LightRoom from "../../../assets/TechToolsImages/Lightroom.jfif"
import PhotoRoom from "../../../assets/TechToolsImages/photoroom.jfif"



export default function Design() {
    return(
        <div className="Design">
            <div className="Design-top">
                <p className="Design-top-text">Design & UI/UX</p>
                <div className="Design-top-line"></div>
            </div>
            <p className="Design-description">
               Crafting intuitive and visually stunning experiences that align with brand identity.
            </p>

            <div className="Design-cards">
                    <div className="Design-card">
                        <div className="Design-image">
                            <img src={Canva} alt="" />
                        </div>
                        <p className="Design-title">Canva</p>
                    </div>

                    <div className="Design-card">
                        <div className="Design-image">
                            <img src={PixelLab} alt="" />
                        </div>
                        <p className="Design-title">PixelLab</p>
                    </div>

                    <div className="Design-card">
                        <div className="Design-image">
                            <img src={LightRoom} alt="" />
                        </div>
                        <p className="Design-title">LightRoom</p>
                    </div>

                    <div className="Design-card">
                        <div className="Design-image">
                            <img src={PhotoRoom} alt="" />
                        </div>
                        <p className="Design-title">PhotoRoom</p>
                    </div>
            </div>
        </div>
    )
}