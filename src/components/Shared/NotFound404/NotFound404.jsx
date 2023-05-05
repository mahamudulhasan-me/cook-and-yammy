import React from "react";
import { Link, useRouteError } from "react-router-dom";
import page404 from "../../../assets/images/404.jpg";
import logo from "../../../assets/images/yammyLogo.png";

const NotFound404 = () => {
  const { error, status } = useRouteError();
  return (
    <div
      data-aos="flip-up"
      className="md:px-[35%] px-[20%]  bg-[#F5F4F0] h-screen flex flex-col justify-center space-y-4 items-center"
    >
      <img src={logo} alt="" className="w-40" />
      <img data-aos="zoom-in" src={page404} alt="" />
      <h1 className="text-3xl font-medium text-primary">
        Oh No! Error {status}
      </h1>
      {<p>{error?.message}</p>}
      <Link
        to={"./"}
        className="bg-primary w-36 h-10 mt-7 gap-2 flex justify-center items-center  text-white font-semibold rounded-sm"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound404;
