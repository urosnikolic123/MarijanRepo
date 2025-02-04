import React from "react";
import Arrow from "@/../public/assets/svg/Arrow.svg";

const HamburgerMenuItem = ({ title, href }) => {
  return (
    <li>
      <a href={`/${href}`} className="flex justify-between px-1">
        <h3 className="font-Roboto_Condensed text-lg">{title}</h3>
        <Arrow className="h-6 w-6" />
      </a>
    </li>
  );
};

export default HamburgerMenuItem;
