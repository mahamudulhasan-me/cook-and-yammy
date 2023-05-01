import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import banner1 from "../../../../assets/images/banner1.avif";
import banner2 from "../../../../assets/images/banner2.avif";
import banner4 from "../../../../assets/images/banner4.avif";
import banner5 from "../../../../assets/images/banner5.jpg";
import banner6 from "../../../../assets/images/banner6.jpg";
export default function Banner() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-slate-600 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner5})` }}
          >
            slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[calc(100vh-130px)] bg-cover absolute top-0  bg-slate-600 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner6})` }}
          >
            slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[calc(100vh-130px)] bg-cover bg-slate-600 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[calc(100vh-130px)] bg-cover bg-slate-800 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${banner4})` }}
            className="w-full h-[calc(100vh-80px)]  bg-contain backdrop-b"
          >
            slide 1
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
