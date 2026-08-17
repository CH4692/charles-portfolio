'use client';

import { useLocale, useTranslations } from 'next-intl';

import type { Locale } from '@/i18n/routing';

export default function PrintButton() {
  const t = useTranslations('Cv');
  const locale = useLocale() as Locale;
  const href = locale === 'de' ? '/charles-heller-cv-de.pdf' : '/charles-heller-cv.pdf';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-primary/50 hover:border-primary focus-ring inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-white/5"
    >
      {t('printPdf')}
    </a>
  );
}
