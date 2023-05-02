import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg from "../../../assets/images/loginBg.jpg";
import logo from "../../../assets/images/yammyLogo.png";
import SectionHead from "../../Shared/SectionHead/SectionHead";
const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-[calc(100vh-6rem)] bg-cover bg-slate-900 bg-blend-overlay flex justify-center items-center"
    >
      <div className="grid grid-cols-12 w-3/5 mx-auto rounded-xl ">
        <div className="col-span-5 bg-slate-950 bg-opacity-60 p-10 text-white">
          <img src={logo} alt="" className="mt-5" />
          <p className="font-semibold mt-4 mb-10">
            Login using social media to get quick access
          </p>
          <div className="space-y-5">
            <Link className="flex gap-2 px-5 py-2 bg-green-500 rounded-lg font-semibold items-center justify-center">
              <FaGoogle /> SignIn With Google
            </Link>
            <Link className="flex gap-2 px-5 py-2 bg-[#171515] rounded-lg font-semibold items-center justify-center">
              <FaGithub /> SignIn With GitHub
            </Link>
            <Link className="flex gap-2 px-5 py-2 bg-[#0165E1] rounded-lg font-semibold items-center justify-center">
              <FaFacebook /> SignIn With Facebook
            </Link>
          </div>
        </div>
        <div className="col-span-7 bg-slate-200 border p-5">
          <SectionHead>Login to your Account</SectionHead>
        </div>
      </div>
    </div>
  );
};

export default Login;
