import React from "react";

const AboutUsInBetweenTextBox = ({ title, text, Icon }) => {
  return (
    <li className="flex gap-4">
      <div className="mt-1 text-yellow">
        <Icon className="h-12 w-12" />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default AboutUsInBetweenTextBox;
