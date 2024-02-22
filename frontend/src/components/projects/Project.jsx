import "../../styles/projects/projectsSlider.css";
import "../../styles/projects/projectCard.css";
import '../../styles/projects/projectModal.css'
import { Box, Button, Modal} from "@mui/material";
import { useState } from "react";
import ProjectModalCarousel from "./ProjectModalCarousel";
import ProjectModalData from "./ProjectModalData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 570,
  innerHeight: 240,
  bgcolor: "background.slate",
  border: "1px solid #F5F5F5",
  p: 4
};

const Project = ({ projectData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <figure key={projectData.id} className="project__card">
          <img
            src={`img/projects/${projectData.image}`}
            alt={projectData.name}
          />
        </figure>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="project__modal"
      >
        <Box sx={style}>
          <ProjectModalCarousel projectData={projectData}/>
          <ProjectModalData projectData={projectData}/>
        </Box>
      </Modal>
    </>
  );
};

export default Project;

{
  /* <a
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
  </a> */
}
