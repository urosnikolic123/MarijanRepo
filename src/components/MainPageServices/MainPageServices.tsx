import React from "react";
import GenericTitle from "../GenericTitle/GenericTitle";
import MainPageService from "./MainPageService";
import servicesData from "../../app/usluge/data.json";

const MainPageServices = () => {
  return (
    <section className="container">
      <GenericTitle
        title={"Kako možemo da vam pomognemo?"}
        preTitle={"Naše Usluge"}
        description={
          "Bilo da se radi o jednostavnom popravci, instalaciji ili hitnoj intervenciji, tu smo da brzo i profesionalno rešimo sve vaše vodoinstalaterske probleme. Evo nekih od usluga koje pružamo:"
        }
      />
      <ul className="min-1290:grid-cols-3 grid grid-cols-1 gap-x-6 gap-y-44 md:grid-cols-2">
        {servicesData
          .slice(0, 3)
          .map(({ preTitle, title, description, image, id }) => (
            <MainPageService
              key={id}
              preTitle={preTitle}
              title={title}
              description={description}
              image={image}
              id={id}
            />
          ))}
      </ul>
    </section>
  );
};

export default MainPageServices;
