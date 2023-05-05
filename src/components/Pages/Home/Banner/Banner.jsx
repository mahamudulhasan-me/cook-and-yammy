import React from "react";
// Import Swiper React components
import MovingText from "react-moving-text";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import banner1 from "../../../../assets/images/banner1.jpg";
import banner2 from "../../../../assets/images/banner2.jpg";
import banner5 from "../../../../assets/images/banner5.jpg";
import CategoryTag from "../../../Shared/CategoryTag";
export default function Banner() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="w-full md:min-h-screen min-h-[calc(100vh-15rem)]  bg-cover bg-slate-800 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="flex justify-center items-center top-48  left-10 md:left-40 absolute  text-left ">
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
                  <h1 className="text-white  md:text-7xl text-4xl justify-start">
                    <span className="text-primary">Broccoli Slaw</span> <br />{" "}
                    slow cooking <br /> Recipe
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
                  <div className="text-white uppercase space-y-3  md:space-y-0 flex md:items-center md:flex-row flex-col font-semibold text-sm md:gap-6 mt-5">
                    <p className="bg-primary bg-opacity-40 py-1   rounded-xl px-2 w-24">
                      Category
                    </p>
                    <p>
                      <CategoryTag bgColor="bg-primary bg-opacity-30 ">
                        Pasta
                      </CategoryTag>
                    </p>
                    <p className="bg-primary bg-opacity-20 py-2  rounded-xl px-2 w-36">
                      Date- May 2, 2023
                    </p>
                  </div>
                  <Link
                    to={"./chefList"}
                    className="bg-primary w-36 py-2 h-10 mt-7 gap-2 flex justify-center items-center  text-white font-semibold rounded-sm"
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
            className="w-full md:min-h-screen min-h-[calc(100vh-15rem)]  bg-cover bg-slate-800 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner5})` }}
          >
            <div className="flex justify-center items-center top-48  left-10 md:left-40 absolute  text-left ">
              <div>
                <MovingText
                  type="slideInFromLeft"
                  duration="5000ms"
                  delay="7000s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <h1 className="text-white  md:text-7xl text-4xl justify-start">
                    <span className="text-primary">Macaroni and Cheese</span>{" "}
                    <br /> slow cooking <br /> Recipe
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
                  <div className="text-white uppercase space-y-3  md:space-y-0 flex md:items-center md:flex-row flex-col font-semibold text-sm md:gap-6 mt-5">
                    <p className="bg-primary bg-opacity-40 py-1   rounded-xl px-2 w-24">
                      Category
                    </p>
                    <p>
                      <CategoryTag bgColor="bg-primary bg-opacity-30 ">
                        Pasta
                      </CategoryTag>
                    </p>
                    <p className="bg-primary bg-opacity-20 py-1  rounded-xl px-2 w-36">
                      Date- JAN 3, 2023
                    </p>
                  </div>
                  <Link
                    to={"./chefList"}
                    className="bg-primary py-2 w-36 h-10 mt-7 gap-2 flex justify-center items-center  text-white font-semibold rounded-sm"
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
            className="w-full md:min-h-screen min-h-[calc(100vh-15rem)]  bg-cover bg-slate-800 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="flex justify-center items-center top-48  left-10 md:left-40 absolute  text-left ">
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
                  <h1 className="text-white  md:text-7xl text-4xl justify-start">
                    <span className="text-primary">Classic Cheeseburger</span>{" "}
                    <br /> slow cooking <br /> Recipe
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
                  <div className="text-white uppercase space-y-3  md:space-y-0 flex md:items-center md:flex-row flex-col font-semibold text-sm md:gap-6 mt-5">
                    <p className="bg-primary bg-opacity-40 py-1   rounded-xl px-2 w-24">
                      Category
                    </p>
                    <p>
                      <CategoryTag bgColor="bg-primary bg-opacity-30 ">
                        Pasta
                      </CategoryTag>
                    </p>
                    <p className="bg-primary bg-opacity-20 py-1  rounded-xl px-2 w-36">
                      Date- APR 9, 2023
                    </p>
                  </div>
                  <Link
                    to={"./chefList"}
                    className="bg-primary py-2 w-36 h-10 mt-7 gap-2 flex justify-center items-center  text-white font-semibold rounded-sm"
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
            className="w-full md:min-h-screen min-h-[calc(100vh-15rem)]  bg-cover bg-slate-800 bg-blend-overlay"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="flex justify-center items-center top-48  left-10 md:left-40 absolute  text-left ">
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
                  <h1 className="text-white  md:text-7xl text-4xl justify-start">
                    <span className="text-primary">Broccoli Slaw</span> <br />{" "}
                    slow cooking <br /> Recipe
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
                  <div className="text-white uppercase space-y-3  md:space-y-0 flex md:items-center md:flex-row flex-col font-semibold text-sm md:gap-6 mt-5">
                    <p className="bg-primary bg-opacity-40 py-1   rounded-xl px-2 w-24">
                      Category
                    </p>
                    <p>
                      <CategoryTag bgColor="bg-primary bg-opacity-30 ">
                        Pasta
                      </CategoryTag>
                    </p>
                    <p className="bg-primary bg-opacity-20 py-1  rounded-xl px-2 w-36">
                      Date- May 2, 2023
                    </p>
                  </div>
                  <Link
                    to={"./chefList"}
                    className="bg-primary py-2 w-36 h-10 mt-7 gap-2 flex justify-center items-center  text-white font-semibold rounded-sm"
                  >
                    View Recipe
                    <FaArrowRight />
                  </Link>
                </MovingText>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
