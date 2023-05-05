import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./recipeSliderStyles.css";

// import required modules
import { Autoplay } from "swiper";
import recipe1 from "../../../../assets/images/recipe/1rm9glhv0ua.jpg";
import recipe2 from "../../../../assets/images/recipe/6rjct18g_3i.jpg";
import recipe3 from "../../../../assets/images/recipe/evoiiaivrzu.jpg";
import recipe5 from "../../../../assets/images/recipe/t8htmte4o_g.jpg";
import recipe6 from "../../../../assets/images/recipe/zyx6a0reb18.jpg";
import CategoryTag from "../../../Shared/CategoryTag";
export default function RecipeSlider() {
  return (
    <div data-aos="fade-left" className=" recipeSlider mt-20">
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
        className="mySwiper h-5"
      >
        <SwiperSlide>
          <img src={recipe1} alt="" />
          <CategoryTag bgColor="bg-orange-500 absolute bottom-10">
            Easy
          </CategoryTag>
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe2} alt="" />
          <CategoryTag bgColor="bg-violet-500 absolute bottom-10">
            Meat
          </CategoryTag>
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe3} alt="" />
          <CategoryTag bgColor="bg-yellow-500 absolute bottom-10">
            Chicken
          </CategoryTag>
        </SwiperSlide>

        <SwiperSlide>
          <img src={recipe5} alt="" className="h-96" />
          <CategoryTag bgColor="bg-blue-600 absolute bottom-10">
            Pasta
          </CategoryTag>
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe6} alt="" className="h-96" />
          <CategoryTag bgColor="bg-rose-600 absolute bottom-10">
            Burger
          </CategoryTag>
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe1} alt="" />
          <CategoryTag bgColor="bg-lime-500 absolute bottom-10">
            Basic
          </CategoryTag>
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe2} alt="" />
          <CategoryTag bgColor="bg-indigo-800 absolute bottom-10">
            Mutton
          </CategoryTag>
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe3} alt="" />
          <CategoryTag bgColor="bg-yellow-500 absolute bottom-10">
            Chicken
          </CategoryTag>
        </SwiperSlide>

        <SwiperSlide>
          <img src={recipe5} alt="" className="h-96" />
          <CategoryTag bgColor="bg-blue-600 absolute bottom-10">
            Pasta
          </CategoryTag>
        </SwiperSlide>
        <SwiperSlide>
          <img src={recipe6} alt="" className="h-96" />
          <CategoryTag bgColor="bg-rose-600 absolute bottom-10">
            Burger
          </CategoryTag>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
