import React from "react";

const PagesTitle = ({ title, description, date }) => {
  return (
    <div className="mt-24">
      <div className="container relative flex py-20 flex-col items-center justify-center gap-2 text-center">
        <div className="min-556:block absolute left-12 top-8 -z-10 hidden h-20 w-20 rounded-full border-4 border-yellow bg-transparent"></div>
        <div className="absolute bottom-0 left-64 -z-10 h-10 w-10 rounded-full border-4 border-yellow bg-transparent"></div>
        <div className="min-556:hidden absolute left-4 top-12 -z-10 h-14 w-14 rounded-full border-4 border-yellow bg-transparent"></div>
        <div className="min-556:block absolute bottom-12 right-4 -z-10 hidden h-36 w-36 rounded-full border-4 border-yellow bg-transparent"></div>
        <h1 className="font-Roboto_Condensed text-6xl font-medium">{title}</h1>
        <p className="max-w-3xl text-center text-gray-600">{description}</p>
        <h3 className="font-Roboto_Condensed text-3xl font-medium">{date}</h3>
      </div>
    </div>
  );
};

export default PagesTitle;
