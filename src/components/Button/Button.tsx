import React from "react";

const Button = ({ text, color }) => {
  return (
    <button
      className={`bg-${color} mt-4 w-fit rounded-lg px-8 py-3 font-Roboto_Condensed text-xl font-medium text-white duration-100`}
    >
      {text}
    </button>
  );
};

export default Button;
