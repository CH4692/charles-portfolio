import './globals.css';

import type { Metadata } from 'next';
import { Manrope, Syne } from 'next/font/google';

import JsonLd from '@/components/JsonLd';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.charlesheller.dev'),
  title: {
    default: 'Charles Heller · Quality-Driven Software Engineer',
    template: '%s · Charles Heller',
  },
  description:
    'Quality-driven software engineer shipping modern web apps with testing, architecture, and automation from day one. Enterprise QA experience + fullstack delivery.',
  keywords: [
    'Software Engineer',
    'Quality Engineering',
    'Playwright',
    'Next.js',
    'TypeScript',
    'Test Automation',
    'Charles Heller',
  ],
  authors: [{ name: 'Charles Heller', url: 'https://www.charlesheller.dev' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.charlesheller.dev',
    siteName: 'Charles Heller',
    title: 'Charles Heller · Quality-Driven Software Engineer',
    description:
      'Enterprise QA depth meets modern fullstack delivery. Case studies in ticketing, reservations, and test automation.',
    images: [
      {
        url: '/navissedes.jpg',
        width: 1600,
        height: 1000,
        alt: 'NavisSedes — featured project by Charles Heller',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charles Heller · Quality-Driven Software Engineer',
    description:
      'Enterprise QA depth meets modern fullstack delivery. Case studies in ticketing, reservations, and test automation.',
    images: ['/navissedes.jpg'],
  },
  alternates: {
    canonical: 'https://www.charlesheller.dev',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${syne.variable}`}>
      <body className="font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
