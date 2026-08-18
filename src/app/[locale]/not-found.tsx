import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <main className="flex min-h-[calc(100dvh-var(--header-h))] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-cool-grey text-sm tracking-[0.2em] uppercase">404</p>
      <h1 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">{t('title')}</h1>
      <p className="text-cool-grey mt-4 max-w-md leading-7">{t('body')}</p>
      <Link
        href="/"
        className="border-primary/60 hover:border-primary focus-ring mt-8 inline-flex rounded-lg border px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
      >
        {t('back')}
      </Link>
    </main>
  );
}
