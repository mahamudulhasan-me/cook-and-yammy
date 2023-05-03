import React from "react";
// Import Swiper React components
import MovingText from "react-moving-text";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import banner1 from "../../../../assets/images/banner1.jpg";
import banner2 from "../../../../assets/images/banner2.jpg";
// import banner4 from "../../../../assets/images/banner4.";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner5 from "../../../../assets/images/banner5.jpg";
import CategoryTag from "../../../Shared/CategoryTag";
export default function Banner() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="w-full min-h-screen  bg-cover bg-slate-800 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner5})` }}
          >
            <div className="flex justify-center items-center top-48  absolute left-40 text-left ">
              <div>
                <MovingText
                  type="slideInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <h1 className="text-white font-semibold text-7xl justify-start">
                    Broccoli Slaw <br /> slow cooking <br /> Recipe
                  </h1>
                </MovingText>
                <MovingText
                  type="slideInFromLeft"
                  duration="1000ms"
                  delay="0.5s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <p className="text-white uppercase flex items-center text-sm gap-6 mt-5">
                    <span className="bg-primary bg-opacity-40 py-1  rounded-xl px-2">
                      Category
                    </span>{" "}
                    <CategoryTag bgColor="bg-primary bg-opacity-30">
                      Pasta
                    </CategoryTag>
                    <span className="bg-primary bg-opacity-20 py-1  rounded-xl px-2">
                      Date- May 2, 2023
                    </span>
                  </p>
                  <Link
                    to={"./chefList"}
                    className="bg-primary w-36 h-10 mt-7 gap-2 flex justify-center items-center  text-white font-semibold rounded-sm"
                  >
                    View Recipe
                    <FaArrowRight />
                  </Link>
                </MovingText>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover absolute top-0  bg-slate-600 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="flex justify-center items-center top-60 absolute left-40 text-left ">
              <div>
                <MovingText
                  type="slideInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <h1 className="text-white font-semibold text-7xl justify-start">
                    Broccoli Slaw <br /> slow cooking <br /> Recipe
                  </h1>
                </MovingText>
                <MovingText
                  type="slideInFromLeft"
                  duration="1000ms"
                  delay="0.5s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <p className="text-white uppercase flex items-center gap-6 mt-10">
                    <span>Category</span>{" "}
                    <CategoryTag bgColor="bg-purple-500">Pasta</CategoryTag>
                    <span>Date- May 2, 2023</span>
                  </p>
                </MovingText>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-slate-600 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="flex justify-center items-center top-60 absolute left-40 text-left ">
              <div>
                <MovingText
                  type="slideInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <h1 className="text-white font-semibold text-7xl justify-start">
                    Broccoli Slaw <br /> slow cooking <br /> Recipe
                  </h1>
                </MovingText>
                <MovingText
                  type="slideInFromLeft"
                  duration="1000ms"
                  delay="0.5s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <p className="text-white uppercase flex items-center gap-6 mt-10">
                    <span>Category</span>{" "}
                    <CategoryTag bgColor="bg-purple-500">Pasta</CategoryTag>
                    <span>Date- May 2, 2023</span>
                  </p>
                </MovingText>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-slate-800 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="flex justify-center items-center top-60 absolute left-40 text-left ">
              <div>
                <MovingText
                  type="slideInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <h1 className="text-white font-semibold text-7xl justify-start">
                    Broccoli Slaw <br /> slow cooking <br /> Recipe
                  </h1>
                </MovingText>
                <MovingText
                  type="slideInFromLeft"
                  duration="1000ms"
                  delay="0.5s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <p className="text-white uppercase flex items-center gap-6 mt-10">
                    <span>Category</span>{" "}
                    <CategoryTag bgColor="bg-purple-500">Pasta</CategoryTag>
                    <span>Date- May 2, 2023</span>
                  </p>
                </MovingText>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
