import React from "react";
import AllChef from "../AllChef/AllChef";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="relative -top-24 z-0">
      <Banner />
      <AllChef />
    </div>
  );
};

export default Home;
