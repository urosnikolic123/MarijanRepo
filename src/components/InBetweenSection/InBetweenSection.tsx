import React from "react";
import { PHONE_NUMBER } from "@/app/constants.js";

const InBetweenSection = ({ preTitle, title, text, button }) => {
  return (
    <section className="container">
      <div className="flex flex-col items-center rounded-xl bg-dark p-12 text-center text-white">
        <h5 className={`text-xl font-semibold text-yellow sm:text-2xl`}>
          {preTitle}
        </h5>
        <h2 className="mb-4 text-3xl font-semibold sm:text-5xl">{title} </h2>
        <p className="max-w-screen-lg text-lg text-gray-300">{text}</p>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="mt-8 rounded-lg bg-yellow hover:bg-yellowHover duration-300 px-8 py-3 font-Roboto_Condensed text-xl font-medium text-white"
        >
          {button}
        </a>
      </div>
    </section>
  );
};

export default InBetweenSection;
