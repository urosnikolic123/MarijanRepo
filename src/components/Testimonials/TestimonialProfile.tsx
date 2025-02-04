import React from "react";
import Star from "@/../public/assets/svg/Star.svg";
import QuotationMark from "@/../public/assets/svg/QuotationMark.svg";
import Image from "next/image";

const TestimonialProfile = ({ image, alt, name, work, description }) => {
  return (
    <div className="testimonials_shadow relative mx-2 my-14 flex flex-col items-center gap-4 rounded-3xl bg-white px-4 py-10 text-center sm:px-10">
      <div className="absolute -top-12">
        <Image
          className="rounded-full"
          src={`${image}`}
          width={102}
          height={102}
          //   layout=""
          alt={`${alt}`}
        />
      </div>

      <div className="mt-12 flex gap-2 text-yellow">
        {Array(5)
          .fill()
          .map((_, index) => (
            <Star key={index} width={32} height={32} />
          ))}
      </div>
      <div>
        <h3 className="text-4xl font-bold">{name}</h3>
        <h5 className="font-Roboto_Condensed text-2xl text-gray-500">{work}</h5>
      </div>
      <div className="text-blue">
        <QuotationMark width={64} height={64} />
      </div>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default TestimonialProfile;
