import React from "react";
import CategoryTag from "../CategoryTag";

const TrendingRecipe = ({ recipe }) => {
  const { recipe_name, food_image, total_ratings, ingredients, directions } =
    recipe;
  return (
    <div border>
      <img src={food_image} alt="" className="rounded-lg" />
      <div>
        <span>
          <CategoryTag bgColor="bg-rose-300">Chicken</CategoryTag>
        </span>
        <h2 className="text-xl font-semibold">{recipe_name}</h2>
      </div>
    </div>
  );
};

export default TrendingRecipe;
