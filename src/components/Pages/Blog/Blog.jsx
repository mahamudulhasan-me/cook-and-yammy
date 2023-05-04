import React from "react";
import { FaClock, FaDownload, FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const Blog = () => {
  const blogs = useLoaderData();
  const ref = React.createRef();
  return (
    <div className="px-[10%] py-20">
      <Pdf targetRef={ref} filename="Latest yummy blog.pdf">
        {({ toPdf }) => (
          <div
            onClick={toPdf}
            className="w-52 bg-gray-100 py-2 mx-auto flex justify-center font-semibold rounded-md"
          >
            <button className="flex gap-2 items-center justify-center">
              Download Blog as pdf <FaDownload className="text-primary" />
            </button>
          </div>
        )}
      </Pdf>

      <SectionHead>Latest Blog</SectionHead>
      <div ref={ref} className="md:grid md:grid-cols-12 gap-12 items-start">
        <div className="col-span-8 md:grid grid-cols-2  gap-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="border p-2 mb-5 md:mb-0 rounded-lg">
              <LazyLoad>
                <img src={blog.blog_image} alt="" className="rounded-lg" />
              </LazyLoad>
              <div className="flex flex-col">
                <div className="flex justify-between  items-center my-5 border-b-2 pb-2">
                  <div className="flex  items-start gap-2 ">
                    <LazyLoad>
                      <img
                        className="w-14 h-14 rounded-full ring-2 ring-primary"
                        src={blog.author_image}
                        alt=""
                      />
                    </LazyLoad>

                    <div className="">
                      <h3 className="font-semibold text-lg ">{blog.author}</h3>
                      <p>Publish: {blog.date}</p>
                    </div>
                  </div>
                  <h3 className="flex gap-2 items-center">
                    <FaClock className="text-primary" /> {blog.reading_time}
                  </h3>
                </div>
                <div className="flex flex-col justify-between">
                  <h2 className="font-semibold text-xl ">{blog.title}</h2>
                  <p className="mt-4 ml-5 text-justify">{blog.description}</p>
                  <div className="flex justify-end items-center m-4 gap-1 text-xl">
                    <FaHeart className="text-primary" />
                    {blog.like}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-4">
          <SectionHead>Related Post</SectionHead>
          {blogs.reverse().map((blog) => (
            <div key={blog.id} className="border p-2 rounded-lg">
              <LazyLoad>
                <img src={blog.blog_image} alt="" className="rounded-lg" />
              </LazyLoad>
              <div className="flex flex-col">
                <div className="flex justify-between  items-center my-5 border-b-2 pb-2">
                  <div className="flex  items-start gap-2 ">
                    <LazyLoad>
                      <img
                        className="w-14 h-14 rounded-full ring-2 ring-primary"
                        src={blog.author_image}
                        alt=""
                      />
                    </LazyLoad>
                    <div className="">
                      <h3 className="font-semibold text-lg ">{blog.author}</h3>
                      <p>{blog.date}</p>
                    </div>
                  </div>
                  <h3 className="flex gap-2 items-center">
                    <FaClock className="text-primary" /> {blog.reading_time}
                  </h3>
                </div>
                <div className="flex flex-col justify-between">
                  <h2 className="font-semibold text-lg ">{blog.title}</h2>
                  <div className="flex justify-between items-center">
                    <button className="bg-primary px-3 py-2 font-semibold text-white rounded-lg">
                      Read Post
                    </button>
                    <p className="flex justify-end items-center m-4 gap-1 text-xl">
                      <FaHeart className="text-primary" />
                      {blog.like}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
