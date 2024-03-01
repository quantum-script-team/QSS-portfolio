import { technologies } from "../../data/technologies.json";
import Technology from "./Technology";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechnologiesSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3500,
        cssEase: "ease-in-out",
        draggable: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    autoplaySpeed: 3500,
                    cssEase: "ease-in-out",
                    draggable: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    autoplaySpeed: 3500,
                    cssEase: "ease-in-out",
                    draggable: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    autoplaySpeed: 3500,
                    cssEase: "ease-in-out",
                    draggable: false,
                    pauseOnHover: false,
                }
            }
        ]
    };

    return (
        <>
        <Slider {...settings}>
            {technologies.map((technology) => (
            <Technology key={technology.id} technologyData={technology} />
            ))}
        </Slider>
        </>
    );
};

export default TechnologiesSlider;
