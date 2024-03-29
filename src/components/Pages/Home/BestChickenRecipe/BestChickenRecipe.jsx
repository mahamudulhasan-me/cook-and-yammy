import React from "react";
import { FaClock } from "react-icons/fa";
import ckImage1 from "../../../../assets/images/recipe/ckrecipe1.jpg";
import ckImage2 from "../../../../assets/images/recipe/ckrecipe2.jpg";
import ckImage3 from "../../../../assets/images/recipe/ckrecipe3.jpg";
import ckImage4 from "../../../../assets/images/recipe/ckrecipe4.jpg";

import CategoryTag from "../../../Shared/CategoryTag";
import SectionHead from "../../../Shared/SectionHead/SectionHead";
const BestChickenRecipe = () => {
  return (
    <div className="px-[5%] min-h-screen">
      <div data-aos="fade-right">
        <SectionHead>Best Chicken Recipe</SectionHead>
      </div>

      <div className="grid md:grid-cols-12 gap-10 justify-center">
        <div
          data-aos="zoom-right"
          className="col-span-6 hidden md:block relative  "
        >
          <div className="absolute top-0 right-0 w-12 h-12 m-2 bg-green-700 font-semibold  rounded-full flex items-center justify-center text-white">
            7.8
          </div>
          <img src={ckImage1} alt="" className="h-full" />
          <div className=" flex justify-center items-end absolute top-0 left-0 bottom-0 duration-500 ease-out-in right-0 bg-slate-900 bg-opacity-40 hover:bg-opacity-0 transition-all">
            <div className="textClass mb-28 text-center absolute bottom-0 hover:bottom-12 ease-in-out duration-1000">
              <div className=" flex items-center gap-6 mb-6 justify-center">
                <CategoryTag bgColor="bg-orange-500">Easy</CategoryTag>
                <CategoryTag bgColor="bg-rose-500">VEGAN</CategoryTag>
              </div>
              <h2 className="font-semibold text-4xl text-white mb-5">
                Chicken Sauce Piquante <br /> Margarita.
              </h2>
              <div className="flex items-center justify-center text-white text-lg gap-6">
                <p>April 15, 2023 </p>
                <p className="flex gap-1 items-center ">
                  <FaClock className="text-primary" /> 16 min Cook
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-left"
          className="col-span-6 grid md:grid-cols-2 gap-8"
        >
          <div className="border-2 p-2 rounded-md">
            <img src={ckImage2} alt="" className="rounded-lg mb-5" />
            <div>
              <CategoryTag bgColor="bg-violet-500">Better</CategoryTag>
              <h4 className="font-semibold text-xl mt-6 hover:underline">
                Popcorn Chicken Cooking Recipe
              </h4>
              <div className="flex items-center text-lg text-gray-600 justify-between">
                <p>March 16, 2023 </p>
                <p className="flex gap-1 items-center ">
                  <FaClock className="text-primary" /> 16 min Cook
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 p-2 rounded-md">
            <img src={ckImage3} alt="" className="rounded-lg mb-5" />
            <div>
              <CategoryTag bgColor="bg-orange-500">Chicken</CategoryTag>
              <h4 className="font-semibold text-xl mt-6 hover:underline">
                Chicken and Dumplings Cooking Recipe
              </h4>
              <div className="flex items-center text-lg text-gray-600 justify-between">
                <p>June 7, 2021 </p>
                <p className="flex gap-1 items-center ">
                  <FaClock className="text-primary" /> 16 min Cook
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 p-2 rounded-md">
            <img src="https://rb.gy/9m5sl" alt="" className="rounded-lg mb-5" />
            <div>
              <CategoryTag bgColor="bg-red-500">Basic</CategoryTag>
              <h4 className="font-semibold text-xl mt-6 hover:underline">
                Chicken Maryland Cooking Recipe
              </h4>
              <div className="flex items-center text-lg text-gray-600 justify-between">
                <p>April 7, 2023 </p>
                <p className="flex gap-1 items-center ">
                  <FaClock className="text-primary" /> 16 min Cook
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 p-2 rounded-md">
            <img src={ckImage4} alt="" className="rounded-lg mb-5" />
            <div>
              <CategoryTag bgColor="bg-green-500">Easy</CategoryTag>
              <h4 className="font-semibold text-xl mt-6 hover:underline">
                Chicken Creole Cooking Recipe
              </h4>
              <div className="flex items-center text-lg text-gray-600 justify-between">
                <p>Jan 10, 2023 </p>
                <p className="flex gap-1 items-center ">
                  <FaClock className="text-primary" /> 16 min Cook
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestChickenRecipe;
