import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Servicios from "../components/servicios/Servicios";
import Technologies from "../components/technologies/Technologies";
import ProjectsSection from "../components/projects-section/ProjectsSection";
import Contact from "../components/contact/Contact";
import "../styles/inicio/inicio.css";

const Inicio = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: "easeInOutQuart",
      duration: 1000,
    });
  };

  return (
    <>
      <Landing />
      <About />
      <Servicios />
      <Technologies />
      <ProjectsSection />
      <Contact />

      {showArrow && (
        <Link to="landing" smooth={true} duration={1000} offset={-50}>
          <IoArrowUpCircleOutline className="arrow-up" onClick={scrollToTop} />
        </Link>
      )}
    </>
  );
};

export default Inicio;
