import Slider from "react-slick";

function ProjectsInfo() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src=""/>
        </div>
      </Slider>
      <h2 className="projects__name">Título de proyecto</h2>

      <p className="projects__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        tenetur quasi! Quibusdam id magni, porro eius qui dolore quam
        voluptate ipsa autem excepturi nulla sint dolorem eos necessitatibus
        fuga architecto.
      </p>
    </div>
  );
}

export default ProjectsInfo;
