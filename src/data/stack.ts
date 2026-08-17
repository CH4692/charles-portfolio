import type { Locale } from '@/i18n/routing';

export const stackGroupsByLocale = {
  en: [
    {
      title: 'Core',
      skills: ['TypeScript', 'React', 'Next.js', 'Playwright', 'Node.js'],
    },
    {
      title: 'Platform',
      skills: ['Prisma', 'Postgres', 'Stripe', 'Neon', 'Cloudflare', 'GitHub Actions', 'AWS'],
    },
    {
      title: 'Also used',
      skills: ['Python', 'Selenium', 'k6', 'Vitest', 'Postman', 'Docker'],
    },
  ],
  de: [
    {
      title: 'Core',
      skills: ['TypeScript', 'React', 'Next.js', 'Playwright', 'Node.js'],
    },
    {
      title: 'Platform',
      skills: ['Prisma', 'Postgres', 'Stripe', 'Neon', 'Cloudflare', 'GitHub Actions', 'AWS'],
    },
    {
      title: 'Ebenfalls',
      skills: ['Python', 'Selenium', 'k6', 'Vitest', 'Postman', 'Docker'],
    },
  ],
} as const;

export function getStackGroups(locale: Locale) {
  return stackGroupsByLocale[locale];
}

/** @deprecated Use getStackGroups(locale) */
export const stackGroups = stackGroupsByLocale.en;
