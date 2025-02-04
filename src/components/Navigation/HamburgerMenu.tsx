import Exit from "@/../public/assets/svg/Exit.svg";
import HamburgerMenuItem from "./HamburgerMenuItem";

const menuItems = [
  { title: "Pocetna", href: "" },
  { title: "Usluge", href: "usluge" },
  { title: "O Nama", href: "o-nama" },
  { title: "Problemi", href: "problemi" },
];

const HamburgerMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed left-0 top-0 flex h-screen w-72 transform flex-col bg-white px-2 pt-2 duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mb-8 flex w-full items-center justify-between">
        <h3 className="font-Roboto_Condensed text-3xl font-semibold">
          Majstor Pera
        </h3>
        <Exit
          className="h-7 w-7"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        />
      </div>
      <ul className="flex flex-col gap-3">
        {menuItems.map(({ title, href }, index) => (
          <HamburgerMenuItem title={title} href={href} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
