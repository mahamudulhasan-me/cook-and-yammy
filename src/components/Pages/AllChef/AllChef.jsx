import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import experience from "../../../assets/images/icon/career.png";
import recipe from "../../../assets/images/icon/chef.png";
import like from "../../../assets/images/icon/heart.png";
import SectionHead from "../../Shared/SectionHead/SectionHead";
const AllChef = () => {
  const [chefInfo, setChefInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:6969/chefInfo`)
      .then((response) => response.json())
      .then((data) => setChefInfo(data));
  }, []);
  return (
    <div className="container2">
      <SectionHead>Meet Our Legend Chefs</SectionHead>
      <div className="grid grid-cols-3 gap-3">
        {chefInfo.map((chef) => (
          <div
            key={chef.id}
            className=" p-3 text-center mb-12 shadow-md hover:shadow-xl"
          >
            <img
              src={chef.chef_picture}
              className=" rounded-md object-cover w-4/5 mx-auto"
              alt=""
            />
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
                {chef.bio.length > 200 ? chef.bio.slice(0, 100) : chef.bio}
                <span className="text-primary font-semibold">...See More</span>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
