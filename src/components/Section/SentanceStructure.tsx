import React from "react";

const SentanceStructure = ({ text }) => {
  return (
    <li className="flex gap-2">
      <div className="aspect-[1/1] h-5 w-5 rounded-full border-[3px] border-blue bg-white"></div>
      <p>{text}</p>
    </li>
  );
};

export default SentanceStructure;
