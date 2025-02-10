import BeforeAfter from "@/components/BeforeAfter/BeforeAfter";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import InBetweenSection from "@/components/InBetweenSection/InBetweenSection";
import MainPageServices from "@/components/MainPageServices/MainPageServices";
import PostHero from "@/components/PostHero/PostHero";
import Problems from "@/components/Problems/Problems";
import Section from "@/components/Section/Section";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyUs from "@/components/WhyUs/WhyUs";
import MainPageAboutUsSection from "@/components/MainPageAboutUsSection/MainPageAboutUsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-44">
      <Header />
      <div className="mt-24">
        <Hero />
        <PostHero />
      </div>
      <div className="mb-12">
        <MainPageAboutUsSection />
      </div>
      <MainPageServices />
      <div className="mt-28">
        <InBetweenSection
          preTitle={"Hitne Intervencije"}
          title={"Vodoinstalaterske usluge u bilo kom trenutku"}
          text={
            "Ne možete predvideti kada će vam vodoinstalaterski problem iznenada zatrebati. Bilo da se radi o curenju cevi, zapušenju odvoda, ili bilo kojem drugom hitnom problemu, naš tim je tu da vam pruži pomoć u najkritičnijim momentima. Naša služba za hitne intervencije dostupna je 24 sata dnevno, 7 dana u nedelji, čak i tokom vikenda i praznika."
          }
          button={"Kontaktirajte nas"}
        />
      </div>
      <WhyUs />
      <Testimonials />
      <Section />
      <BeforeAfter />
      <Problems />
      <Footer />
    </div>
  );
}
