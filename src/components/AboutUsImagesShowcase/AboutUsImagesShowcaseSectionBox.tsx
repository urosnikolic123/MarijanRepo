import React from "react";
import Image from "next/image";
import Button from "../Button/Button";

const AboutUsImagesShowcaseSectionBox = ({
  reverse,
  title,
  text,
  image,
  alt,
}) => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-4">
      <div
        className={`relative h-80 w-full max-w-[524px] justify-self-center lg:h-auto lg:max-w-none ${reverse ? "order-1" : "order-1 lg:order-2"}`}
      >
        <Image src={image} alt={alt} fill className="rounded-xl object-cover" />
      </div>
      <div
        className={`flex flex-col items-center gap-4 text-center lg:items-start lg:text-start ${reverse ? "order-2" : "order-1"}`}
      >
        <h3 className="font-Roboto_Condensed text-5xl font-medium">{title}</h3>
        <p className="font-Roboto_Condensed text-lg">{text}</p>
        <Button color={"yellow"} text={"Pozovite Nas!"} />
      </div>
    </div>
  );
};

export default AboutUsImagesShowcaseSectionBox;
