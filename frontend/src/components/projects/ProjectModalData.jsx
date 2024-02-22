import ProjectLinkBtn from "./ProjectLinkBtn";
import '../../styles/projects/projectModal.css'
const ProjectModalData = ({projectData}) => {
  return (
    <div className="project__data__container">
      <h1>{projectData.name}</h1>
      <p>{projectData.description}</p>
      <ProjectLinkBtn />
    </div>
  );
};

export default ProjectModalData;
