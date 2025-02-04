import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container flex items-center justify-center gap-14 pb-12 pt-12 lg:justify-between lg:pb-0 min-1184:pt-0">
      <div className="mb-24 flex flex-col items-center gap-4 font-Roboto_Condensed lg:items-start">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold min-400:text-5xl sm:text-5xl min-1184:text-6xl xl:text-7xl">
            VODOINSTALATER
          </h1>
          <h2 className="text-4xl text-blue sm:text-5xl">Beograd</h2>
        </div>
        <Image
          src={"/images/phoneHero.png"}
          alt="phoneHero"
          width={360}
          height={360}
          className="object-cover lg:hidden"
        />
        <div className="absolute bottom-[52px] -z-10 flex flex-col-reverse items-center gap-1 lg:static lg:flex-col lg:items-start">
          <h3 className="text-3xl font-semibold xl:text-4xl">
            Hitne Intervencije 24/7
          </h3>
          <button
            style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 0.5)" }}
            className="sharp_shadow w-fit rounded-md bg-blue px-4 pb-2 pt-3 text-4xl font-medium text-white duration-75 hover:scale-[102%] sm:px-4 min-1184:text-5xl xl:text-6xl"
          >
            +381/65-390-1520
          </button>
        </div>
      </div>
      <div className="hidden items-end justify-end gap-2 lg:flex">
        <div className="relative h-auto w-[56%]">
          <Image
            src={"/images/standingHeroGuy.png"}
            quality={100}
            alt="standingHeroGuy"
            width={700}
            height={700}
          />
        </div>
        <div className="relative h-auto w-[48%]">
          <Image
            src={"/images/sittingHeroGuy.png"}
            quality={100}
            alt="sittingHeroGuy"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
