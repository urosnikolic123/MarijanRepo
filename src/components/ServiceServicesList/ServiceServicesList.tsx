"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import ServiceListItem from "./ServiceListItem";

const ServiceServicesList = ({ data }) => {
  return (
    <section className="container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
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
        {data.map(({ image, preTitle, title, description, id, Icon }) => (
          <SwiperSlide key={id}>
            <ServiceListItem
              Icon={Icon}
              image={image}
              id={id}
              preTitle={preTitle}
              title={title}
              description={description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServiceServicesList;
