import React from "react";
import Image from "next/image";

const PostHeroCard = ({ title, text, Icon }) => {
  return (
    <div className="post_hero_card_shadow flex cursor-pointer flex-col items-center gap-2 rounded-2xl bg-blue p-6 text-center text-white duration-300 hover:scale-105">
      <Icon className="h-24 w-24 xl:h-32 xl:w-32" />
      <h3 className="text-xl font-bold xl:text-2xl 2xl:text-3xl">{title}</h3>
      <h4 className="text-lg xl:text-xl">{text}</h4>
    </div>
  );
};

export default PostHeroCard;
