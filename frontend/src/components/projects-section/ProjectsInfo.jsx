import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsFade from "./ProjectsFade";
import {projects} from "../../data/projects.json";

function ProjectsInfo() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 30000,
    waitForAnimate: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectsFade key={project.id} projectData={project} />
        ))}
      </Slider>
    </div>
  );
}

export default ProjectsInfo;
