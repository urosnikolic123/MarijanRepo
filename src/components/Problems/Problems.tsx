import React from "react";
import GenericTitle from "../GenericTitle/GenericTitle";
import ProblemTextContent from "./ProblemTextContent";

const problems = [
  {
    num: "1",
    title: "Da li se dolazak naplaćuje?",
    description:
      "Dolazak se naplaćuje ukoliko nismo obavili nikakve radove. Ukoliko smo izvršili popravku, dolazak je već uključen u cenu popravke.",
  },
  {
    num: "2",
    title: "Kako da znam kada je potrebno da zovem vodoinstalatera?",
    description:
      "Ako primetite curenje, blokadu u odvodu, nisku temperaturu vode ili bilo koji drugi problem, preporučujemo da nas odmah kontaktirate kako bismo brzo rešili situaciju.",
  },
  {
    num: "3",
    title: "Koliko traje popravka vodovodnih instalacija?",
    description:
      "Vreme trajanja popravke zavisi od vrste problema. Veće popravke mogu trajati nekoliko sati, dok manji problemi, poput zamenje ventila ili popravke cevi, mogu biti rešeni u kraćem vremenskom periodu.",
  },
  {
    num: "4",
    title: "Da li radite 24/7?",
    description:
      "Da, pružamo hitne vodoinstalaterske usluge 24/7. Uvek smo tu za vas, bez obzira na vreme ili dan u nedelji.",
  },
];

const Problems = () => {
  return (
    <section className="px-4">
      <GenericTitle
        preTitle={"Često Postavljana Pitanja"}
        title={"Pitanja i Odgovori"}
        description={
          "Imate pitanja u vezi sa našim vodoinstalaterskim uslugama? Pogledajte najčešća pitanja i odgovore kako bismo vam olakšali odlučivanje."
        }
      />
      <ul>
        {problems.map(({ num, title, description }, index) => (
          <li key={index} className="flex flex-col items-center">
            <ProblemTextContent
              num={num}
              title={title}
              description={description}
            />
            {index < problems.length - 1 && (
              <div className="h-16 w-1 bg-black"></div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Problems;
