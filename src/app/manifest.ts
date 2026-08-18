import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Charles Heller — Software Engineer',
    short_name: 'Charles Heller',
    description:
      'Portfolio of Charles Heller — Software Engineer & QA Automation. Playwright, Next.js, TypeScript, and AWS.',
    start_url: '/',
    display: 'browser',
    background_color: '#0b1220',
    theme_color: '#0b1220',
    lang: 'en',
    icons: [
      {
        src: '/favicons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
