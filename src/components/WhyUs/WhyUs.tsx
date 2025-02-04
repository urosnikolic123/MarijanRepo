import React from "react";
import Image from "next/image";
import Medal from "@/../public/assets/svg/Medal.svg";
import WhyUsSection from "./whyUsSection";
import Time from "@/../public/assets/svg/Time.svg";
import Gear from "@/../public/assets/svg/Gear.svg";
import Pipe from "@/../public/assets/svg/Pipe.svg";

const whyUsSections = [
  {
    title: "Više od 10 godina iskustva",
    description:
      "Naš tim ima više od 10 godina iskustva u svim vrstama vodoinstalacija. Sposobni smo da rešimo bilo koji problem brzo i efikasno. Kvalitet našeg rada garantuje dugoročnu sigurnost.",
    Svg: Medal,
  },
  {
    title: "Brza reakcija 24/7",
    description:
      "Dostupni smo 24/7 za hitne intervencije. Naša ekipa brzo reaguje na svaki poziv, minimizirajući štetu i sprečavajući dodatne probleme. Uvek ste u sigurnim rukama sa nama.",
    Svg: Time,
  },
  {
    title: "Dugoročna rešenja",
    description:
      "Koristimo samo visokokvalitetne materijale za dugotrajan rad sistema. Naša rešenja smanjuju potrebu za čestim popravkama. Uvek težimo ka maksimalnoj efikasnosti i dugotrajnim rezultatima.",
    Svg: Gear,
  },
  {
    title: "Znate tačno šta plaćate.",
    description:
      "Nudimo poštene i transparentne cene bez skrivenih troškova. Pre nego što počnemo sa radom, pružićemo vam tačnu ponudu, kako biste znali šta možete da očekujete.",
    Svg: Pipe,
  },
];

const WhyUs = () => {
  return (
    <section className="whyUsImage pb-24">
      <div className="min-1184:text-start container relative top-12 flex flex-col text-center font-Roboto_Condensed text-white">
        <div className="min-1184:items-start mb-12 flex flex-col items-center">
          <h5 className="text-2xl font-semibold">Zašto izabrati nas?</h5>
          <h2 className="mb-2 max-w-2xl text-5xl font-semibold xl:max-w-2xl">
            Kvalitet, stručnost i pouzdanost
          </h2>
          <p className="max-w-md break-words font-Roboto text-lg lg:max-w-lg xl:max-w-xl">
            Više od 10 godina iskustva u vodoinstalaterskoj industriji. Pružamo
            brzinu, efikasnost i najviši nivo kvaliteta kako bi rešili sve vaše
            vodoinstalaterske probleme.
          </p>
        </div>
        <ul className="min-1184:gap-x-2 min-1184:max-w-2xl min-1184:px-0 grid grid-cols-1 gap-x-12 gap-y-12 px-4 md:grid-cols-2 md:gap-y-6 md:px-24 xl:max-w-2xl">
          {whyUsSections.map(({ title, description, Svg }, index) => (
            <WhyUsSection
              key={index}
              title={title}
              description={description}
              Svg={Svg}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
