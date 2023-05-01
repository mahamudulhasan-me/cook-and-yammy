import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay } from "swiper";
import recipe1 from "../../../../assets/images/recipe/1rm9glhv0ua.jpg";
import recipe2 from "../../../../assets/images/recipe/6rjct18g_3i.jpg";
import recipe3 from "../../../../assets/images/recipe/evoiiaivrzu.jpg";
import recipe4 from "../../../../assets/images/recipe/qdm6-ffkp0s.jpg";
import recipe5 from "../../../../assets/images/recipe/t8htmte4o_g.jpg";
import recipe6 from "../../../../assets/images/recipe/zyx6a0reb18.jpg";
export default function RecipeSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={recipe1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe6} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
