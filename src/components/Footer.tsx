'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { localizedPath } from '@/i18n/paths';
import type { Locale } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();
  const pdfHref = locale === 'de' ? '/charles-heller-cv-de.pdf' : '/charles-heller-cv.pdf';

  return (
    <footer className="border-border border-t px-5 py-10 sm:px-9">
      <div className="text-cool-grey mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} Charles Heller · {t('tagline')}
        </p>
        <nav aria-label={t('legalAria')} className="flex flex-wrap gap-4">
          <a
            href={localizedPath(locale, '/cv')}
            className="focus-ring hover:text-primary rounded-sm transition"
          >
            {t('cv')}
          </a>
          <a
            href={pdfHref}
            download
            className="focus-ring hover:text-primary rounded-sm transition"
          >
            {t('pdf')}
          </a>
          <Link
            href="/work/navissedes"
            className="focus-ring hover:text-primary rounded-sm transition"
          >
            {t('caseStudy')}
          </Link>
          <Link href="/impressum" className="focus-ring hover:text-primary rounded-sm transition">
            {t('impressum')}
          </Link>
          <Link href="/datenschutz" className="focus-ring hover:text-primary rounded-sm transition">
            {t('datenschutz')}
          </Link>
          <a
            href="mailto:charles@charlesheller.dev"
            className="focus-ring hover:text-primary rounded-sm transition"
          >
            {t('contact')}
          </a>
        </nav>
      </div>
    </footer>
  );
}
