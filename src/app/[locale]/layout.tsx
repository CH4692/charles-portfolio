import { Manrope, Syne } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';

import JsonLd from '@/components/JsonLd';
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
  const languages = {
    en: 'https://www.charlesheller.dev/en',
    de: 'https://www.charlesheller.dev/de',
    'x-default': 'https://www.charlesheller.dev/en',
  };

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
    openGraph: {
      type: 'website' as const,
      locale: pathLocale === 'de' ? 'de_DE' : 'en_US',
      url: `https://www.charlesheller.dev/${pathLocale}`,
      siteName: 'Charles Heller',
      title: t('titleDefault'),
      description: t('ogDescription'),
      images: [
        {
          url: '/navissedes.jpg',
          width: 1600,
          height: 1000,
          alt: 'NavisSedes — Charles Heller',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: t('titleDefault'),
      description: t('ogDescription'),
      images: ['/navissedes.jpg'],
    },
    alternates: {
      canonical: `https://www.charlesheller.dev/${pathLocale}`,
      languages,
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
          <JsonLd />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
