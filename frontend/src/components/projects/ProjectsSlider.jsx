import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/projects/projectsSlider.css";

import Project from "./Project";
import Slider from "react-slick";

import {projects} from '../../data/projects.json'

function ProjectsSlider() {
  const settings = {
    className: "slider__",
    dots: true,
    draggable: true,
    rows: 2,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1176,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          rows: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          infinite: false,
          dots: false
        }
      }
    ]
  };

  return (
    <section id="slider__container">
      <Slider {...settings}>
        {projects.map((project) => (
          <Project key={project.id} projectData={project}/>
        ))}
      </Slider>
    </section>
  );
}

export default ProjectsSlider;
