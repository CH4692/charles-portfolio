import { Manrope, Syne } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';

import JsonLd from '@/components/JsonLd';
import { absoluteUrl, languageAlternates } from '@/i18n/paths';
import { type Locale, routing } from '@/i18n/routing';

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

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const pathLocale = locale as Locale;
  const pageUrl = absoluteUrl(pathLocale, '/');

  return {
    metadataBase: new URL('https://www.charlesheller.dev'),
    title: {
      default: t('titleDefault'),
      template: t('titleTemplate'),
    },
    description: t('description'),
    keywords: t('keywords')
      .split(',')
      .map((k) => k.trim()),
    authors: [{ name: 'Charles Heller', url: 'https://www.charlesheller.dev' }],
    creator: 'Charles Heller',
    publisher: 'Charles Heller',
    category: 'technology',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website' as const,
      locale: pathLocale === 'de' ? 'de_DE' : 'en_US',
      url: pageUrl,
      siteName: 'Charles Heller',
      title: t('titleDefault'),
      description: t('ogDescription'),
      images: [
        {
          url: '/portfolio.png',
          width: 2880,
          height: 1566,
          alt: 'Charles Heller — Software Engineer Portfolio',
        },
        {
          url: '/me.png',
          width: 720,
          height: 921,
          alt: 'Portrait of Charles Heller',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: t('titleDefault'),
      description: t('ogDescription'),
      images: ['/portfolio.png'],
    },
    alternates: {
      canonical: pageUrl,
      languages: languageAlternates('/'),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`scroll-smooth ${manrope.variable} ${syne.variable}`}>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          <JsonLd locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
