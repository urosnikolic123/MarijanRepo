import React from "react";
import Image from "next/image";
import ToiletPaper from "@/../public/assets/svg/ToiletPaper.svg";
import { PHONE_NUMBER } from "@/app/constants.js";

const AchievementsInformation = [
  { number: 10, description: "Godina Iskustva" },
  { number: 100, description: "Kompletnih renovacija" },
  { number: 900, description: "Zadovoljnih Klijenata" },
];

const MainPageAboutUsSection = () => {
  return (
    <section className="grid-col-1 container grid lg:grid-cols-2">
      <div className="relative mb-20 h-fit w-5/6 justify-self-center min-556:mr-8 lg:mb-0 lg:mr-0 lg:w-5/6 lg:justify-self-start">
        <Image
          className="rounded-xl"
          src={"/images/main-page-aboutus.jpg"}
          width={700}
          height={700}
          alt="aboutUsMainImage"
        />
        <div className="absolute -bottom-14 -right-3 w-1/2 min-556:-right-10">
          <div className="absolute -left-12 top-[16%] z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-yellow lg:top-24 lg:h-24 lg:w-24">
            <ToiletPaper />
          </div>
          <Image
            className="secondary_hero_image_shadow rounded-xl"
            src={"/images/main-page-aboutus2.jpeg"}
            width={700}
            height={700}
            alt="aboutUsMainImage"
          />
        </div>
      </div>
      <div className="text-center lg:text-start">
        <h5 className="font-Roboto_Condensed text-2xl font-semibold text-blue">
          O Nama
        </h5>
        <h3 className="font-Roboto_Condensed text-5xl font-semibold">
          Sigurnost i kvalitet na prvom mestu
        </h3>
        <p className="mt-4 text-lg leading-8 tracking-wide">
          Kao vodeći stručnjaci u industriji, naša misija je pružiti pouzdane
          vodoinstalaterske usluge koje zadovoljavaju visoke standarde. Bilo da
          je u pitanju popravka curenja, instalacija novih cevi ili redovno
          održavanje, naš tim je tu da vam pruži kvalitetnu i dugotrajnu uslugu.
        </p>
        <ul className="mt-6 mb-12 flex flex-col justify-center gap-8 sm:gap-12 sm:flex-row lg:justify-start">
          {AchievementsInformation.map(({ number, description }, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center font-Roboto_Condensed"
            >
              <h4 className="text-4xl text-blue">{number}+</h4>
              <h5 className="text-lg font-bold">{description}</h5>
            </li>
          ))}
        </ul>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="rounded-lg bg-yellow hover:bg-yellowHover duration-200 px-8 py-3 font-Roboto_Condensed text-xl font-medium text-white"
        >
          Pozovite Nas!
        </a>
      </div>
    </section>
  );
};

export default MainPageAboutUsSection;
