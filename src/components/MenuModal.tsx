'use client';

import { useTranslations } from 'next-intl';

export default function MenuModal({
  menuItems,
  onClick,
  setIsOpen,
}: {
  menuItems: { id: string; label: string }[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  setIsOpen: () => void;
}) {
  const t = useTranslations('Nav');

  function onContactHandler() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen();
  }

  return (
    <ul className="bg-card border-border visible mb-4 block rounded-xl border-1 p-4 md:hidden">
      {menuItems.map((item) => (
        <li
          key={item.id}
          className="border-border hover:text-primary hover:shadow-primary mt-2 h-12 cursor-pointer rounded-xl text-center transition ease-in-out hover:scale-103 hover:border-1 hover:font-semibold hover:shadow-xl/10"
        >
          <button
            type="button"
            onClick={onClick}
            data-section-id={item.id}
            className="h-full w-full cursor-pointer"
          >
            {item.label}
          </button>
        </li>
      ))}

      <li className="bg-card border-primary hover:shadow-primary mt-2 h-12 cursor-pointer rounded-xl border-1 text-center shadow-xl/20 transition ease-in-out hover:scale-103">
        <button
          type="button"
          onClick={onContactHandler}
          className="h-full w-full cursor-pointer text-center"
        >
          {t('getInTouch')}
        </button>
      </li>
    </ul>
  );
}
