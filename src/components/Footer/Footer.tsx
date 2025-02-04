import React from "react";
import FooterTextBox from "./FooterTextBox";
import Phone from "@/../public/assets/svg/Phone.svg";
import Letter from "@/../public/assets/svg/Letter.svg";
// import FooterContactUsRow from "./FooterContactUsRow";
import Button from "../Button/Button";

const list1 = ["Usluge", "O Nama", "Problemi"];
const list2 = ["Centar za pomoć", "Pitanja i odgovori", "Kontaktirajte nas"];

const Footer = () => {
  return (
    <footer className="rounded-t-3xl bg-blue pt-20 text-white">
      <div className="container">
        <h2 className="mb-10 text-4xl font-bold sm:text-5xl">Vodoinstalater</h2>
        <div className="grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h4 className="font-Roboto_Condensed text-2xl font-bold">
              Pobrinućemo se za sve vaše vodoinstalaterske potrebe
            </h4>
            <p>
              Naš tim profesionalnih vodoinstalatera je tu da pruži brzo i
              efikasno rešenje za sve vrste problema u vašem domu ili poslovnom
              prostoru. Kontaktirajte nas za sve usluge vezane za vodovod,
              kanalizaciju i još mnogo toga.
            </p>
          </div>
          <div className="flex justify-between gap-12 lg:justify-around">
            <div className="flex flex-col items-start gap-2">
              <li className="flex flex-col gap-2 text-start">
                <div className="font-Roboto_Condensed text-2xl font-bold">
                  Firma
                </div>
                {list1.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </li>
            </div>
            <div className="flex flex-col items-start gap-2 pr-24 sm:pr-0">
              <li className="flex flex-col gap-2 text-start">
                <div className="font-Roboto_Condensed text-2xl font-bold">
                  Pomoć
                </div>
                {list2.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </li>
            </div>
            <div className="hidden flex-col items-start gap-2 text-center sm:flex lg:hidden">
              <h3 className="font-Roboto_Condensed text-2xl font-bold">
                Kontaktirajte nas
              </h3>
              <div className="flex flex-col gap-2 text-xl">
                <h4 className="flex gap-3 text-yellow">
                  <Phone /> 0653901520
                </h4>
                <h4 className="flex gap-3">
                  <Letter />{" "}
                  <span className="flex-wrap">info@vodoinstalater.com</span>
                </h4>
              </div>
              <Button text={"Pozovite Nas!"} color={"yellow"} />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 text-center sm:hidden lg:flex lg:justify-self-center">
            <h3 className="font-Roboto_Condensed text-2xl font-bold">
              Kontaktirajte nas
            </h3>
            <div className="flex flex-col gap-2 text-xl">
              <h4 className="flex gap-3 text-yellow">
                <Phone /> 0653901520
              </h4>
              <h4 className="flex gap-3">
                <Letter />{" "}
                <span className="flex-wrap">info@vodoinstalater.com</span>
              </h4>
            </div>
            <Button text={"Pozovite Nas!"} color={"yellow"} />
          </div>
        </div>
      </div>
      <div className="mt-12 h-[3px] w-full bg-white"></div>
      <div className="container flex justify-center py-5 lg:justify-between">
        <p className="font-medium">
          Copyright by StudioBam. All rights reserved.
        </p>
        <ul className="hidden gap-6 lg:flex">
          <li>Politika privatnosti</li>
          <li>Uslovi korišćenja</li>
          <li>Pravna obavestenja</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
