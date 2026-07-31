'use client';

import { ReactElement } from 'react';

export default function CtaButton({
  name,
  icon,
  addClass,
  targetId = 'contact',
  variant = 'primary',
}: {
  name: string;
  icon?: ReactElement;
  addClass?: string;
  targetId?: string;
  variant?: 'primary' | 'secondary';
}) {
  function onClickHandler() {
    const navEl = document.getElementById(targetId);
    navEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const base =
    'focus-ring cursor-pointer rounded-lg px-5 py-2.5 font-semibold transition duration-300 ease-in-out hover:scale-[1.03]';
  const styles =
    variant === 'primary'
      ? 'text-background from-cta-grad-start to-cta-grad-end bg-gradient-to-br shadow-lg shadow-primary/20 hover:shadow-primary/40'
      : 'border-primary/70 text-white border bg-transparent hover:border-primary hover:bg-white/5';

  return (
    <button onClick={onClickHandler} className={`${base} ${styles} ${addClass ?? ''}`}>
      {name}
      {icon}
    </button>
  );
}
