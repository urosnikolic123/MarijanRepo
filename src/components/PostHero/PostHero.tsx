import React from "react";
import PostHeroCard from "./PostHeroCard";
import fullToilet from "@/../public/assets/svg/fullToilet.svg";
import Emergency from "@/../public/assets/svg/Emergency.svg";
import Unclogging from "@/../public/assets/svg/Unclogging.svg";
import Boiler from "@/../public/assets/svg/boiler.svg";

const PostheroCards = [
  {
    title: "Hitne Intervencije",
    text: "Brza sanacija curenja i pukotina.",
    Icon: Emergency,
  },
  {
    title: "Odgušenje Kanalizacije",
    text: "Efikasno uklanjanje začepljenja.",
    Icon: Unclogging,
  },
  {
    title: "Zamena Bojlera",
    text: "Montaža i popravka svih vrsta bojlera.",
    Icon: Boiler,
  },
  {
    title: "Renoviranje kupatila",
    text: "Modernizacija uz kvalitetne materijale.",
    Icon: fullToilet,
  },
];

const PostHero = () => {
  return (
    <section className="bg-dark py-12">
      <div className="container">
        <ul className="min-1184:gap-8 min-360:mx-10 min-556:mx-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:grid-cols-4 lg:gap-4 xl:gap-12">
          {PostheroCards.map(({ title, text, Icon }, index) => (
            <PostHeroCard title={title} text={text} key={index} Icon={Icon} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PostHero;
