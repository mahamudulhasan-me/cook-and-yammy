import React from "react";
import { FaTags } from "react-icons/fa";
const CategoryTag = ({ bgColor, children }) => {
  return (
    <span
      className={`${bgColor} uppercase flex items-center gap-1 font-semibold  w-24 h-8 px-2 rounded-2xl text-sm text-white`}
    >
      <FaTags className="text-2xl" />
      {children}
    </span>
  );
};

export default CategoryTag;
