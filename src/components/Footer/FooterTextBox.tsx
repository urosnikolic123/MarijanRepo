import React from "react";

const FooterTextBox = ({ title, data }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <li className="flex flex-col gap-2 text-start">
        <div className="font-Roboto_Condensed text-2xl font-bold">{title}</div>
        {data.map(({ Icon, text, textColor }, index) => (
          <div
            key={index}
            className={`flex gap-3 text-lg text-white ${textColor && `text-${textColor}`}`}
          >
            {Icon && <Icon width={32} height={32} />}
            {text}
          </div>
        ))}
      </li>
    </div>
  );
};

export default FooterTextBox;
