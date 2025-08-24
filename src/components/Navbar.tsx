import Link from "next/link";
import Logo from "@/components/Logo";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 ">
      <nav
        aria-label="Hauptnavigation"
        className="flex justify-between items-center h-20 border-b-1 border-secondary p-8 bg-background opacity-90 shadow-2xl"
      >
        <Logo />
        <div className="w-xl h-auto ">
          <ul className="w-full h-full px-9 list-none overflow-hidden flex justify-between items-center">
            <li className="">
              <NavButton>Home</NavButton>
            </li>
            <li>
              <NavButton>About</NavButton>
            </li>
            <li>
              <NavButton>Skills</NavButton>
            </li>
            <li>
              <NavButton>Projects</NavButton>
            </li>
            <li>
              <NavButton>Contact</NavButton>
            </li>
            <li>
              <button>Get In Touch</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
