import type { MetadataRoute } from 'next';

import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.charlesheller.dev';

  const caseStudies = projects
    .filter((p) => p.caseStudy || p.slug === 'navissedes')
    .map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/cv`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...caseStudies,
    {
      url: `${base}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
