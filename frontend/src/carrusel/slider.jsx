import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css"
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiDjango } from "react-icons/di";




const  SwipeToSlide = ()=>{
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
	autoplay: true,
	autoplaySpeed:1300,
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className="slider-container">
		<div className="stock">
			<h2>STOCK DE HERRAMIENTAS</h2>
		</div>
		<br />
		<br />
		<br />
      <Slider {...settings}>
        <div>
        <FaReact className="icon react" />
        </div>
        <div>
        <FaCss3Alt className="icon css"/>
        </div>
        <div>
        <FaBootstrap className="icon bootstrap"/>
        </div>
        <div>
        <SiMongodb className="icon mongodb"/>
        </div>
        <div>
        <FaHtml5 className="icon html"/>
        </div>
        <div>
        <DiNodejs className="icon nodejs"/>
        </div>
        <div>
        <IoLogoJavascript className="icon javascript"/>
        </div>
        <div>
        <FaFigma className="icon figma"/>
        </div>
        <div>
        <SiAxios className="icon axios"/>
        </div>
		<div>
        <FaSass className="icon sass"/>
        </div>
		<div>
        <DiPostgresql className="icon postgre"/>
        </div>
		<div>
        <SiRedux className="icon redux"/>
        </div>
		<div>
        <SiSequelize className="icon sequelize"/>
        </div>
		<div>
        <SiTailwindcss className="icon tailwind"/>
        </div>
		<div>
        <SiMongoose className="icon mongoose"/>
        </div>
		<div>
        <GrMysql className="icon mysql"/>
        </div>
		<div>
        <DiDjango className="icon django"/>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
