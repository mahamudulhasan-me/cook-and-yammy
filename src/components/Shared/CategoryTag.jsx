import React from "react";
import { FaTags } from "react-icons/fa";
const CategoryTag = ({ bgColor, children }) => {
  return (
    <span
      className={`${bgColor} uppercase flex items-center gap-1  px-3 py-1 rounded-2xl`}
    >
      <FaTags className="text-2xl" />
      {children}
    </span>
  );
};

export default CategoryTag;
