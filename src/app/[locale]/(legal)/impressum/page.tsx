import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Legal' });
  return {
    title: t('impressumTitle'),
    description: t('impressumDescription'),
  };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations('Legal');

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-9">
      <Link
        href="/"
        className="text-cool-grey hover:text-primary focus-ring rounded-sm text-sm transition"
      >
        {t('backHome')}
      </Link>

      {locale === 'en' && (
        <p className="mt-8 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/85">
          {t('germanBindingNote')}
        </p>
      )}

      <h1 className="font-display mt-8 text-4xl font-semibold">{t('impressumTitle')}</h1>
      <p className="text-cool-grey mt-2 text-sm">Angaben gemäß § 5 TMG</p>

      <div className="text-cool-grey mt-8 space-y-6 text-sm leading-7">
        <section>
          <h2 className="font-display text-lg font-semibold text-white">Anbieter</h2>
          <p className="mt-2">
            Charles Heller
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-white">Kontakt</h2>
          <p className="mt-2">
            E-Mail:{' '}
            <a href="mailto:charles@charlesheller.dev" className="text-primary hover:underline">
              charles@charlesheller.dev
            </a>
            <br />
            Website:{' '}
            <a href="https://www.charlesheller.dev" className="text-primary hover:underline">
              www.charlesheller.dev
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-white">
            Verantwortlich für den Inhalt
          </h2>
          <p className="mt-2">Charles Heller</p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-white">Haftungshinweis</h2>
          <p className="mt-2">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </section>
      </div>
    </div>
  );
}
