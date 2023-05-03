import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { FaAngleDoubleRight, FaRegBookmark, FaSortDown } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { toast } from "react-toastify";
import SectionHeadMini from "../SectionHead/SectionHeadMini";
const RecipeDetails = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const [seeMore, setSeeMore] = useState(true);
  const [seeMore2, setSeeMore2] = useState(true);
  const favoriteHandler = () => {
    setFavorite(!favorite);
    toast("Added to Favorite");
  };
  const {
    recipe_name,
    food_image,
    total_ratings,
    rating,
    ingredients,
    directions,
  } = recipe;
  return (
    <div className="border p-5 rounded-lg mb-10">
      <LazyLoad>
        <img className="h-[22rem] w-full rounded-xl" src={food_image} alt="" />
      </LazyLoad>
      <div>
        <h2 className="text-2xl font-semibold mt-5">{recipe_name}</h2>
        <div className="flex items-center  gap-10 mt-3 mb-5">
          <p className="flex  font-semibold mb-3">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            5/{rating}({total_ratings})
          </p>
          <p className="flex gap-1 items-center font-semibold">
            <button disabled={favorite} onClick={favoriteHandler}>
              <FaRegBookmark
                className={`text-2xl ${favorite ? "text-primary" : ""}`}
              />
            </button>{" "}
            Add to Favorite
          </p>
        </div>
        <div>
          <SectionHeadMini>Ingredients</SectionHeadMini>
          {ingredients.length > 3 && seeMore2
            ? ingredients.slice(0, 3).map((ingredient, index) => (
                <p className="flex gap-1 items-center" key={index}>
                  <FaAngleDoubleRight className="text-primary" /> {ingredient}
                </p>
              ))
            : ingredients.map((ingredient, index) => (
                <p className=" flex gap-1 items-center" key={index}>
                  <FaAngleDoubleRight className="text-primary" /> {ingredient}
                </p>
              ))}
          {seeMore2 && (
            <p
              onClick={() => setSeeMore2(!seeMore2)}
              className="ml-5 font-semibold text-primary flex items-center underline cursor-pointer"
            >
              See More <FaSortDown />{" "}
            </p>
          )}
        </div>
        <div className="mt-5">
          <SectionHeadMini>Cooking Method</SectionHeadMini>
          <div className="space-y-2">
            {directions.length > 3 && seeMore
              ? directions.slice(0, 3).map((direction, index) => (
                  <p className=" flex gap-1 items-center" key={index}>
                    <FaAngleDoubleRight className="text-primary" /> {direction}
                  </p>
                ))
              : directions.map((direction, index) => (
                  <p className=" flex gap-1 items-center" key={index}>
                    <FaAngleDoubleRight className="text-primary" /> {direction}
                  </p>
                ))}
            {seeMore && (
              <p
                onClick={() => setSeeMore(!seeMore)}
                className="ml-5 font-semibold text-primary flex items-center underline cursor-pointer"
              >
                See More <FaSortDown />{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
