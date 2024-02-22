import { FaGlobe, FaCog, FaCloud } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './servicio.css';
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

export const Servicios = ()=> {
  const servicios = [
    <div className="card">
    <div className="imageContainer">
      <FaGlobe className="image" /> 
    </div>
    <h2 className="title">Desarrollo de sitios web</h2>
    <p className="text">Construimos tu sitio web a tu medida</p>
    <Link to="/may">
    <button className="button" >Consulta</button>
    </Link>
  </div>,
    <div className="card">
    <div className="imageContainer">
     <FaCog className="image" />
    </div>
    <h2 className="title">Mantenimiento de sitios</h2>
    <p className="text">Transformamos y gestionamos tu página web</p>
    <Link to="www.google.com">
    <button className="button" >Consulta</button>
    </Link>
  </div>,
    <div className="card">
    <div className="imageContainer">
     <FaCloud className="image" />

    </div>
    <h2 className="title">Hosting</h2>
    <p className="text">Servicio de Hosting rápido, seguro y confiable</p>
    <Link to="www.google.com">
    <button className="button" >Consulta</button>
    </Link>
    </div>

    
  ]
  const [slidesPerViews, setSlidesPerViews] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Ajusta slidesPerViews dependiendo del ancho de la pantalla
      if (window.innerWidth >= 1024) {
        setSlidesPerViews(3); // Computadora
      } else if (window.innerWidth >= 768) {
        setSlidesPerViews(2); // Tablet
      } else {
        setSlidesPerViews(1); // Celular
      }
    };

    handleResize(); // Llama a la función para establecer el valor inicial

    window.addEventListener('resize', handleResize); // Escucha el evento de cambio de tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el event listener en la desmontura del componente
    };
  }, []);
  
  return (
    <>
      <Swiper
        slidesPerView={slidesPerViews}
        spaceBetween={10}
        autoplay={{
          delay:3500,
          disableOnInteraction:false
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        >
        {servicios.map((ser)=>{
          return (<SwiperSlide>{ser}</SwiperSlide>)
          
        })}


      </Swiper>
       <button>HOla</button>
    </>
  );
}
