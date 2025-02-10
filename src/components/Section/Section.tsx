import React from "react";
import GenericTitle from "../GenericTitle/GenericTitle";
import SentanceStructure from "./SentanceStructure";
import { PHONE_NUMBER } from "@/app/constants.js";

const sentances = [
  {
    text: "Imate curenje vode? Naši vodoinstalateri su tu da pruže brzo i efikasno rešenje za sve vrste curenja.",
  },
  {
    text: "Specijalizovani smo za brzo i efikasno rešavanje blokada. Zbogom zagušenja i sporim odvodima!",
  },
  {
    text: "Planirate novu instalaciju vodovodnih sistema? Naš tim se bavi svime, od bojlera do lavaboa, sa preciznošću i pažnjom.",
  },
  {
    text: "Imate hitan vodoinstalaterski problem? Dostupni smo 24/7 kako bismo rešili svaki problem bez odlaganja.",
  },
];

const Section = () => {
  return (
    <section className="container flex flex-col items-center">
      <GenericTitle
        preTitle={"Stručnjaci za Vodoinstalacije"}
        title={"Pouzdana Rešenja za Svaku Potrebu"}
        description={
          "Brza i efikasna rešenja za curenje, blokade, instalacije i sve druge vodoinstalaterske izazove. Naš tim je uvek spreman da reši svaki problem na vreme."
        }
      />
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {sentances.map(({ text }, index) => (
          <SentanceStructure key={index} text={text} />
        ))}
      </ul>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="mt-20 rounded-lg bg-yellow hover:bg-yellowHover duration-200 px-8 py-3 font-Roboto_Condensed text-xl font-medium text-white"
      >
        Kontaktirajte Nas
      </a>
    </section>
  );
};

export default Section;
