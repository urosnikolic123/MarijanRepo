import React from "react";
import Point from "./Point";

const PageUniquePoints = ({ points }) => {
  return (
    <section className="flex flex-col gap-4">
      {points.map(({ title, text }, index) => (
        <Point key={index} title={title} text={text} />
      ))}
    </section>
  );
};

export default PageUniquePoints;
