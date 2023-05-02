import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import banner from "../assets/images/chefBanner.jpg";
import experience from "../assets/images/icon/career.png";
import recipe from "../assets/images/icon/chef.png";
import like from "../assets/images/icon/heart.png";
const RecipeWithChef = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chefDetails, setChefDetails] = useState({});
  const [seeMore, setSeeMore] = useState(true);
  const {
    id,
    chef_name,
    rating,
    years_of_experience,
    num_of_recipes,
    like_number,
    bio,
    chef_picture,
  } = chefDetails;
  const { name } = useParams();
  const recifeDetails = useLoaderData();
  useEffect(() => {
    fetch(`http://localhost:6969/chefInfo`)
      .then((response) => response.json())
      .then((data) =>
        setChefDetails(data.find((chef) => chef.chef_name === name))
      );
  }, []);
  //   http://localhost:6969/chef/Gordon%20Ramsay
  console.log(recifeDetails);
  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className=" bg-cover object-cover bg-slate-600 bg-blend-overlay"
        >
          <div className=" px-[10%] pt-10 grid grid-cols-12 text-white">
            <div className="col-span-7">
              <div className="w-4/5 min-h-screen bg-primary relative">
                <div className="absolute p-5  -right-6 left-6  top-6 bg-slate-900 border border-primary">
                  <img src={chef_picture} alt="" className="" />
                  <div>
                    <h3 className=" text-2xl mb-5 mt-2">{chef_name}</h3>

                    <p className="flex  font-semibold mb-3">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                      />
                      5/{rating}
                    </p>

                    <p className="text-justify mb-3 ">
                      {seeMore ? bio?.slice(0, 200) : bio}
                      <span className="text-primary font-semibold">
                        {seeMore && (
                          <Link onClick={() => setSeeMore(!seeMore)}>
                            ...See More
                          </Link>
                        )}
                      </span>
                    </p>
                    <div className="flex items-center text-black gap-1 font-semibold ">
                      <p className="flex items-center bg-rose-200 px-2 py-1 gap-1 rounded-2xl">
                        <img src={experience} alt="" className="w-6 h-6" />
                        {years_of_experience}Y. Exp.
                      </p>
                      <p className="flex items-center bg-rose-200 px-2 py-1 gap-1 rounded-2xl">
                        <img src={recipe} alt="" />
                        {num_of_recipes}+ Recipe
                      </p>
                      <p className="flex items-center bg-rose-200 px-2 py-1 gap-1 rounded-2xl">
                        <img src={like} alt="" /> {like_number} Likes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5 flex justify-center ">
              Welcome to {chef_name}&apos;s Recipes
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeWithChef;
