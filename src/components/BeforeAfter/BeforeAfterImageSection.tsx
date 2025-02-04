import React from "react";
import Image from "next/image";

const BeforeAfterImageSection = ({ image, alt, title, description }) => {
  return (
    <div>
      <div className="relative h-96 w-full overflow-hidden rounded-3xl border-b-8 border-yellow">
        <Image
          src={`${image}`}
          alt={`${alt}`}
          fill
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <p className="text-md max-w-xl text-gray-600">{description}</p>
    </div>
  );
};

export default BeforeAfterImageSection;
