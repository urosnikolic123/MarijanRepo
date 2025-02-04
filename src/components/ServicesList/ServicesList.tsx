import React from "react";
import Gear from "@/../public/assets/svg/Gear.svg";
import ServicesSingleService from "./ServicesSingleService";
const services = [
  {
    image: "/images/servicesImg.jpg",
    Icon: Gear,
    preTitle: "About us",
    title: "Drain cleaning",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque accusantium tenetur suscipit, atque deleniti sit! Quos modi veritatis unde!",
    postText: "Show Details",
  },
  {
    image: "/images/servicesImg.jpg",
    Icon: Gear,
    preTitle: "About us",
    title: "Drain cleaning",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque accusantium tenetur suscipit, atque deleniti sit! Quos modi veritatis unde!",
    postText: "Show Details",
  },
  {
    image: "/images/servicesImg.jpg",
    Icon: Gear,
    preTitle: "About us",
    title: "Drain cleaning",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque accusantium tenetur suscipit, atque deleniti sit! Quos modi veritatis unde!",
    postText: "Show Details",
  },
  {
    image: "/images/servicesImg.jpg",
    Icon: Gear,
    preTitle: "About us",
    title: "Drain cleaning",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque accusantium tenetur suscipit, atque deleniti sit! Quos modi veritatis unde!",
    postText: "Show Details",
  },
  {
    image: "/images/servicesImg.jpg",
    Icon: Gear,
    preTitle: "About us",
    title: "Drain cleaning",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque accusantium tenetur suscipit, atque deleniti sit! Quos modi veritatis unde!",
    postText: "Show Details",
  },
  {
    image: "/images/servicesImg.jpg",
    Icon: Gear,
    preTitle: "About us",
    title: "Drain cleaning",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque accusantium tenetur suscipit, atque deleniti sit! Quos modi veritatis unde!",
    postText: "Show Details",
  },
  {
    image: "/images/servicesImg.jpg",
    Icon: Gear,
    preTitle: "About us",
    title: "Drain cleaning",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque accusantium tenetur suscipit, atque deleniti sit! Quos modi veritatis unde!",
    postText: "Show Details",
  },
  {
    image: "/images/servicesImg.jpg",
    Icon: Gear,
    preTitle: "About us",
    title: "Drain cleaning",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque accusantium tenetur suscipit, atque deleniti sit! Quos modi veritatis unde!",
    postText: "Show Details",
  },
];

const ServicesList = ({ pagesData }) => {
  return (
    <section className="container">
      <ul className="grid grid-cols-1 gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {pagesData.map(({ image, preTitle, title, description, id, Icon }) => (
          <ServicesSingleService
            image={image}
            id={id}
            Icon={Icon}
            preTitle={preTitle}
            title={title}
            description={description}
            // postText={postText}
          />
        ))}
      </ul>
    </section>
  );
};

export default ServicesList;
