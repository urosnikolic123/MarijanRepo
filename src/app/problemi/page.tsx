import AboutUsImagesShowcaseSectionBox from "@/components/AboutUsImagesShowcase/AboutUsImagesShowcaseSectionBox";
import BlogList from "@/components/BlogList/BlogList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InBetweenSection from "@/components/InBetweenSection/InBetweenSection";
import PagesTitle from "@/components/PagesTitle/PagesTitle";
import React from "react";
import pagesData from "./data.json";

const Blog = () => {
  return (
    <div className="flex flex-col gap-44">
      <Header />
      <PagesTitle
        date={null}
        title={"Problemi"}
        description={
          "Naša stranica pruža uvid u najčešće probleme sa vodoinstalacijama. Ovdje možete pronaći korisne informacije o tome kako prepoznati i rešiti tipične vodovodne probleme, kao i savete za prevenciju."
        }
      />
      <BlogList pagesData={pagesData} />
      <InBetweenSection
        button={"Pozovite nas!"}
        preTitle={"Česti Problemi sa Vodoinstalacijama"}
        title={"Rešavanje Problema sa Vodoopskrbom"}
        text={
          "Naša specijalnost je brzo i efikasno rešavanje problema sa vodoinstalacijama. Bilo da je reč o curenju vode, blokadama ili oštećenju cevi, naš tim ima dugogodišnje iskustvo u otklanjanju svih vrsta problema."
        }
      />

      <div className="container">
        <AboutUsImagesShowcaseSectionBox
          image={"/images/problemi-main.jpg"}
          alt={"Izgled Popravki"}
          reverse={false}
          title={"Kako Izgledaju Naše Popravke"}
          text={
            "Svaka popravka koju obavljamo nije samo efikasna, već i dugotrajna. Posvećeni smo tome da naši popravke budu od najvišeg kvaliteta, koristeći samo najbolje materijale i tehnike. Naši stručnjaci pažljivo pristupaju svakom problemu, bilo da se radi o menjanju starog sistema cevi ili rešavanju curenja. Pratite slike naših pre i posle radova da biste videli kako naši stručnjaci efikasno rešavaju problem, vraćajući funkcionalnost vašem domu ili poslovnom prostoru."
          }
        />
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
