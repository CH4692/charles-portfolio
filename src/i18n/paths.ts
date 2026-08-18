import { getPathname } from '@/i18n/navigation';
import { defaultLocale, type Locale } from '@/i18n/routing';

/** Canonical production host (apex). Keep in sync with Vercel primary domain. */
export const SITE_URL = 'https://charlesheller.dev';
export const SITE_HOST = 'charlesheller.dev';

/** True on Vercel Preview deployments — must stay noindex. */
export function isVercelPreview() {
  return process.env.VERCEL_ENV === 'preview';
}

export function indexableRobots() {
  if (isVercelPreview()) {
    return { index: false, follow: false } as const;
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}

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
  const en = absoluteUrl('en', href);
  const de = absoluteUrl('de', href);
  const xDefault = absoluteUrl(defaultLocale, href);

  return {
    en,
    de,
    'de-DE': de,
    'x-default': xDefault,
  };
}
