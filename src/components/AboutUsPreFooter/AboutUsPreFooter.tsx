import React from "react";
import GenericTitle from "../GenericTitle/GenericTitle";
import Button from "../Button/Button";

const AboutUsPreFooter = ({ preTitle, title, description }) => {
  return (
    <section className="container flex flex-col items-center">
      <div className="min-556:block absolute left-12 top-8 -z-10 hidden h-20 w-20 rounded-full border-4 border-yellow bg-transparent"></div>
      <div className="absolute bottom-0 left-64 -z-10 h-10 w-10 rounded-full border-4 border-yellow bg-transparent"></div>
      <div className="min-556:hidden absolute left-4 top-12 -z-10 h-14 w-14 rounded-full border-4 border-yellow bg-transparent"></div>
      <div className="min-556:block absolute bottom-12 right-4 -z-10 hidden h-36 w-36 rounded-full border-4 border-yellow bg-transparent"></div>
      <GenericTitle
        preTitle={preTitle}
        title={title}
        description={description}
      />
      <Button color={"yellow"} text={"Pozovite Nas!"} />
    </section>
  );
};

export default AboutUsPreFooter;
