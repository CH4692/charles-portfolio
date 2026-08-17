import { FileText, Linkedin, Mail } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import ContactForm from '@/components/ContactForm';
import Title from '@/components/Title';
import { getAvailability } from '@/data/experience';
import { getReferences } from '@/data/proof';
import type { Locale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export default async function Contact({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations('Contact');
  const availability = getAvailability(locale);
  const references = getReferences(locale);
  const pdfHref = locale === 'de' ? '/charles-heller-cv-de.pdf' : '/charles-heller-cv.pdf';

  return (
    <section
      id="contact"
      className="from-sec-gra-start to-background flex min-h-[calc(100dvh-var(--header-h))] w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-3xl px-4 text-center">
        <Title>{t('eyebrow')}</Title>

        <h2 className="font-display mt-6 text-3xl font-semibold md:text-4xl">{t('headline')}</h2>

        <p className="text-cool-grey mt-6 leading-7">
          {availability} {t('body')}
        </p>

        <ContactForm />

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:charles@charlesheller.dev?subject=Project%20inquiry%20%2F%20role"
            className="border-primary/60 hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
          >
            <Mail className="h-4 w-4" />
            charles@charlesheller.dev
          </a>
          <a
            href="https://www.linkedin.com/in/charles-heller-068b53233/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={`/${locale}/cv`}
            className="hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
          >
            <FileText className="h-4 w-4" />
            {t('cv')}
          </a>
          <a
            href={pdfHref}
            download
            className="hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
          >
            <FileText className="h-4 w-4" />
            {t('pdf')}
          </a>
        </div>

        <blockquote className="text-cool-grey mx-auto mt-10 max-w-xl text-sm leading-7 italic">
          “{references[0].quote}”
          <footer className="text-cool-grey/80 mt-2 text-xs tracking-wide uppercase not-italic">
            {references[0].attribution}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
