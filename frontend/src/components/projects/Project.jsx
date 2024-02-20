import "../../styles/projects/projectsSlider.css";
import "../../styles/projects/projectCard.css";

const Project = ({ projectData }) => {
  return (
    <a
      href={projectData.link}
      target="_blank"
      rel="noreferrer"
      className="project__"
    >
      <figure key={projectData.id} className="project__card">
        <img src={`img/projects/${projectData.image}`} alt={projectData.name} />
        <figcaption>
          <h2>{projectData.name}</h2>
        </figcaption>
      </figure>
    </a>
  );
};

export default Project;
