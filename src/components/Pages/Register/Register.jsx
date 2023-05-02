import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const Register = ({ setSignInPage, signInPage }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <SectionHead>Sign Up For Free</SectionHead>
      <form className="space-y-4 w-4/5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="signInUp-input"
        />
        <input
          type="url"
          name="photoUrl"
          placeholder="Photo URl"
          className="signInUp-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="signInUp-input"
        />
        <br />
        <div className="relative">
          <input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            className="signInUp-input"
          />
          <div
            className="absolute top-5 text-xl right-0 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <p></p>
        <button className="bg-primary text-white font-semibold w-full rounded-md py-3">
          Sign up with email
        </button>
        <p className="text-center">
          Have an account?{" "}
          <Link
            className="text-blue-600 hover:underline"
            onClick={() => setSignInPage(!signInPage)}
          >
            Sign In
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
