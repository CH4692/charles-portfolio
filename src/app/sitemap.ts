import type { MetadataRoute } from 'next';

import { getProjects } from '@/data/projects';
import { absoluteUrl, languageAlternates } from '@/i18n/paths';
import { locales } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const caseSlugs = getProjects('en')
    .filter((p) => p.caseStudy || p.slug === 'navissedes')
    .map((p) => p.slug);

  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  function push(entry: MetadataRoute.Sitemap[number]) {
    if (seen.has(entry.url)) return;
    seen.add(entry.url);
    entries.push(entry);
  }

  for (const locale of locales) {
    push({
      url: absoluteUrl(locale, '/'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: languageAlternates('/') },
    });
    push({
      url: absoluteUrl(locale, '/cv'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: languageAlternates('/cv') },
    });
    push({
      url: absoluteUrl(locale, '/impressum'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: { languages: languageAlternates('/impressum') },
    });
    push({
      url: absoluteUrl(locale, '/datenschutz'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: { languages: languageAlternates('/datenschutz') },
    });

    for (const slug of caseSlugs) {
      const href = `/work/${slug}`;
      push({
        url: absoluteUrl(locale, href),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: { languages: languageAlternates(href) },
      });
    }
  }

  return entries;
}
