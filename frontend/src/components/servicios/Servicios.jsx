import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/servicios/servicio.css";
import { services } from "../../data/services.json";

const Servicios = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="services">
      <h1 className="services__h1">SERVICIOS</h1>
      <Slider {...settings}>
        {services.map((serv) => (
          <div className="services__card" key={serv.id}>
            <div className="services__card--container">
              <div className="services__container--img">
                <img src={serv.img} alt="LogoWWW" className="services__img" loading="lazy" />
              </div>
              <h2 className="services__title">{serv.title}</h2>
              <p className="services__text">{serv.description}</p>
              <a href="#contactus" className="services__btn">Consultar</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Servicios;
