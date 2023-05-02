import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footerAbout from "../../../assets/images/footerabout.png";
import recipe2 from "../../../assets/images/recipe/1rm9glhv0ua.jpg";
import recipe1 from "../../../assets/images/recipe/6rjct18g_3i.jpg";
import recipe3 from "../../../assets/images/recipe/evoiiaivrzu.jpg";
import CategoryTag from "../CategoryTag";

import SectionHeadMini from "../SectionHead/SectionHeadMini";
const Footer = () => {
  return (
    <div className="px-[5%]   bg-[#F7F6F3] pt-10">
      <div className=" grid  items-center grid-cols-4 gap-8 pb-10 border-b">
        <div
          style={{ backgroundImage: `url(${footerAbout})` }}
          className="bg-cover p-5"
        >
          <h3 className="text-xl font-semibold mb-10">About</h3>
          <p className="font-semibold text-justify">
            I create simple, delicious recipes that require 10 ingredients or
            less, one bowl, or 30 minutes or less to prepare
          </p>
          <button className="bg-primary w-32  mb-10 h-10 mt-7 flex justify-center items-center  text-white font-semibold rounded-sm">
            Contact
          </button>
        </div>
        <div>
          <SectionHeadMini>Latest Recipe&apos;s</SectionHeadMini>
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <img src={recipe1} alt="" className="w-32 h-24 rounded-md" />
              <div>
                <p className="text-lg font-semibold">
                  Spicy Serrano Pineapple Margarita.
                </p>
                <i>May 7, 2023</i>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img src={recipe2} alt="" className="w-32 h-24 rounded-md" />
              <div>
                <p className="text-lg font-semibold">
                  Broccoli Slaw slow cooking Recipe
                </p>
                <i>May 7, 2023</i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionHeadMini>Category</SectionHeadMini>
          <div className="space-y-4">
            <div
              style={{ backgroundImage: `url(${recipe2})` }}
              className="rounded-md object-cover bg-cover cursor-pointer bg-no-repeat bg-slate-800  bg-blend-overlay"
            >
              <div className="flex justify-between items-center font-semibold text-white  px-5 py-5">
                <CategoryTag>Meat</CategoryTag>
                <p>7 Posts</p>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${recipe3})` }}
              className="rounded-md object-cover bg-cover cursor-pointer bg-no-repeat bg-slate-800  bg-blend-overlay"
            >
              <div className="flex justify-between items-center font-semibold text-white  px-5 py-5">
                <CategoryTag>Burger</CategoryTag>
                <p>4 Posts</p>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${recipe1})` }}
              className="rounded-md object-cover bg-cover cursor-pointer bg-no-repeat bg-slate-800  bg-blend-overlay"
            >
              <div className="flex justify-between items-center font-semibold text-white  px-5 py-5">
                <CategoryTag>Basic</CategoryTag>
                <p>4 Posts</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionHeadMini>Subscribe</SectionHeadMini>
          <div>
            <p className="mt-5">
              Enter your email address below to subscribe to my newsletter
            </p>
            <div>
              <input
                type="email"
                name=""
                id=""
                className="border rounded-xl h-12 w-full mt-10 mb-5 outline-primary font-semibold px-4"
              />{" "}
              <br />
              <button className="bg-primary mb-10 text-white font-semibold h-12   rounded-xl w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[5%] py-4 flex justify-between">
        <div className="flex gap-4 items-center">
          <FaFacebook />
          <FaPinterest />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
        <p>Powered by Cook & Yammy - Food Blog & Recipe </p>
      </div>
    </div>
  );
};

export default Footer;
