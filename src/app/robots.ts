import type { MetadataRoute } from 'next';

import { isVercelPreview, SITE_URL } from '@/i18n/paths';

export default function robots(): MetadataRoute.Robots {
  if (isVercelPreview()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cv/print', '/en/cv/print', '/de/cv/print', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
