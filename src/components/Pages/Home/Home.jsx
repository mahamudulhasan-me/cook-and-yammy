import React from "react";
import AllChef from "../AllChef/AllChef";
import Banner from "./Banner/Banner";
import BestChickenRecipe from "./BestChickenRecipe/BestChickenRecipe";
import RecipeSlider from "./RecipeSlider/RecipeSlider";

const Home = () => {
  return (
    <div className="relative -top-24 z-0">
      <Banner />
      <RecipeSlider />
      <AllChef />
      <BestChickenRecipe />
    </div>
  );
};

export default Home;
