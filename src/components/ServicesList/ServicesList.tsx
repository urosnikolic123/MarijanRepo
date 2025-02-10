import React from "react";
import Gear from "@/../public/assets/svg/Gear.svg";
import ServicesSingleService from "./ServicesSingleService";

const ServicesList = ({ pagesData }) => {
  return (
    <section className="container">
      <ul className="grid grid-cols-1 gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {pagesData.map(
          ({ image, preTitle, title, description, id, Icon }, index) => (
            <ServicesSingleService
              key={id}
              image={image}
              id={id}
              Icon={Icon}
              preTitle={preTitle}
              title={title}
              description={description}
              // postText={postText}
            />
          )
        )}
      </ul>
    </section>
  );
};

export default ServicesList;
