import { getLocale, getTranslations } from 'next-intl/server';

import { getCredibility } from '@/data/proof';
import type { Locale } from '@/i18n/routing';

export default async function CredibilityStrip() {
  const t = await getTranslations('Credibility');
  const locale = (await getLocale()) as Locale;
  const items = getCredibility(locale);

  return (
    <section
      aria-label={t('ariaLabel')}
      className="from-sec-gra-start to-background border-y border-white/10 bg-linear-to-br py-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-cool-grey text-xs tracking-[0.2em] uppercase">{t('prefix')}</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4">
          {items.map((item) => (
            <li key={item.label}>
              <p className="font-display text-sm font-semibold">{item.label}</p>
              <p className="text-cool-grey text-xs">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
