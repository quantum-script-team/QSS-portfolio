import '../styles/projects/projects.css'
import ProjectsSlider from "../components/projects/ProjectsSlider"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section id="projects__section">
      <h1>Explorá nuestros proyectos realizados</h1>
      <div>
        <div id='projects__carousel'>
          <ProjectsSlider></ProjectsSlider>
        </div>
        <div id='projects__actions'>
          <div id="back__container">
            <Link to={`/`} id="back__button--projects">
              <MdOutlineArrowBackIosNew />
            </Link>
          </div>
          <Link to={`/contact`} className="contact__link">
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects