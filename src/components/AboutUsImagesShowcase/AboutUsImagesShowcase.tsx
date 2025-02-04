import React from "react";
import AboutUsImagesShowcaseSectionBox from "./AboutUsImagesShowcaseSectionBox";

const AboutUsImagesShowcase = () => {
  return (
    <section className="container flex flex-col gap-24">
      <AboutUsImagesShowcaseSectionBox
        reverse={true}
        image={"/images/o-nama-prva.jpg"}
        alt={"Renoviranje Kupatila"}
        title={"Renoviranje Kupatila"}
        text={
          "Renoviranje kupatila je jedan od naših specijaliteta. Naš tim vodoinstalatera i majstora sa dugogodišnjim iskustvom nudi kompletnu uslugu renoviranja kupatila, od planiranja do završne obrade. Bilo da želite da osvežite postojeći prostor ili potpuno transformišete kupatilo, mi ćemo obezbediti sve potrebne instalacije, od vodovodnih cevi do montaže novih sanitarnih uređaja. Takođe, koristimo visokokvalitetne materijale koji garantuju dugotrajan i funkcionalan rezultat. Naša pažnja prema detaljima i posvećenost radu omogućavaju nam da obavimo renovaciju u što kraćem roku, bez kompromisa na kvalitetu."
        }
      />
      <AboutUsImagesShowcaseSectionBox
        reverse={false}
        title={"Hitne Popravke"}
        image={"/images/o-nama-druga.jpg"}
        alt={"Hitne Popravke"}
        text={
          "Vodoinstalaterske hitne popravke zahtevaju brzo i efikasno delovanje. Naš tim je obučen da rešava najrazličitije probleme, od curenja cevi, odgušenja odvoda, do kvarova na bojlerima i drugim uređajima. Razumemo koliko su hitne popravke važne i zato smo dostupni 24/7, spremni da reagujemo u bilo kojem trenutku. Korišćenjem najnovijih alata i tehnika, brzo identifikujemo izvor problema i obavljamo popravke sa minimalnim prekidima u vašem svakodnevnom životu. Naš prioritet je da obezbedimo sigurnost i funkcionalnost vaše vodovodne mreže. U slučaju velikih kvarova ili poplava, dolazimo što pre, kako bismo sprečili dalja oštećenja i osigurali da vaša kuća bude sigurna i suva."
        }
      />
    </section>
  );
};

export default AboutUsImagesShowcase;
