import { getPathname } from '@/i18n/navigation';
import { defaultLocale, type Locale } from '@/i18n/routing';

export const SITE_URL = 'https://www.charlesheller.dev';

/** Locale-aware internal path (e.g. `/cv` or `/de/cv`). */
export function localizedPath(locale: Locale, href: string = '/') {
  return getPathname({ locale, href: href as '/' });
}

/** Absolute canonical URL for a locale + path. */
export function absoluteUrl(locale: Locale, href: string = '/') {
  const path = localizedPath(locale, href);
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

/** hreflang map for a shared path across locales. */
export function languageAlternates(href: string = '/') {
  return {
    en: absoluteUrl('en', href),
    de: absoluteUrl('de', href),
    'x-default': absoluteUrl(defaultLocale, href),
  };
}
