import { FaGlobe, FaCog, FaCloud } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './servicio.css';
import { Pagination } from 'swiper/modules';

export const Servicios = ()=> {
  const servicios = [
    <div className="card">
    <div className="imageContainer">
      <FaGlobe className="image" /> 
    </div>
    <h2 className="title">Desarrollo de sitios web</h2>
    <p className="text">Construimos tu sitio web a tu medida</p>
    <button className="button">Consulta</button>
  </div>,
    <div className="card">
    <div className="imageContainer">
     <FaCog className="image" />
    </div>
    <h2 className="title">Mantenimiento de sitios</h2>
    <p className="text">Transformamos y gestionamos tu página web</p>
    <button className="button">Consulta</button>
  </div>,
    <div className="card">
    <div className="imageContainer">
     <FaCloud className="image" />

    </div>
    <h2 className="title">Hosting</h2>
    <p className="text">Servicio de Hosting rápido, seguro y confiable</p>
    <button className="button">Consulta</button>
    </div>

    
  ]
  
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        {servicios.map((ser)=>{
          return (<SwiperSlide>{ser}</SwiperSlide>)
          
        })}


      </Swiper>
       
    </>
  );
}
