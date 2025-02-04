import React from "react";

const AboutUsCard = ({ title, text, Icon }) => {
  return (
    <div className="flex max-w-80 flex-col items-center justify-center gap-2 justify-self-center rounded-lg border-2 border-dashed border-gray-400 p-4 px-6 text-center">
      <div className="z-10 mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-yellow">
        <Icon width={62} height={62} />
      </div>
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default AboutUsCard;
