import { getTranslations, setRequestLocale } from 'next-intl/server';

import Title from '@/components/Title';
import { getStackGroups } from '@/data/stack';
import type { Locale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export default async function Skills({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations('Stack');
  const stackGroups = getStackGroups(locale);

  return (
    <section
      id="stack"
      className="from-sec-gra-start to-background flex min-h-[calc(100dvh-var(--header-h))] w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Title>{t('eyebrow')}</Title>
        <h2 className="font-display mt-6 max-w-2xl text-3xl font-semibold md:text-4xl">
          {t('headline')}
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-xs ${
                      group.title === 'Also used' || group.title === 'Ebenfalls'
                        ? 'border-white/5 text-gray-500'
                        : 'border-white/10 text-gray-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
