import { Menu, X } from "lucide-react";
import { useState } from "react";
import MenuModal from "./MenuModal";

export default function MenuIcon({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen(): void;
}) {
  return (
    <button type="button" className="cursor-pointer" onClick={setIsOpen}>
      {!isOpen && (
        <Menu color="white" size={24} className="visible md:hidden" />
      )}
      {isOpen && <X color="white" size={24} className="visible md:hidden" />}
    </button>
  );
}
