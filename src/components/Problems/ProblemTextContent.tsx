import React from "react";

const ProblemTextContent = ({ num, title, description }) => {
  return (
    <div className="my-5 flex flex-col items-center text-center">
      <h5 className="text-6xl font-bold">{num}.</h5>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="max-w-screen-lg text-lg">{description}</p>
    </div>
  );
};

export default ProblemTextContent;
