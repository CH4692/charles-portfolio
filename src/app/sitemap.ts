import type { MetadataRoute } from 'next';

import { getProjects } from '@/data/projects';
import { absoluteUrl, languageAlternates, SITE_URL } from '@/i18n/paths';
import { locales } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const caseSlugs = getProjects('en')
    .filter((p) => p.caseStudy || p.slug === 'navissedes')
    .map((p) => p.slug);

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push(
      {
        url: absoluteUrl(locale, '/'),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
        alternates: { languages: languageAlternates('/') },
      },
      {
        url: absoluteUrl(locale, '/cv'),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: { languages: languageAlternates('/cv') },
      },
      {
        url: absoluteUrl(locale, '/impressum'),
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
        alternates: { languages: languageAlternates('/impressum') },
      },
      {
        url: absoluteUrl(locale, '/datenschutz'),
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
        alternates: { languages: languageAlternates('/datenschutz') },
      },
    );

    for (const slug of caseSlugs) {
      const href = `/work/${slug}`;
      entries.push({
        url: absoluteUrl(locale, href),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: { languages: languageAlternates(href) },
      });
    }
  }

  // Explicit root host entry helps crawlers that still look for the apex URL.
  if (!entries.some((e) => e.url === SITE_URL)) {
    entries.unshift({
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: languageAlternates('/') },
    });
  }

  return entries;
}
