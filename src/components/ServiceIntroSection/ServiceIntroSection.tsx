import React from "react";
import Image from "next/image";
import BlogPost from "./BlogPost";

const ServiceIntroSection = ({ image, category }) => {
  return (
    <section>
      <h6 className="mb-4 text-xl">
        Kategorija:{" "}
        <span className="cursor-pointer text-blue hover:underline">
          {category}
        </span>
      </h6>

      <div className="flex gap-20">
        <div className="relative min-h-[340px] w-full md:min-h-[500px]">
          <Image
            className="rounded-2xl object-cover"
            src={image}
            alt="smth"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceIntroSection;
