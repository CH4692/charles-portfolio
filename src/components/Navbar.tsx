'use client';

import { useState } from 'react';

import Logo from '@/components/Logo';

import GetInTouchButton from './GetInTouchButton';
import MenuIcon from './MenuIcon';
import MenuModal from './MenuModal';
import NavButton from './NavButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuItems = ['Home', 'About', 'Skills', 'Projects'];
  function onClickeHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const nav = e.currentTarget.innerText;
    const navEl = document.getElementById(nav.toLowerCase());
    navEl?.scrollIntoView();
    setIsOpen(false);
  }
  function showMenuModalHandler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="border-border bg-background sticky top-0 min-h-20 border-b-1 opacity-95 shadow-2xl md:h-20">
      <nav aria-label="Hauptnavigation" className="flex h-full items-center justify-between p-9">
        <Logo width={39} height={39} />
        <MenuIcon isOpen={isOpen} setIsOpen={showMenuModalHandler} />
        <div className="hidden h-full w-lg md:block">
          <ul className="flex h-full w-full list-none items-center justify-between">
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
      <div className="px-9">
        {isOpen && <MenuModal onClick={onClickeHandler} menuNames={MenuItems} />}
      </div>
    </header>
  );
}
