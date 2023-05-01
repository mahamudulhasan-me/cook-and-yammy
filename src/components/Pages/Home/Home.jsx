import React from "react";
import Banner from "./Banner/Banner";
import RecipeSlider from "./RecipeSlider/RecipeSlider";

const Home = () => {
  return (
    <div className="relative -top-24 z-0">
      <Banner />
      <RecipeSlider />
    </div>
  );
};

export default Home;
