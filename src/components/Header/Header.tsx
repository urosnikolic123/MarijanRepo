import React from "react";
import Letter from "@/../public/assets/svg/Letter.svg";
import Phone from "@/../public/assets/svg/Phone.svg";
import Medal from "@/../public/assets/svg/Medal.svg";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="fixed z-50 w-full">
      <div className="flex h-12 justify-center bg-dark text-white">
        <div className="min-556:flex-row container flex flex-row-reverse justify-between text-lg">
          <div className="flex cursor-pointer items-center gap-2 duration-150 hover:text-yellow">
            <Medal width={24} height={24} className="min-556:hidden" />
            <Letter width={24} height={24} className="min-556:block hidden" />
            <h4 className="min-556:block hidden">
              uros.n.nikolic123@gmail.com
            </h4>
          </div>
          <div className="flex cursor-pointer items-center gap-2 duration-150 hover:text-yellow">
            <Phone width={24} height={24} />
            <h4>065/390-1520</h4>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
