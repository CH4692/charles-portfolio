import type { Locale } from '@/i18n/routing';

export const credibilityByLocale = {
  en: [
    { label: 'Swiss Life', detail: 'Enterprise QA / Test Management' },
    { label: 'St. Godehard', detail: 'NavisSedes ticketing platform' },
    { label: 'Elikuren', detail: 'Choir web presence' },
  ],
  de: [
    { label: 'Swiss Life', detail: 'Enterprise QA / Testmanagement' },
    { label: 'St. Godehard', detail: 'NavisSedes Ticketing-Plattform' },
    { label: 'Elikuren', detail: 'Chor-Webauftritt' },
  ],
} as const;

export const referencesByLocale = {
  en: [
    {
      quote:
        'References from enterprise delivery and client projects are available on request via LinkedIn or email.',
      attribution: 'Professional references',
    },
  ],
  de: [
    {
      quote:
        'Referenzen aus Enterprise-Delivery und Kundenprojekten stelle ich auf Anfrage über LinkedIn oder E-Mail bereit.',
      attribution: 'Professionelle Referenzen',
    },
  ],
} as const;

export function getCredibility(locale: Locale) {
  return credibilityByLocale[locale];
}

export function getReferences(locale: Locale) {
  return referencesByLocale[locale];
}

/** @deprecated Use locale helpers */
export const credibility = credibilityByLocale.en;
export const references = referencesByLocale.en;
