import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home"
// import About from "../src/Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
// import Experience from "./Pages/Experience/Experience";
// import Work from "./Pages/Work/Work";
// import Contact from "./Pages/Contact/Contact";


export default function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />} />
        {/* <Route path="/about" element= {<About />} /> */}
        {/* <Route path="/experience" element= {<Experience />} /> */}
        {/* <Route path="/work" element={<Work />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
    </>
  )
}