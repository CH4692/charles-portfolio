import Link from "next/link";
import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <header>
      <nav aria-label="Hauptnavigation">
        <Logo />
        <div>
          <ul className="list-none m-0 p-0 overflow-hidden">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/skills">Projekts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
