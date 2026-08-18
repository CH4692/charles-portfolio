import type { Locale } from '@/i18n/routing';

export const experienceByLocale = {
  en: [
    {
      role: 'Test Manager · Test Data Manager · Test Environment Manager',
      company: 'Swiss Life',
      period: 'Multi-year · Enterprise CRM & digital platforms',
      summary:
        'Help ensure complex CRM and digital platforms can be delivered with confidence — spanning test strategy, automation, test data, and environment readiness across agile teams.',
      highlights: [
        'Lead enterprise test management, quality engineering, and risk-based testing for multi-team delivery.',
        'Drive Playwright automation, API testing, and release readiness with engineering and product partners.',
        'Own test data and environment management — refresh concepts, governance, coordination, and AWS-related delivery support.',
      ],
    },
    {
      role: 'Independent Software Engineer',
      company: 'Freelance / Projects',
      period: 'Ongoing · Web products & SaaS',
      summary:
        'Build modern web applications from idea to production while applying the same quality systems used in enterprise environments.',
      highlights: [
        'Ship fullstack products such as NavisSedes (ticketing) and Seatly (reservations) with Next.js, Prisma, and cloud data layers.',
        'Design Playwright / Vitest suites and CI-ready automation as part of product delivery.',
        'Bridge QA depth and engineering ownership — from architecture decisions to shippable releases.',
      ],
    },
  ],
  de: [
    {
      role: 'Test Manager · Test Data Manager · Test Environment Manager',
      company: 'Swiss Life',
      period: 'Mehrjährig · Enterprise-CRM & digitale Plattformen',
      summary:
        'Sorge dafür, dass komplexe CRM- und Digitalplattformen verlässlich geliefert werden können — von Teststrategie und Automation bis Test Data und Environment Readiness über agile Teams hinweg.',
      highlights: [
        'Enterprise-Testmanagement, Quality Engineering und risikoorientiertes Testing für Multi-Team-Delivery.',
        'Playwright-Automation, API-Testing und Release-Readiness gemeinsam mit Engineering und Product.',
        'Verantwortung für Test Data und Environment Management — Refresh-Konzepte, Governance, Koordination und AWS-nahe Delivery-Unterstützung.',
      ],
    },
    {
      role: 'Independent Software Engineer',
      company: 'Freelance / Projekte',
      period: 'Laufend · Web-Produkte & SaaS',
      summary:
        'Baue moderne Web-Anwendungen von der Idee bis Production — mit denselben Qualitäts-Systemen wie in Enterprise-Umgebungen.',
      highlights: [
        'Fullstack-Produkte wie NavisSedes (Ticketing) und Seatly (Reservierungen) mit Next.js, Prisma und Cloud-Datenlayern.',
        'Playwright-/Vitest-Suites und CI-fähige Automation als Teil der Produkt-Delivery.',
        'Brücke zwischen QA-Tiefe und Engineering-Ownership — von Architekturentscheidungen bis zum shippable Release.',
      ],
    },
  ],
} as const;

export const bioByLocale = {
  en: 'Charles Heller builds reliable software by combining enterprise quality engineering with modern full-stack development. Quality is designed into the product from day one — not verified at the end.',
  de: 'Charles Heller baut zuverlässige Software, indem er Enterprise Quality Engineering mit modernem Fullstack-Development verbindet. Qualität wird von Tag eins ins Produkt designed — nicht am Ende geprüft.',
} as const;

export const availabilityByLocale = {
  en: 'Open for freelance, contract, and full-time roles · Germany / remote-friendly.',
  de: 'Offen für Freelance, Contract und Festanstellung · Deutschland / remote-freundlich.',
} as const;

export function getExperience(locale: Locale) {
  return experienceByLocale[locale];
}

export function getBio(locale: Locale) {
  return bioByLocale[locale];
}

export function getAvailability(locale: Locale) {
  return availabilityByLocale[locale];
}

/** @deprecated Use locale helpers */
export const experience = experienceByLocale.en;
export const bio = bioByLocale.en;
export const availability = availabilityByLocale.en;
