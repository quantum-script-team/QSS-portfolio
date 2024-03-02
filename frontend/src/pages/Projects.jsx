import '../styles/projects/projects.css'
import ProjectsSlider from "../components/projects/ProjectsSlider"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section id="projects__section">
      <h1>Explorá nuestros proyectos realizados</h1>
      <div>
        <div id='projects__actions'>
          <Link to={`/`} className="contact__link">
            <MdOutlineArrowBackIosNew />
          </Link>
          <Link to={`/contact`} className="contact__link">
            Contactanos
          </Link>
        </div>
        <div id='projects__carousel'>
          <ProjectsSlider></ProjectsSlider>
        </div>
      </div>
    </section>
  )
}

export default Projects