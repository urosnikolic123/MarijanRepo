import React from "react";

const WhyUsSection = ({ title, description, Svg }) => {
  return (
    <li className="min-1184:flex-row min-1184:items-start flex flex-col items-center gap-2">
      <div className="flex h-14 justify-start">
        <Svg className="h-14 w-14 text-yellow"></Svg>
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="break-words">{description}</p>
      </div>
    </li>
  );
};

export default WhyUsSection;
