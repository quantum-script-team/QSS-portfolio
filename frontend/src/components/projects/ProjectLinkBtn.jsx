import { SlLink } from "react-icons/sl";

const ProjectLinkBtn = ({projectData}) => {
  return (
    <a className="project__link" href={projectData.link} target="_blank" rel="noreferrer">
      <SlLink />
    </a>
  )
}

export default ProjectLinkBtn