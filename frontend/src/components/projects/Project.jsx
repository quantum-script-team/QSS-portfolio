import "../../styles/projects/projectsSlider.css";
import "../../styles/projects/projectCard.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProjectLinkBtn from "./ProjectLinkBtn";

import { Link } from "react-router-dom";
import ProjectTitle from "./ProjectTitle";

const Project = ({ projectData }) => {
  return (
    <Card sx={{ maxWidth: 320}} className="project__card">
      <CardMedia
        sx={{ height: 220 }}
        image={`img/projects/${projectData.image}`}
        title={projectData.name}
      />
      <CardContent sx={{ backgroundColor: "#2d2d2d" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
        >
          <ProjectTitle projectData={projectData} />
        </Typography>
      </CardContent>
      <CardActions className="project__actions">
        <Link to={`/contact`} className="contact__link">
          Contactanos
        </Link>
        <ProjectLinkBtn projectData={projectData} />
      </CardActions>
    </Card>
  );
};

export default Project;
