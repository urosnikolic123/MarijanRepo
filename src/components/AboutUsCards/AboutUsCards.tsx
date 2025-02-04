import React from "react";
import AboutUsCard from "./AboutUsCard";
import TaskTab from "@/../public/assets/svg/TaskTab.svg";
import Box from "@/../public/assets/svg/BoxDelivery.svg";
import SafetyHat from "@/../public/assets/svg/SafetyHat.svg";
import FastDelivery from "@/../public/assets/svg/FastDelivery.svg";

const cardData = [
  {
    Icon: TaskTab,
    title: "Profesionalizam",
    text: "Naš tim je posvećen vrhunskom kvalitetu usluga. Svaki član tima ima dugogodišnje iskustvo u vodoinstalaterskim radovima, osiguravajući da svaki posao bude obavljen precizno i efikasno.",
  },
  {
    Icon: FastDelivery,
    title: "Brzina i Efikasnost",
    text: "Razumemo koliko je važno brzo rešiti vodoinstalaterske probleme. Zato pružamo hitnu pomoć 24/7, kako biste mogli da se oslonite na nas u svakom trenutku. Naš cilj je da minimiziramo prekide i obezbedimo brza rešenja.",
  },
  {
    Icon: Box,
    title: "Kvalitet Materijala",
    text: "Koristimo samo visokokvalitetne materijale u svim našim projektima, bilo da je reč o cevima, instalacijama ili sanitarijama. Kvalitetni materijali garantuju dugotrajnost i bezbednost vaših vodoinstalacija.",
  },
  {
    Icon: SafetyHat,
    title: "Sigurnost i Pouzdanost",
    text: "Sigurnost naših klijenata je na prvom mestu. Svi naši radovi su u skladu sa važećim zakonima i standardima, čime osiguravamo da vaše vodoinstalacije budu sigurne i pouzdane tokom vremena.",
  },
];

const AboutUsCards = () => {
  return (
    <section className="container grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
      {cardData.map(({ title, text, Icon }, index) => (
        <AboutUsCard title={title} text={text} Icon={Icon} key={index} />
      ))}
    </section>
  );
};

export default AboutUsCards;
