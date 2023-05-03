import React from "react";
import { FaClock } from "react-icons/fa";
import ckImage1 from "../../../../assets/images/recipe/ckrecipe1.jpg";
import ckImage2 from "../../../../assets/images/recipe/ckrecipe2.jpg";
import ckImage3 from "../../../../assets/images/recipe/ckrecipe3.jpg";
import CategoryTag from "../../../Shared/CategoryTag";
import SectionHead from "../../../Shared/SectionHead/SectionHead";
const BestChickenRecipe = () => {
  return (
    <div className="px-[5%] min-h-screen">
      <SectionHead>Best Chicken Recipe</SectionHead>
      <div className="grid grid-cols-12 gap-10">
        <div
          className="col-span-6  relative "
          //   style={{ backgroundImage: `url(${ckImage1})` }}
        >
          <img src={ckImage1} alt="" />
          <h2>Spicy Serrano Pineapple Margarita.</h2>
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-8">
          <div>
            <img src={ckImage2} alt="" className="rounded-lg" />
            <div>
              <CategoryTag bgColor="bg-violet-500">Pasta</CategoryTag>
              <h4>Broccoli Slaw slow cooking Recipe</h4>
              <p>June 7, 2021 </p>
              <p>
                <FaClock /> 16 min Cook
              </p>
            </div>
          </div>
          <div>
            <img src={ckImage3} alt="" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BestChickenRecipe;
