import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import banner from "../assets/images/chefBanner.jpg";
import experience from "../assets/images/icon/career.png";
import recipe from "../assets/images/icon/chef.png";
import like from "../assets/images/icon/heart.png";
import RecipeDetails from "../components/Shared/RecipeDetails/RecipeDetails";
import TrendingRecipe from "../components/Shared/RecipeDetails/TrendingRecipe";
import SectionHead from "../components/Shared/SectionHead/SectionHead";
const RecipeWithChef = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chefDetails, setChefDetails] = useState({});
  const [seeMore, setSeeMore] = useState(true);
  const {
    id,
    chef_name,
    rating,
    years_of_experience,
    num_of_recipes,
    like_number,
    bio,
    chef_picture,
  } = chefDetails;
  const { name } = useParams();
  const recifeDetails = useLoaderData();
  console.log(recifeDetails);
  useEffect(() => {
    fetch(`http://localhost:6969/chefInfo`)
      .then((response) => response.json())
      .then((data) =>
        setChefDetails(data.find((chef) => chef.chef_name === name))
      );
  }, []);

  console.log(recifeDetails);
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className=" bg-cover object-cover bg-slate-600 bg-blend-overlay"
      >
        <div className=" pl-[10%] pt-10 grid grid-cols-12 text-white">
          <div className="col-span-7 mr-16">
            <div className="w-4/5 min-h-screen bg-primary relative">
              <div className="absolute p-5  -right-6 left-6  top-6 bg-slate-900 border border-primary">
                <img src={chef_picture} alt="" className="" />
                <div>
                  <h3 className=" text-2xl mb-5 mt-2">{chef_name}</h3>

                  <p className="flex  font-semibold mb-3">
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    5/{rating}
                  </p>

                  <p className="text-justify mb-3 ">{bio}</p>
                  <div className="flex items-center text-black gap-1 font-semibold ">
                    <p className="flex items-center bg-rose-200 px-2 py-1 gap-1 rounded-2xl">
                      <img src={experience} alt="" className="w-6 h-6" />
                      {years_of_experience}Y. Exp.
                    </p>
                    <p className="flex items-center bg-rose-200 px-2 py-1 gap-1 rounded-2xl">
                      <img src={recipe} alt="" />
                      {num_of_recipes}+ Recipe
                    </p>
                    <p className="flex items-center bg-rose-200 px-2 py-1 gap-1 rounded-2xl">
                      <img src={like} alt="" /> {like_number} Likes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5  text-6xl mt-36 font-semibold ">
            <p>
              Welcome to{" "}
              <span className="text-primary">{chef_name}&apos;s</span> Recipes
            </p>
          </div>
        </div>
      </div>
      <div className="container relative">
        <SectionHead>
          <span className="text-primary">{chef_name}&apos;s</span> Recipes
        </SectionHead>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8">
            {recifeDetails.map((recipe) => (
              <RecipeDetails key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="col-span-4 relative">
            <div className="sticky top-28">
              <SectionHead>
                <span className="text-primary">Trending</span> Recipes
              </SectionHead>
              <div className="space-y-5">
                {recifeDetails.reverse().map((recipe) => (
                  <TrendingRecipe key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeWithChef;
