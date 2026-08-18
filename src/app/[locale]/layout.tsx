import type { Metadata } from 'next';
import { Manrope, Syne } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';

import JsonLd from '@/components/JsonLd';
import { absoluteUrl, indexableRobots, languageAlternates, SITE_URL } from '@/i18n/paths';
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const pathLocale = locale as Locale;
  const pageUrl = absoluteUrl(pathLocale, '/');
  const verificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: 'Charles Heller',
    title: {
      default: t('titleDefault'),
      template: t('titleTemplate'),
    },
    description: t('description'),
    keywords: t('keywords')
      .split(',')
      .map((k) => k.trim()),
    authors: [{ name: 'Charles Heller', url: SITE_URL }],
    creator: 'Charles Heller',
    publisher: 'Charles Heller',
    category: 'technology',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: indexableRobots(),
    ...(verificationCode ? { verification: { google: verificationCode } } : {}),
    openGraph: {
      type: 'website',
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
          alt: 'Charles Heller',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
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
