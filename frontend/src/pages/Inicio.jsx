import Servicios from "../components/servicios/Servicios";
import Landing from "../components/Landing/Landing";
import ProjectsSection from '../components/projects-section/ProjectsSection';
import Contact from "../components/contact/Contact"

const Inicio = () => {
  return (
    <>
      <Landing/>
      <Servicios />
      <ProjectsSection />
      <Contact/>
    </>
  );
};
 

export default Inicio;