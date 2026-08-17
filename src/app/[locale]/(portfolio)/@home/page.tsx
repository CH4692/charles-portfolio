import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import CtaButton from '@/components/CtaButton';
import Icons from '@/components/Icons';
import { getAvailability } from '@/data/experience';
import { localizedPath } from '@/i18n/paths';
import type { Locale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations('Home');
  const availability = getAvailability(locale);

  return (
    <section
      id="home"
      className="hero-enter flex min-h-[calc(100dvh-var(--header-h))] scroll-mt-[var(--header-h)] flex-col justify-center gap-10 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
    >
      <div className="mt-8 w-full max-w-xl min-w-0 text-left sm:mt-12">
        <p className="text-cool-grey mb-3 font-sans text-sm tracking-[0.22em] uppercase">
          {t('eyebrow')}
        </p>

        <h1 className="font-display from-cta-grad-start to-cta-grad-end bg-gradient-to-r bg-clip-text text-4xl break-words text-transparent sm:text-5xl lg:text-6xl">
          Charles Heller
        </h1>

        <h2 className="font-display mt-4 text-2xl leading-snug sm:text-3xl lg:text-[2.15rem]">
          {t('headline')}
        </h2>

        <p className="text-cool-grey mt-5 mb-4 max-w-xl leading-7">{t('body')}</p>

        <p className="text-primary/90 mb-6 text-sm font-medium tracking-wide">{availability}</p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaButton
            addClass="w-full sm:w-auto"
            name={t('viewWork')}
            targetId="work"
            variant="primary"
          />
          {/* Hard nav: soft transitions out of the parallel-route portfolio layout can leave the URL on /{locale}. */}
          <a
            href={localizedPath(locale, '/cv')}
            className="border-primary/60 hover:border-primary focus-ring inline-flex w-full items-center justify-center rounded-lg border px-5 py-2.5 font-medium text-white transition duration-300 hover:scale-[1.03] hover:bg-white/5 sm:w-auto"
          >
            {t('viewCv')}
          </a>
        </div>

        <p className="text-cool-grey mt-7 text-sm tracking-wide">{t('trustLine')}</p>

        <Icons />
      </div>

      <div className="hero-portrait w-full max-w-md shrink-0 lg:max-w-lg">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_28px_64px_-20px_rgba(0,0,0,0.55)]">
          <Image
            src="/me.png"
            alt={t('portraitAlt')}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 512px"
            className="object-cover object-top"
          />
          <div
            aria-hidden
            className="from-background/50 pointer-events-none absolute inset-0 bg-linear-to-t via-transparent to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
