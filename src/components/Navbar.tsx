"use client";

import Logo from "@/components/Logo";
import NavButton from "./NavButton";
import MenuIcon from "./MenuIcon";
import MenuModal from "./MenuModal";
import { useState } from "react";
import CtaButton from "./CtaButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuItems = ["Home", "About", "Skills", "Projects", "Contact"];
  function showMenuModalHandler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="sticky top-0 min-h-20 h-20 border-b-1 border-border bg-background opacity-95 shadow-2xl">
      <nav
        aria-label="Hauptnavigation"
        className="flex h-full justify-between p-9 items-center"
      >
        <Logo width={39} height={39} />
        <MenuIcon isOpen={isOpen} setIsOpen={showMenuModalHandler} />
        <div className="w-lg h-full hidden md:block">
          <ul className="w-full h-full list-none flex justify-between items-center ">
            {MenuItems.map((menu) => (
              <li key={menu}>
                <NavButton>{menu}</NavButton>
              </li>
            ))}
            <li>
              <CtaButton name="Get In Touch" />
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && <MenuModal menuNames={MenuItems} />}
    </header>
  );
}
