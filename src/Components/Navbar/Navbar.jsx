import globe from "../../assets/NavbarImages/globe.png"
import instagram from "../../assets/NavbarImages/instagram.png"
import linked from "../../assets/NavbarImages/linked.png"
import github from "../../assets/NavbarImages/github.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

export default function Navbar() {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setMenuClicked] = useState(false)

    //  toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
       
        setMenuClicked(!isMenuClicked)
    }

    const closeMenu = () => {
    setBurgerClass("burger-bar unclicked")
    setMenuClass("menu hidden")
    setMenuClicked(false)
}

    

    return(
    <div className="navbar">
        {/* <div className="sidebar"> */}
            <div className={menu_class}>
                <ul className="sidebar-btns">
                    <Link to="/" onClick={closeMenu}>HOME</Link>
                    <a href="#about" onClick={closeMenu}>ABOUT</a>
                    <a href="#services" onClick={closeMenu}>EXPERIENCE</a>
                    <a href="#projects" onClick={closeMenu}>WORK</a>
                    <a href="#contacts" onClick={closeMenu}>CONTACT</a>
                    {/* <Link to="/about">ABOUT </Link> */}
                    {/* <Link to="/experience">EXPERIENCE</Link> */}
                    {/* <Link to="/work">WORK</Link> */}
                    {/* <Link to="/contact">CONTACT</Link> */}
                </ul>
                <hr className="sidebar-hr" />
                <div className="sidebar-icons">
                    <img src={globe} alt="" onClick={closeMenu}/>
                    <img src={instagram} alt="" onClick={closeMenu}/>
                    <img src={linked} alt="" onClick={closeMenu}/>
                    <img src={github} alt="" onClick={closeMenu}/>
                </div>
                <a href="#contacts" className="button" onClick={closeMenu}>HIRE ME</a>
            </div>
        {/* </div> */}

        {/* humberger ends here  */}



        <Link to="/" className="navbar-left">
            <h2 className="navbar-logo">DA</h2>
            <div className="navbar-name">
                <h4>DANIEL ALADO</h4>
                <p>CRAETIVE SOFTWARE DEVELOPER</p>
            </div>
        </Link>
           
        <ul className="navbar-btns">
            <Link to="/">HOME</Link>
            <a href="#about">ABOUT</a>
            <a href="#services">EXPERIENCE</a>
            <a href="#projects">WORK</a>
            <a href="#contacts">CONTACT</a>
            {/* <Link to="/about">ABOUT</Link> */}
            {/* <Link to="/experience">EXPERIENCE</Link> */}
            {/* <Link to="/work">WORK</Link> */}
            {/* <Link to="/contact">CONTACT</Link> */}
        </ul>
        <hr className="navbar-hr" />
        <div className="navbar-right">
           <img src={globe} alt="" />
            <img src={instagram} alt="" />
            <img src={linked} alt="" />
            <img src={github} alt="" />
            <a href="#contacts">HIRE ME</a>
        </div>
        <div className="burger-menu" onClick={updateMenu}>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
            </div>
    </div>
    )
}