import "../../styles/projects/projectsSlider.css";
import "../../styles/projects/projectCard.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ProjectLinkBtn from "./ProjectLinkBtn";


const Project = ({ projectData }) => {



  return (
    <Card sx={{ maxWidth: 320 }} className="project__card">
      <CardMedia
        sx={{ height: 128 }}
        image={`img/projects/${projectData.image}`}
        title={projectData.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectData.name}
        </Typography>
      </CardContent>
      <CardActions className="project__actions">
        <ProjectLinkBtn projectData={projectData}></ProjectLinkBtn>
      </CardActions>
    </Card>
  );
};

export default Project;



/* 
export default function MediaCard() {
  return (
    
  );
} */


{/* <a
        href={projectData.link}
        target="_blank"
        rel="noreferrer"
        className="project__"
      >
        <figure key={projectData.id} className="project__card">
          <img
            src={`img/projects/${projectData.image}`}
            alt={projectData.name}
          />
          <figcaption>
            <h2>{projectData.name}</h2>
          </figcaption>
        </figure>
      </a> */}