import React from "react";
import preloader from "../../../assets/images/preloader.gif";
const Loader = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center ease-in-out transition-all">
        <img src={preloader} alt="" className="md:w-2/6 " />
      </div>
    </div>
  );
};

export default Loader;
