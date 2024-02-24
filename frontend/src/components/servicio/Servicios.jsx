import React, { useEffect, useState } from 'react';
import { FaGlobe, FaCog, FaCloud } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './servicio.css';
// import { Link } from "react-router-dom";

const Servicios = () => {
  const servicios = [
    <div className="card">
      <div className="imageContainer">
        <FaGlobe className="image" />
      </div>
      <h2 className="title">Desarrollo de sitios web</h2>
      <p className="text">Construimos tu sitio web a tu medida</p>
      {/* <Link to=""> */ } 
        <button className="button" >Consulta</button>
      {/* </Link> */}
    </div>,
    <div className="card">
      <div className="imageContainer">
        <FaCog className="image" />
      </div>
      <h2 className="title">Mantenimiento de sitios</h2>
      <p className="text">Transformamos y gestionamos tu página web</p>
      {/* <Link to=""> */}
        <button className="button" >Consulta</button>
      {/* </Link> */}
    </div>,
    <div className="card">
      <div className="imageContainer">
        <FaCloud className="image" />
      </div>
      <h2 className="title">Hosting</h2>
      <p className="text">Servicio de Hosting rápido, seguro y confiable</p>
      {/* <Link to=""> */}
        <button className="button" >Consulta</button>
      {/* </Link> */}
    </div>
  ];

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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <>
      <h1 className='titlePrincipal'>SERVICIOS</h1>
      <Slider {...settings}>
        {servicios.map((ser, index) => (
          <div key={index}>
            {ser}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Servicios;