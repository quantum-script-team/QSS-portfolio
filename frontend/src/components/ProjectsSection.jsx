import '../styles/projectsSection.css';
import { HiOutlineLink } from "react-icons/hi";
import ProjectsInfo from './ProjectsInfo';

const ProjectsSection = () => {
    return (
        <div className='projects__section'>
            <h1 className="projects__title">Proyectos destacados</h1>

            <div className="projects__container">
                <ProjectsInfo/>
            </div>

            <div className="projects__buttons">
                <button className="link__btn"><HiOutlineLink /></button>

                <button className="seeMore__btn">Ver más</button>
            </div>

        </div>
    );
};

export default ProjectsSection;