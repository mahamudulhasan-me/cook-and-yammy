import { Rating } from "@smastrom/react-rating";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import experience from "../../../assets/images/icon/career.png";
import recipe from "../../../assets/images/icon/chef.png";
import like from "../../../assets/images/icon/heart.png";
import SectionHead from "../../Shared/SectionHead/SectionHead";
const AllChef = () => {
  const [chefInfo, setChefInfo] = useState([]);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    fetch(`https://cook-and-yammy-server-mahamudulhasan-me.vercel.app/chefInfo`)
      .then((response) => response.json())
      .then((data) => setChefInfo(data));
  }, []);
  return (
    <div className="px-[5%] pt-20 pb-16">
      <SectionHead>Meet Our Legendary Chefs</SectionHead>

      <div className="md:grid grid-cols-2 gap-10 ">
        {chefInfo.map((chef) => (
          <div
            data-aos="fade-up"
            key={chef.id}
            className=" md:flex justify-between gap-5 p-3 mb-6  shadow-md hover:shadow-xl "
          >
            <LazyLoad threshold={0.95} className="md:w-1/2 mb-2 md:mb-0">
              <img src={chef.chef_picture} className=" rounded-md" alt="" />
            </LazyLoad>
            <div className="flex flex-col justify-between  md:w-1/2">
              <h3 className=" text-2xl mb-1">{chef.chef_name}</h3>

              <p className="flex font-semibold mb-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={chef.rating}
                  readOnly
                />
                5/{chef.rating}
              </p>

              <p className=" mb-3">
                {chef?.bio?.length > 200 ? chef.bio.slice(0, 100) : chef.bio}
                <Link
                  to={`/chef/${chef.chef_name}`}
                  className="text-primary font-semibold"
                >
                  ...See More
                </Link>
              </p>
              <div className="space-y-2 w-36 font-semibold ">
                <p className="flex items-center bg-[#f8f8f8] px-2 py-1 gap-1 rounded-2xl">
                  <img src={experience} alt="" className="w-6 h-6" />
                  {chef.years_of_experience}Y. Exp.
                </p>
                <p className="flex items-center bg-[#f8f8f8] px-2 py-1 gap-1 rounded-2xl">
                  <img src={recipe} alt="" />
                  {chef.num_of_recipes}+ Recipe
                </p>
                <p className="flex items-center bg-[#f8f8f8] px-2 py-1 gap-1 rounded-2xl">
                  <img src={like} alt="" /> {chef.like_number} Likes
                </p>
              </div>
              <div>
                <Link
                  to={`/chef/${chef.chef_name}`}
                  className="bg-primary gap-1 h-10 mt-7 flex justify-center items-center  text-white font-semibold rounded-sm"
                >
                  View Recipe
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
{
  /* <div
key={chef.id}
className="flex p-3 text-center mb-12 shadow-md hover:shadow-xl "
>
<LazyLoad threshold={0.95}>
  <img
    src={chef.chef_picture}
    className=" rounded-md object-cover md:w-4/5 mx-auto"
    alt=""
  />
</LazyLoad>
<div>
  <h3 className=" text-2xl mb-5 mt-2">{chef.chef_name}</h3>

  <p className="flex justify-center font-semibold mb-3">
    <Rating
      style={{ maxWidth: 100 }}
      value={chef.rating}
      readOnly
    />
    5/{chef.rating}
  </p>

  <p className="w-4/5 mx-auto mb-3">
    {chef?.bio?.length > 200 ? chef.bio.slice(0, 100) : chef.bio}
    <span className="text-primary font-semibold">
      ...See More
    </span>
  </p>
  <div className="flex items-center  gap-1 font-semibold ">
    <p className="flex items-center bg-[#f8f8f8] px-2 py-1 gap-1 rounded-2xl">
      <img src={experience} alt="" className="w-6 h-6" />
      {chef.years_of_experience}Y. Exp.
    </p>
    <p className="flex items-center bg-[#f8f8f8] px-2 py-1 gap-1 rounded-2xl">
      <img src={recipe} alt="" />
      {chef.num_of_recipes}+ Recipe
    </p>
    <p className="flex items-center bg-[#f8f8f8] px-2 py-1 gap-1 rounded-2xl">
      <img src={like} alt="" /> {chef.like_number} Likes
    </p>
  </div>
</div>
<div>
  <Link
    to={`/chef/${chef.chef_name}`}
    className="bg-primary w-32 mx-auto h-10 mt-7 flex justify-center items-center  text-white font-semibold rounded-sm"
  >
    View Recipe
    <FaArrowRight />
  </Link>
</div>
</div> */
}
