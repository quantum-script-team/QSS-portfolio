import "../../styles/projects/projectsSlider.css";
import "../../styles/projects/projectCard.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProjectLinkBtn from "./ProjectLinkBtn";

import ProjectTitle from "./ProjectTitle";

const Project = ({ projectData }) => {
  return (
    <Card sx={{ maxWidth: 320, border: "1px solid #444", borderRadius: ".5rem"}} className="project__card">
      <CardMedia
        sx={{ height: 220 }}
        image={projectData.image}
        title={projectData.name}
      />
      <CardContent sx={{ backgroundColor: "#242629", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "1.5rem"}}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{color: "#F5F5F5", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0, margin: 0, width: "100%"}}
        >
          <ProjectTitle projectData={projectData} />
          <ProjectLinkBtn projectData={projectData} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
