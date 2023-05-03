import React from "react";
import { FaClock } from "react-icons/fa";
import CategoryTag from "../CategoryTag";

const TrendingRecipe = ({ recipe }) => {
  const { recipe_name, food_image, total_ratings, ingredients, directions } =
    recipe;
  return (
    <div className="border rounded-t-lg p-3 bg-gray-50">
      <img src={food_image} alt="" className="rounded-lg mb-5" />
      <div className="">
        <CategoryTag bgColor="bg-violet-500">Pasta</CategoryTag>
        <h4 className="font-semibold text-xl mt-6 hover:underline">
          {recipe_name}
        </h4>
        <div className="flex items-center text-lg text-gray-600  gap-8">
          <p>June 7, 2021 </p>
          <p className="flex gap-1 items-center ">
            <FaClock className="text-primary" /> 16 min Cook
          </p>
        </div>
      </div>
    </div>
    // <div>
    //   <img src={food_image} alt="" className="rounded-lg" />
    //   <div>
    //     <span>
    //       <CategoryTag bgColor="bg-rose-300">Chicken</CategoryTag>
    //     </span>
    //     <h2 className="text-xl font-semibold">{recipe_name}</h2>
    //   </div>
    // </div>
  );
};

export default TrendingRecipe;
