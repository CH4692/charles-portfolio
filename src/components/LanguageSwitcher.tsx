'use client';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';
import { type Locale, locales } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className="inline-flex items-center overflow-hidden rounded-md border border-white/15 text-[11px] font-semibold tracking-wide uppercase"
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          className={`focus-ring px-2 py-1 transition ${
            code === locale
              ? 'bg-primary/20 text-primary'
              : 'text-cool-grey hover:bg-white/5 hover:text-white'
          }`}
          aria-pressed={code === locale}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
