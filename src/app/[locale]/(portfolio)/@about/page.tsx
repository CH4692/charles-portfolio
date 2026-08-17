import { getTranslations, setRequestLocale } from 'next-intl/server';

import Title from '@/components/Title';
import { getBio, getExperience } from '@/data/experience';
import type { Locale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export default async function About({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations('Experience');
  const bio = getBio(locale);
  const experience = getExperience(locale);

  return (
    <section
      id="experience"
      className="from-sec-gra-start to-background flex min-h-[calc(100dvh-var(--header-h))] w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Title>{t('eyebrow')}</Title>
        <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold md:text-4xl">
          {t('headline')}
        </h2>
        <p className="text-cool-grey mt-4 max-w-3xl leading-8">{bio}</p>

        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <article
              key={item.role + item.company}
              className="grid gap-4 border-l border-white/10 pl-6 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="font-display text-lg font-semibold">{item.role}</p>
                <p className="text-primary mt-1 text-sm">{item.company}</p>
                <p className="text-cool-grey mt-2 text-xs tracking-wide uppercase">{item.period}</p>
              </div>
              <div>
                <p className="text-cool-grey leading-7">{item.summary}</p>
                <ul className="text-cool-grey mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
