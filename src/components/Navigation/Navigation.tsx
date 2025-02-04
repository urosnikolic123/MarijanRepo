"use client";
import React, { useState } from "react";
import Image from "next/image";
import Exit from "@/../public/assets/svg/Exit.svg";
import Menu from "@/../public/assets/svg/PhoneMenu.svg";
import HamburgerMenu from "./HamburgerMenu";
import Button from "../Button/Button";

const navElements = [
  { name: "Usluge", href: "usluge" },
  { name: "O Nama", href: "o-nama" },
  { name: "Problemi", href: "problemi" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex h-12 items-center bg-white shadow-xl">
      <div className="container flex items-center justify-between text-lg">
        <a href="/" className="flex items-center gap-2 text-xl font-semibold">
          <Image
            src={"/images/Logo.png"}
            alt="Logo"
            width={36}
            height={36}
            quality={100}
          />
          <h4 className="cursor-pointer duration-100 hover:text-blue">
            MajstorPera
          </h4>
        </a>
        <HamburgerMenu open={open} setOpen={setOpen} />
        <Menu
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          className="h-8 w-8 md:hidden"
        />
        <div className="hidden items-center gap-10 font-medium md:flex">
          {navElements.map(({ name, href }, index) => (
            <li key={index}>
              <a
                href={`/${href}`}
                className="relative duration-100 hover:text-blue"
              >
                {name}
              </a>
            </li>
          ))}
        </div>
        <button
          className={`hidden w-fit rounded-lg bg-blue px-8 py-1 font-Roboto_Condensed text-xl font-medium text-white duration-100 md:block`}
        >
          Pozovite
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
