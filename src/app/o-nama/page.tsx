import AboutUsCards from "@/components/AboutUsCards/AboutUsCards";
import AboutUsImagesShowcase from "@/components/AboutUsImagesShowcase/AboutUsImagesShowcase";
import AboutUsIntroSection from "@/components/AboutUsIntroSection/AboutUsIntroSection";
import AboutUsNumbersSection from "@/components/AboutUsNumbersSection/AboutUsNumbersSection";
import AboutUsPreFooter from "@/components/AboutUsPreFooter/AboutUsPreFooter";
import AboutUsInBetween from "@/components/AbutUsInBetween/AboutUsInBetween";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import PagesTitle from "@/components/PagesTitle/PagesTitle";
import React from "react";
const AboutUs = () => {
  return (
    <div className="flex flex-col gap-44">
      <Header />
      <PagesTitle
        date={null}
        title={"O Nama"}
        description={
          "Tim iskusnih vodoinstalatera pruža brza i efikasna rešenja za sve vaše vodovodne potrebe. Specijalizovani smo za popravke, montaže i renoviranja, uz garantovan kvalitet i profesionalan pristup."
        }
      />
      <AboutUsIntroSection />
      <AboutUsNumbersSection />
      <AboutUsInBetween />
      <AboutUsImagesShowcase />
      <AboutUsCards />
      <AboutUsPreFooter
        preTitle={"Naš Tim"}
        title={"Zašto Nas Izabrati?"}
        description={
          "Naš tim pruža vrhunske usluge vodoinstalacija sa posvećenošću kvalitetu, efikasnosti i sigurnosti. Uvek smo tu za vas, rešavamo sve izazove brzo i profesionalno, koristeći samo najbolje materijale!"
        }
      />
      <Footer />
    </div>
  );
};

export default AboutUs;
