import React from "react";
import Image from "next/image";
import { PHONE_NUMBER } from "@/app/constants.js";

const AboutUsIntroSection = () => {
  return (
    <section className="container grid grid-cols-1 gap-x-20 lg:grid-cols-2">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
        <h2 className="mb-4 font-Roboto_Condensed text-4xl font-semibold sm:text-5xl">
          vodoinstalaterske usluge. Pouzdano tokom cele godine.
        </h2>
        <p className="leading-7">
          Naš tim pruža visokokvalitetne vodoinstalaterske usluge, uključujući
          hitne popravke, montaže i renoviranja. Sa dugogodišnjim iskustvom,
          garantiramo da će vaša vodovodna mreža funkcionisati besprekorno i
          sigurno tokom svih godišnjih doba.
        </p>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className={`mt-4 w-fit rounded-lg bg-yellow hover:bg-yellowHover px-8 py-3 font-Roboto_Condensed text-xl font-medium text-white duration-100`}
        >
          Pozovite Nas!
        </a>
      </div>

      <div className="relative mb-40 mt-12 min-h-[240px] w-2/3 justify-self-end lg:mb-32 lg:mt-0">
        <Image
          className="rounded-xl object-cover"
          src={"/images/aboutus1.jpg"}
          alt={"Vodoinstalaterski radovi"}
          fill
        />
        <div className="secondary_aboutus_image_shadow absolute -left-1/2 top-2/3 min-h-[240px] w-full rounded-xl object-cover">
          <Image
            className="rounded-xl object-cover"
            src={"/images/aboutus2.jpg"}
            alt={"Vodoinstalaterske usluge"}
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntroSection;
