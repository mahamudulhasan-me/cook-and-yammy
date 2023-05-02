import React from "react";

const SectionHeadMini = ({ children }) => {
  return (
    <div className="border-b border-gray-300 mb-3 relative w-4/5">
      <h1 className="font-semibold text-xl mb-2">{children}</h1>
      <div className="w-16 h-1 bg-primary absolute -bottom-0.5"></div>
    </div>
  );
};

export default SectionHeadMini;
