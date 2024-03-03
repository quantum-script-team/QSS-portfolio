import Servicios from "../components/servicios/Servicios";
import Landing from "../components/Landing/Landing";
import ProjectsSection from '../components/projects-section/ProjectsSection';
import Contact from "../components/contact/Contact"
import Technologies from "../components/technologies/Technologies";
import AboutUs from "../components/About/AboutUs";

const Inicio = () => {
  return (
    <>
      <Landing/>
      <AboutUs/>
      <Servicios />
      <Technologies/>
      <ProjectsSection />
      <Contact/>
    </>
  );
};

export default Inicio;