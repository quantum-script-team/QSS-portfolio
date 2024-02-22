import Slider from "react-slick";

import '../../styles/projects/projectModal.css'

function ProjectModalCarousel({projectData}) {

    // console.log(projectData)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider__modal",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider__container">
      <Slider {...settings}>
        <div className="project__modal__img__container">
          <img src={`img/projects/${projectData.image}`} alt={projectData.name}/>
        </div>
        <div className="project__modal__img__container">
          <img src={`img/projects/${projectData.image}`} alt={projectData.name}/>
        </div>
        <div className="project__modal__img__container">
          <img src={`img/projects/${projectData.image}`} alt={projectData.name}/>
        </div>
      </Slider>
    </div>
  );
}

export default ProjectModalCarousel;
