import "../../styles/projects/projectsSlider.css";
import "../../styles/projects/projectCard.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProjectLinkBtn from "./ProjectLinkBtn";

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
          sx={{color: "#F5F5F5"}}
        >
          <ProjectTitle projectData={projectData} />
        </Typography>
        <Typography
          variant="p"
          component="div"
          sx={{color: "#F5F5F5"}}
        >
          {projectData.description}
        </Typography>
      </CardContent>
      <CardActions className="project__actions">
        <ProjectLinkBtn projectData={projectData} />
      </CardActions>
    </Card>
  );
};

export default Project;
