import React from "react";
import AllChef from "../AllChef/AllChef";
import Banner from "./Banner/Banner";
import BestChickenRecipe from "./BestChickenRecipe/BestChickenRecipe";

const Home = () => {
  return (
    <div className="relative -top-24 z-0">
      <Banner />
      <AllChef />
      <BestChickenRecipe />
    </div>
  );
};

export default Home;
