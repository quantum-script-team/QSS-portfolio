import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
// import SwipeToSlide from "./carrusel/slider"
// import "./carrusel/slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Header from './components/Header/Header'

function App() {
  return (
    <div>
     
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App
