'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import Logo from '@/components/Logo';

import GetInTouchButton from './GetInTouchButton';
import MenuIcon from './MenuIcon';
import MenuModal from './MenuModal';
import NavButton from './NavButton';

const NAV_IDS = ['work', 'approach', 'experience', 'stack'] as const;

export default function Navbar() {
  const t = useTranslations('Nav');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = NAV_IDS.map((id) => ({
    id,
    label: t(id),
  }));

  function onClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.dataset.sectionId;
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  }

  function showMenuModalHandler() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="border-border bg-background fixed inset-x-0 top-0 z-50 h-[var(--header-h)] min-h-[var(--header-h)] border-b-1 opacity-95 shadow-2xl">
      <nav
        aria-label={t('ariaLabel')}
        className="flex h-full items-center justify-between px-5 sm:p-9"
      >
        <Logo width={39} height={39} />
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <MenuIcon isOpen={isOpen} setIsOpen={showMenuModalHandler} />
        </div>
        <div className="hidden h-full w-xl md:block">
          <ul className="flex h-full w-full list-none items-center justify-between gap-2">
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <NavButton onClick={onClickHandler} data-section-id={menu.id}>
                  {menu.label}
                </NavButton>
              </li>
            ))}
            <li>
              <GetInTouchButton name={t('getInTouch')} />
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
      <div>
        {isOpen && (
          <MenuModal
            setIsOpen={showMenuModalHandler}
            onClick={onClickHandler}
            menuItems={menuItems}
          />
        )}
      </div>
    </header>
  );
}
