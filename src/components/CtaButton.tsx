'use client';

import { ReactElement } from 'react';

export default function CtaButton({
  name,
  icon,
  addClass,
}: {
  name: string;
  icon?: ReactElement;
  addClass?: string;
}) {
  function onClickeHandler() {
    const navEl = document.getElementById('contact');
    navEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <button
      onClick={onClickeHandler}
      className={`text-background hover:shadow-primary from-primary to-cta-grad-end cursor-pointer rounded-lg bg-gradient-to-br px-5 py-2 font-medium shadow-2xl/70 transition duration-400 ease-in-out hover:scale-105 ${addClass}`}
    >
      {name}
      {icon}
    </button>
  );
}
