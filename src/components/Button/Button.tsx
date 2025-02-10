import React from "react";
import { PHONE_NUMBER } from "@/app/constants.js";

const Button = ({ text }) => {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className={`bg-yellow hover:bg-yellowHover duration-200 mt-4 w-fit rounded-lg px-8 py-3 font-Roboto_Condensed text-xl font-medium text-white`}
    >
      {text}
    </a>
  );
};

export default Button;
