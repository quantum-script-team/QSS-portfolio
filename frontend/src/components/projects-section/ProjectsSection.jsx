import "../../styles/projects-section/projectsSection.css";
import ProjectsInfo from "./ProjectsInfo";

const ProjectsSection = () => {
    return (
        <div className='projects__section'>
            <h1 className="projects__title">Portafolio</h1>

            <div className="projects__container">
                <ProjectsInfo/>
            </div>

        </div>
    );
};

export default ProjectsSection;