import React from "react";
import QuotationMark from "@/../public/assets/svg/QuotationMark.svg";

const PageMainText = ({ preTitle, title, postTitle, text }) => {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <div className="text-blue">
        <QuotationMark width={80} height={80} />
      </div>
      <div className="font-Roboto_Condensed">
        <h4 className="text-lg font-semibold text-blue">{preTitle}</h4>
        <h2 className="max-w-3xl text-5xl font-medium">{title}</h2>
      </div>
      <p className="max-w-3xl text-gray-600">{postTitle}</p>
      <p className="text-lg">{text}</p>
    </section>
  );
};

export default PageMainText;
