import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import "../../src/styles/carrusel.css" 

const CarrUsel = () => {

	const links = [
		{
		  icon: <FaReact classname="icon" />,
		},
		{
		  icon: <FaCss3Alt classname="icon" />,
		},
		{
		  icon: <FaBootstrap classname="icon"/>,
		},
		{
		  icon: <SiMongodb classname="icon"/>,
		},
		{
		  icon: <FaHtml5 classname="icon"/>,
		},
		{
		  icon: <DiNodejs classname="icon"/>,
		},
		{
			icon: <IoLogoJavascript classname="icon"/>,
		},
	  ];
	
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
	  {links.map((link, index) => (
        <SwiperSlide key={index}>
            {link.icon}
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default CarrUsel;