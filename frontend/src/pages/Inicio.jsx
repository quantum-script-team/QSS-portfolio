import Landing from "../components/Landing/Landing";
import About from  "../components/About/About";
import Servicios from "../components/servicios/Servicios";
import Technologies from "../components/technologies/Technologies";
import ProjectsSection from '../components/projects-section/ProjectsSection';
import Contact from "../components/contact/Contact"

const Inicio = () => {
  return (
    <>
      <Landing/>
      <About/>
      <Servicios />
      <Technologies/>
      <ProjectsSection />
      {/* <Contact/> */}
    </>
  );
};

export default Inicio;