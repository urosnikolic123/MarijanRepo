import React from "react";

const GenericTitle = ({ preTitle, title, description }) => {
  return (
    <div className="mb-12 flex flex-col items-center text-center font-Roboto_Condensed">
      <h5 className={`text-2xl font-semibold text-blue`}>{preTitle}</h5>
      <h2 className="text-5xl font-semibold">{title}</h2>
      <p className="max-w-screen-lg text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default GenericTitle;
