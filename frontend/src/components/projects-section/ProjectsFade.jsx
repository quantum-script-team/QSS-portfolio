import "../../styles/projects-section/projectsFade.css"
import { SlLink } from "react-icons/sl";
import { Link } from "react-router-dom";

const ProjectsFade = ({ projectData }) => {
    return (
        <div className="projects__grid">
            <div className="image__container">
                <img src={`../../public/img/projects/${projectData.image}`} alt="" />
            </div>


            <h2 className="projects__name">{projectData.name}</h2>

            <p className="projects__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum fugiat, aut, atque quaerat accusamus deserunt tenetur porro exercitationem saepe ipsam! Ex odit suscipit minus ipsum fuga maxime id harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam commodi suscipit, illum saepe ullam temporibus labore enim unde exercitationem.</p>

            <div className="buttons__container">    
                <a className="link__btn" href={projectData.link}><SlLink /></a>
                <Link to="/projects">
                <button className="seeMore__btn">Ver más</button> 
                </Link>
            </div>
        </div>

    );
};

export default ProjectsFade;