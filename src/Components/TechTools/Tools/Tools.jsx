import "./Tools.css"
import Code from "../../../assets/ServicesImages/code.png"
import Gpt from "../../../assets/TechToolsImages/gpt.png"
import Vscode from "../../../assets/TechToolsImages/vscode.jfif"
import Discord from "../../../assets/TechToolsImages/discord.png"
import Stack from "../../../assets/TechToolsImages/stack.png"


export default function Tools() {
    return(
        <div className="Tools">
            <div className="Tools-top">
                <p className="Tools-top-text">Tools & Ecosystem</p>
                <div className="Tools-top-line"></div>
            </div>
            <p className="Tools-description">
               The essential utilities, platforms, and integrations that power my development workflow.
            </p>

            <div className="Tools-cards">
                    <div className="Tools-card">
                        <div className="Tools-image">
                            <img src={Vscode} alt="" />
                        </div>
                        <p className="Tools-title">Vs Code</p>
                    </div>

                    <div className="Tools-card">
                        <div className="Tools-image">
                            <img src={Stack} alt="" />
                        </div>
                        <p className="Tools-title">Stack Overflow</p>
                    </div>

                    <div className="Tools-card">
                        <div className="Tools-image">
                            <img src={Discord} alt="" />
                        </div>
                        <p className="Tools-title">Discord</p>
                    </div>

                    <div className="Tools-card">
                        <div className="Tools-image">
                            <img src={Gpt} alt="" />
                        </div>
                        <p className="Tools-title">ChatGPT</p>
                    </div>
            </div>
        </div>
    )
}