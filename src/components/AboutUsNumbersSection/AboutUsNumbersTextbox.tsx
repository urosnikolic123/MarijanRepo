import React from "react";

const AboutUsNumbersTextbox = ({ title, text }) => {
  return (
    <li className="flex flex-col items-center gap-2">
      <h3 className="font-Roboto_Condensed text-6xl font-medium text-blue">
        {title}
      </h3>
      <p className="max-w-xs">{text}</p>
    </li>
  );
};

export default AboutUsNumbersTextbox;
