import React from "react";
import Phone from "@/../public/assets/svg/Phone.svg";
import Letter from "@/../public/assets/svg/Letter.svg";

const ServicesSideSection = () => {
  return (
    <div className="sticky top-32 hidden h-fit w-1/3 flex-col gap-4 font-Roboto_Condensed lg:flex">
      <h4 className="text-4xl font-semibold">Još neko pitanje?</h4>
      <ul className="flex flex-col gap-4 text-xl">
        <li className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow">
            <Phone width={26} height={26} />
          </div>
          +381/65-390-1520
        </li>
        <li className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow">
            <Letter width={26} height={26} />
          </div>
          uros.n.nikolic@gmail.com
        </li>
        <a
          href="#"
          className="main_page_service_underline common_underline font-Space_Grotesk relative w-fit font-medium text-black"
        >
          Kontaktiraj nas!
        </a>
      </ul>
    </div>
  );
};

export default ServicesSideSection;
