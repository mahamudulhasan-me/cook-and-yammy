import React, { useState } from "react";
import { FaClock, FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const Blog = () => {
  const [seeMore, setSeeMore] = useState(false);
  const blogs = useLoaderData();

  return (
    <div className="px-[10%] py-20">
      <SectionHead>Latest Blog</SectionHead>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8 grid grid-cols-2 gap-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="border p-2 rounded-lg">
              <img src={blog.blog_image} alt="" className="rounded-lg" />
              <div className="flex flex-col justify-items-center">
                <div className="flex justify-between  items-center my-5 border-b-2 pb-2">
                  <div className="flex  items-start gap-2 ">
                    <img
                      className="w-14 h-14 rounded-full ring-2 ring-primary"
                      src={blog.author_image}
                      alt=""
                    />

                    <div className="">
                      <h3 className="font-semibold text-lg ">{blog.author}</h3>
                      <p>Publish: {blog.date}</p>
                    </div>
                  </div>
                  <h3 className="flex gap-2 items-center">
                    <FaClock className="text-primary" /> {blog.reading_time}
                  </h3>
                </div>
                <h2 className="font-semibold text-xl ">{blog.title}</h2>
                <p className="mt-4 ml-5 text-justify">
                  {!seeMore && blog.description?.length > 200
                    ? blog.description.slice(0, 200)
                    : blog.description}
                  ...
                  <span
                    onClick={() => setSeeMore(!seeMore)}
                    className="font-semibold text-primary cursor-pointer hover:underline"
                  >
                    Read More
                  </span>
                </p>
                <div className="flex justify-end items-center m-4 gap-1 text-xl">
                  <FaHeart className="text-primary" />
                  {blog.like}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-4">
          <SectionHead>Related Post</SectionHead>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            quisquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
