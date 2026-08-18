import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Keep default locale (EN) on unprefixed URLs so Google can keep ranking
  // https://charlesheller.dev/ — DE lives under /de/...
  localePrefix: 'as-needed',
});
