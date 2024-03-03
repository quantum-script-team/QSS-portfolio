import "../../styles/projects-section/projectsFade.css"
import { SlLink } from "react-icons/sl";
import { Link } from "react-router-dom";

const ProjectsFade = ({ projectData }) => {
    return (
        <div className="projects__grid">
            <div className="image__container">
                <img src={projectData.image} alt="" />
            </div>


            <h2 className="projects__name">{projectData.name}</h2>

            <p className="projects__description">{projectData.description}</p>

            <div className="buttons__container">    
                <a className="link__btn" href={projectData.link} target="_blank"><SlLink /></a>
                <Link to="/projects">
                <button className="seeMore__btn">Ver más</button> 
                </Link>
            </div>
        </div>

    );
};

export default ProjectsFade;