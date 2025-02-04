import React from "react";
import GenericTitle from "../GenericTitle/GenericTitle";
import Image from "next/image";
import BeforeAfterImageSection from "./BeforeAfterImageSection";

const BeforeAfterParts = [
  {
    image: "/images/before-after.jpg",
    alt: "pre renoviranja kupatila",
    title: "Pre Renoviranja",
    description:
      "Kupatilo pre renoviranja, sa zastarelim elementima i nefunkcionalnim prostorom. Puno problema sa vodovodom i estetikom prostora koji nije bio u skladu sa modernim standardima.",
  },
  {
    image: "/images/before-after2.jpg",
    alt: "posle renoviranja kupatila",
    title: "Posle Renoviranja",
    description:
      "Nakon renoviranja, kupatilo je postalo moderan i funkcionalan prostor sa novim vodoinstalacijama, savremenim uređajem i estetikom koja odgovara savremenim potrebama.",
  },
];

const BeforeAfter = () => {
  return (
    <section className="container">
      <GenericTitle
        preTitle={"Pre i Posle Renoviranja"}
        title={"Transformacija Kupatila"}
        description={
          "Pogledajte transformaciju naših klijenata! Ova sekcija prikazuje kako izgledaju kupatila pre i posle renoviranja, uz unapređene vodoinstalacije i savremeni dizajn."
        }
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {BeforeAfterParts.map(({ image, alt, title, description }, index) => (
          <BeforeAfterImageSection
            key={index}
            image={image}
            alt={alt}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};
export default BeforeAfter;
