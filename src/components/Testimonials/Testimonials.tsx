"use client";
import React from "react";
import GenericTitle from "../GenericTitle/GenericTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import TestimonialProfile from "./TestimonialProfile";

const TestimonialsProfiles = [
  {
    image: "/images/testimonials1.jpg",
    alt: "Marko Jovanovic",
    name: "Marko Jovanović",
    work: "Stolar",
    description:
      "Zahvaljujući vašoj brzoj i efikasnoj usluzi, uspeli smo da rešimo problem sa curenjem cevi. Brzo su reagovali i zamenili oštećene delove. Preporucujem.",
  },
  {
    image: "/images/testimonials2.jpg",
    alt: "Nikola Petrović",
    name: "Nikola Petrović",
    work: "Zidar",
    description:
      "Nedavno smo imali problem sa zapušenim WC-om, ljudi su brzo rešili situaciju. Sve je očišćeno i postavljeno kako treba. Veoma smo zadovoljni.",
  },
  {
    image: "/images/testimonials3.jpg",
    alt: "Jovan Stanković",
    name: "Jovan Stanković",
    work: "Moler",
    description:
      "Imali smo problem sa curenjem cevi u stanu, ekipa je brzo reagovala i rešila problem bez ikakvih oštećenja. sve je rešeno na vreme. 10.",
  },
  {
    image: "/images/testimonials4.jpg",
    alt: "Ana Lukić",
    name: "Ana Lukić",
    work: "Prosvetni radnik",
    description:
      "Imala sam problem sa WC šoljom koja nije ispravno funkcionisala. Majstori su došli i zamenili deo koji ne valja. Usluga je bila odlična i brzo smo se vratili u normalu.",
  },
  {
    image: "/images/testimonials5.jpg",
    alt: "Stefan Eganović",
    name: "Stefan Eganović",
    work: "Električar",
    description:
      "Pozvao sam majstore da dodju. Na moje čudo stigli su za 10 minuta. cevi su mi se zacepile bilo je kasno oko 3h ujutro a tim je dosao bez problema. Veoma sam zadovoljan uslugom i preporucujem svima.",
  },
];

const Testimonials = () => {
  return (
    <section className="container">
      <GenericTitle
        preTitle={"Iskustva"}
        title={"Zadovoljni klijenti i preporuke"}
        description={
          "Pročitajte iskustva naših zadovoljnih korisnika. Naša posvećenost kvalitetu i profesionalizmu prepoznata je od strane svih naših klijenata."
        }
      />

      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide for small screens
          },
          768: {
            slidesPerView: 2, // 2 slides for tablets
          },
          1240: {
            slidesPerView: 3, // 3 slides for desktops
          },
        }}
      >
        {TestimonialsProfiles.map(
          ({ image, alt, name, work, description }, index) => (
            <SwiperSlide key={index}>
              <TestimonialProfile
                image={image}
                alt={alt}
                name={name}
                work={work}
                description={description}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};

export default Testimonials;
