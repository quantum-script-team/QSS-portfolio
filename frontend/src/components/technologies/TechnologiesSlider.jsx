import { technologies } from "../../data/technologies.json";
import Technology from "./Technology";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechnologiesSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <>
        <Slider {...settings}>
            {technologies.map((technology) => {
            <Technology
                key={technology.id}
                technologyData={technology}
            ></Technology>;
            })}
        </Slider>
        </>
    );
};

export default TechnologiesSlider;
