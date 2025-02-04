import AboutUsImagesShowcaseSectionBox from "@/components/AboutUsImagesShowcase/AboutUsImagesShowcaseSectionBox";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PagesTitle from "@/components/PagesTitle/PagesTitle";
import ServicesList from "@/components/ServicesList/ServicesList";
import React from "react";
import pagesData from "./data.json";

const Services = () => {
  return (
    <div className="flex flex-col gap-44">
      <Header />
      <PagesTitle
        date={null}
        title={"Usluge"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum architecto, doloribus delectus harum pariatur illo! Labore autem sunt laborum numquam ut ab, odit dolorum."
        }
      />
      <ServicesList pagesData={pagesData} />
      <div className="container">
        <AboutUsImagesShowcaseSectionBox
          image={"/images/usluge-main.jpg"}
          alt={"Nase Usluge"}
          reverse={true}
          title={"Naše Usluge"}
          text={
            "Nudimo širok spektar vodoinstalaterskih usluga koje zadovoljavaju sve potrebe vašeg doma i poslovnog prostora. Od osnovnih popravki, kao što su zamena slomljenih cevi, do kompleksnih instalacija za nove objekte, naš tim stručnjaka je obučen i spreman da pruži visokokvalitetne usluge. Pored popravki, specijalizovani smo i za instalacije sistema grejanja i hlađenja, kao i za montažu sanitarnih uređaja. Uvek koristimo najbolje materijale i moderne tehnike kako bismo osigurali dugotrajna rešenja koja zadovoljavaju sve bezbednosne standarde."
          }
        />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
