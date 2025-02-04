import React from "react";
import AboutUsNumbersTextbox from "./AboutUsNumbersTextbox";

const aboutUsNumbersData = [
  {
    title: "+1,500",
    text: "Zadovoljnih klijenata širom grada.",
  },
  {
    title: "+20",
    text: "Godina iskustva u pružanju vrhunskih vodoinstalaterskih usluga.",
  },
  {
    title: "+500",
    text: "Realizovanih projekata, od popravki do renoviranja kupatila.",
  },
  {
    title: "+100",
    text: "Hitnih intervencija svakog meseca, uvek dostupni za vas.",
  },
];

const AboutUsNumbersSection = () => {
  return (
    <ul className="container grid grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
      {aboutUsNumbersData.map(({ title, text }, index) => (
        <AboutUsNumbersTextbox title={title} text={text} key={index} />
      ))}
    </ul>
  );
};

export default AboutUsNumbersSection;
