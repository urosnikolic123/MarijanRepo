"use client";
import React, { useState } from "react";
import Arrow from "@/../public/assets/svg/Arrow.svg";

const ClosingTextElement = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="flex flex-col gap-2">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center justify-between border-b-2 border-gray-400 pr-3"
      >
        <h3 className="py-4 text-xl font-semibold">{title}</h3>
        <div
          className={`${open ? "rotate-90" : "rotate-0"} duration-300 ease-in-out`}
        >
          <Arrow width={32} height={32} />
        </div>
      </div>

      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="border-b-2 border-gray-400 pb-4">{text}</p>
      </div>
    </li>
  );
};

export default ClosingTextElement;
