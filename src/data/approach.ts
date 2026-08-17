import type { Locale } from '@/i18n/routing';

export const principlesByLocale = {
  en: [
    {
      title: 'Ship with tests',
      description:
        'Critical user flows are designed with automation in mind — so quality scales with the product, not against it.',
    },
    {
      title: 'Build for maintainability',
      description:
        'Clear domains, strong typing, and CI-friendly structure keep codebases shippable months after the first release.',
    },
    {
      title: 'Quality as product sense',
      description:
        'Edge cases, testdata, UX friction, and failure modes are product decisions — not an afterthought before release.',
    },
  ],
  de: [
    {
      title: 'Mit Tests shippen',
      description:
        'Kritische User Flows werden von Anfang an mit Automation gedacht — damit Qualität mit dem Produkt skaliert, nicht dagegen.',
    },
    {
      title: 'Für Wartbarkeit bauen',
      description:
        'Klare Domänen, starkes Typing und CI-freundliche Struktur halten Codebasen auch Monate nach dem ersten Release shippable.',
    },
    {
      title: 'Qualität als Product Sense',
      description:
        'Edge Cases, Testdaten, UX-Reibung und Failure Modes sind Produktentscheidungen — kein Nachgedanke vor dem Release.',
    },
  ],
} as const;

export function getPrinciples(locale: Locale) {
  return principlesByLocale[locale];
}

/** @deprecated Use getPrinciples(locale) */
export const principles = principlesByLocale.en;
