import React from "react";
import Image from "next/image";

const MainPageService = ({ image, preTitle, title, description, id }) => {
  return (
    <a
      href={`/usluge/${id}`}
      className="relative flex w-full justify-center duration-200 hover:scale-[102%]"
    >
      <div className="relative h-72 w-full">
        <Image
          className="rounded-lg object-cover"
          src={image}
          alt="phoneHero"
          fill
        />
      </div>
      <div className="absolute top-44 w-5/6 rounded-xl border-b-[6px] border-yellow bg-white p-4 shadow-lg min-360:top-48 min-400:top-52">
        <h5 className="font-Roboto_Condensed font-semibold text-blue">
          {preTitle}
        </h5>
        <h4 className="mb-4 font-Space_Grotesk text-xl font-bold md:text-2xl">
          {title}
        </h4>
        <p className="mb-5 leading-6 tracking-wide text-gray-700">
          {description}
        </p>
        <h5 className="main_page_service_underline common_underline relative w-fit font-Space_Grotesk font-medium">
          Istraži
        </h5>
      </div>
    </a>
  );
};

export default MainPageService;
