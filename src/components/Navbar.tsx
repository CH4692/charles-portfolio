'use client';

import { useState } from 'react';

import Logo from '@/components/Logo';

import GetInTouchButton from './GetInTouchButton';
import MenuIcon from './MenuIcon';
import MenuModal from './MenuModal';
import NavButton from './NavButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuItems = ['Work', 'Approach', 'Experience', 'Stack'];

  function onClickeHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const nav = e.currentTarget.innerText;
    const navEl = document.getElementById(nav.toLowerCase());
    navEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  }

  function showMenuModalHandler() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="border-border bg-background fixed inset-x-0 top-0 z-50 h-[var(--header-h)] min-h-[var(--header-h)] border-b-1 opacity-95 shadow-2xl">
      <nav
        aria-label="Hauptnavigation"
        className="flex h-full items-center justify-between px-5 sm:p-9"
      >
        <Logo width={39} height={39} />
        <MenuIcon isOpen={isOpen} setIsOpen={showMenuModalHandler} />
        <div className="hidden h-full w-xl md:block">
          <ul className="flex h-full w-full list-none items-center justify-between gap-2">
            {MenuItems.map((menu) => (
              <li key={menu}>
                <NavButton onClick={onClickeHandler}>{menu}</NavButton>
              </li>
            ))}
            <li>
              <GetInTouchButton name="Get In Touch" />
            </li>
          </ul>
        </div>
      </nav>
      <div className="">
        {isOpen && (
          <MenuModal
            setIsOpen={showMenuModalHandler}
            onClick={onClickeHandler}
            menuNames={MenuItems}
          />
        )}
      </div>
    </header>
  );
}
