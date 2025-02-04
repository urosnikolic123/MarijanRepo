import React from "react";
import AboutUsInBetweenTextBox from "./AboutUsInBetweenTextBox";
import Experience from "@/../public/assets/svg/Experience.svg";
import FullDay from "@/../public/assets/svg/fullDay.svg";
import Fast from "@/../public/assets/svg/FastTime.svg";

const AboutUsInBetweenData = [
  {
    Icon: Experience,
    text: "Naš tim vodoinstalatera je sa vama već više od 20 godina, pružajući visokokvalitetne usluge popravke i instalacije svih vrsta vodovodnih sistema.",
    title: "Iskustvo i Stručnost",
  },
  {
    Icon: FullDay,
    text: "Ponosni smo na našu sposobnost da brzo i efikasno rešavamo sve vodoinstalaterske probleme, bilo da je reč o hitnim popravkama ili velikim projektima.",
    title: "Brza i Pouzdana Usluga",
  },
  {
    Icon: Fast,
    text: "Naša misija je da svaki klijent bude zadovoljan sa našim uslugama, bilo da renoviramo kupatila ili obavljamo redovno održavanje vodovodnih sistema.",
    title: "Posvećenost Zadovoljstvu Klijenata",
  },
];

const AboutUsInBetween = () => {
  return (
    <section className="w-full bg-blue py-16">
      <div className="container flex flex-col items-center gap-2 text-center text-white">
        <h2 className="font-Roboto_Condensed text-6xl font-medium">O Nama</h2>
        <p className="max-w-xl">
          S više od 20 godina iskustva u industriji, naš tim vodoinstalatera
          pruža vrhunske usluge za vaše vodovodne sisteme. Bez obzira na to da
          li se radi o manjoj popravci ili većem renoviranju, posvećeni smo
          kvalitetu i zadovoljstvu naših klijenata.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-16 text-start md:grid-cols-2 lg:grid-cols-3">
          {AboutUsInBetweenData.map(({ title, text, Icon }) => (
            <AboutUsInBetweenTextBox title={title} text={text} Icon={Icon} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUsInBetween;
