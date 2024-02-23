import "../../styles/projects/projectsSlider.css";
import "../../styles/projects/projectCard.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';

import { SlLink } from "react-icons/sl";
import { Link } from "@mui/material";


const Project = ({ projectData }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="project__card">
      <CardMedia
        sx={{ height: 256 }}
        image={`img/projects/${projectData.image}`}
        title={projectData.name}
      />
      <CardActions>
        <Link href={projectData.link} fontSize={'large'} underline="none" target="_blank" rel="noreferrer">
          <SlLink />
        </Link>
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