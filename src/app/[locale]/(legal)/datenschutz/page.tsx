import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Legal' });
  return {
    title: t('datenschutzTitle'),
    description: t('datenschutzDescription'),
  };
}

export default async function DatenschutzPage({ params }: Props) {
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

      <h1 className="font-display mt-8 text-4xl font-semibold">{t('datenschutzTitle')}</h1>
      <p className="text-cool-grey mt-2 text-sm">
        Informationen zur Verarbeitung personenbezogener Daten
      </p>

      <div className="text-cool-grey mt-8 space-y-6 text-sm leading-7">
        <section>
          <h2 className="font-display text-lg font-semibold text-white">1. Verantwortlicher</h2>
          <p className="mt-2">
            Charles Heller
            <br />
            E-Mail:{' '}
            <a href="mailto:charles@charlesheller.dev" className="text-primary hover:underline">
              charles@charlesheller.dev
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-white">2. Hosting</h2>
          <p className="mt-2">
            Diese Website wird über Vercel Inc. bereitgestellt. Beim Aufruf der Seite können
            technisch erforderliche Server-Logdaten (z. B. IP-Adresse, Zeitpunkt, User-Agent)
            verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an einer sicheren und stabilen Bereitstellung der Website).
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-white">3. Kontaktaufnahme</h2>
          <p className="mt-2">
            Wenn Sie mich per E-Mail kontaktieren, verarbeite ich die von Ihnen mitgeteilten Daten
            zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f
            DSGVO.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-white">
            4. Keine Tracking-Cookies
          </h2>
          <p className="mt-2">
            Auf dieser Portfolio-Website werden derzeit keine Analyse- oder Marketing-Cookies
            eingesetzt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-white">5. Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Außerdem besteht ein
            Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
          </p>
        </section>
      </div>
    </div>
  );
}
