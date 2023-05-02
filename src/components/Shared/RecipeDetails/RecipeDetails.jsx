import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";

const RecipeDetails = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const {
    recipe_name,
    food_image,
    total_ratings,
    rating,
    ingredients,
    directions,
  } = recipe;
  return (
    <div>
      <img className="h-96 w-full" src={food_image} alt="" />
      <h2 className="text-2xl font-semibold">{recipe_name}</h2>
      <div className="flex items-center  gap-10 text-xl">
        <p className="flex  font-semibold mb-3">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          5/{rating}({total_ratings})
        </p>
        <p className="flex gap-2 items-center font-semibold ">
          <FaRegBookmark
            onClick={() => setFavorite(!favorite)}
            className={`text-2xl ${favorite ? "text-primary" : ""}`}
          />{" "}
          Add to Favorite
        </p>
      </div>
    </div>
  );
};

export default RecipeDetails;
