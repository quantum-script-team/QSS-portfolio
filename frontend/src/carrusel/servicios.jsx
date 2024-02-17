import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';

export const Servicios = ()=> {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Desarollo</SwiperSlide>
        <SwiperSlide>Mantenikiento de </SwiperSlide>
        <SwiperSlide>Hoisting</SwiperSlide>
      </Swiper>
    </>
  );
}
