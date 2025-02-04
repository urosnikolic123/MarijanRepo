import React from "react";

const Point = ({ title, text }) => {
  return (
    <div>
      <h3 className="font-Roboto_Condensed text-3xl font-semibold text-blue">
        {title}
      </h3>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Point;
