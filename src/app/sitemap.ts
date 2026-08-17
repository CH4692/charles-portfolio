import type { MetadataRoute } from 'next';

import { getProjects } from '@/data/projects';
import { locales } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.charlesheller.dev';
  const caseSlugs = getProjects('en')
    .filter((p) => p.caseStudy || p.slug === 'navissedes')
    .map((p) => p.slug);

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const prefix = `${base}/${locale}`;
    entries.push(
      {
        url: prefix,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
        alternates: {
          languages: {
            en: `${base}/en`,
            de: `${base}/de`,
          },
        },
      },
      {
        url: `${prefix}/cv`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            en: `${base}/en/cv`,
            de: `${base}/de/cv`,
          },
        },
      },
      {
        url: `${prefix}/impressum`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${prefix}/datenschutz`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
    );

    for (const slug of caseSlugs) {
      entries.push({
        url: `${prefix}/work/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: {
          languages: {
            en: `${base}/en/work/${slug}`,
            de: `${base}/de/work/${slug}`,
          },
        },
      });
    }
  }

  return entries;
}
