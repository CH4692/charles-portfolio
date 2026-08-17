import { ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import BrowserMockup from '@/components/BrowserMockup';
import { getProject, getProjects } from '@/data/projects';
import { Link } from '@/i18n/navigation';
import { type Locale, locales } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string; slug: string }> };

function caseStudySlugs() {
  return getProjects('en')
    .filter((p) => p.caseStudy || p.slug === 'navissedes')
    .map((p) => p.slug);
}

export function generateStaticParams() {
  const slugs = caseStudySlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  const t = await getTranslations({ locale, namespace: 'CaseStudy' });
  const project = getProject(slug, locale);

  const languages = Object.fromEntries(
    locales.map((l) => [l, `https://www.charlesheller.dev/${l}/work/${slug}`]),
  ) as Record<string, string>;
  languages['x-default'] = `https://www.charlesheller.dev/en/work/${slug}`;

  if (!project) {
    return { title: t('metaFallback') };
  }

  return {
    title: `${project.title} ${t('metaLabel')}`,
    description: project.result,
    openGraph: {
      title: `${project.title} · Charles Heller`,
      description: project.result,
      images: [project.image],
    },
    alternates: {
      canonical: `https://www.charlesheller.dev/${locale}/work/${slug}`,
      languages,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale: loc, slug } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;

  const project = getProject(slug, locale);
  if (!project) notFound();

  const t = await getTranslations('CaseStudy');
  const tCommon = await getTranslations('Common');
  const gallery = project.gallery?.length ? project.gallery : [project.image];

  return (
    <article className="mx-auto max-w-4xl px-5 py-16 sm:px-9">
      <Link
        href="/#work"
        className="text-cool-grey hover:text-primary focus-ring rounded-sm text-sm transition"
      >
        {tCommon('backToWork')}
      </Link>

      <header className="mt-8">
        <p className="text-primary text-xs tracking-[0.2em] uppercase">{t('metaLabel')}</p>
        <h1 className="font-display mt-3 text-4xl font-semibold md:text-5xl">{project.title}</h1>
        <p className="text-cool-grey mt-4 max-w-3xl text-lg leading-8">{project.result}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background from-cta-grad-start to-cta-grad-end focus-ring inline-flex items-center gap-2 rounded-lg bg-gradient-to-br px-4 py-2 text-sm font-semibold"
            >
              <ExternalLink className="h-4 w-4" />
              {t('liveDemo')}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary/60 focus-ring inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              {t('github')}
            </a>
          )}
        </div>
      </header>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
        <BrowserMockup
          src={project.heroImage ?? project.image}
          alt={`${project.title} overview`}
          url={project.live}
          accent={project.accent}
          accentSecondary={project.accentSecondary}
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="rounded-2xl"
        />
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">{t('proofPoints')}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {project.metrics.map((metric) => (
            <li
              key={metric}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-200"
            >
              {metric}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-semibold">{t('problem')}</h2>
          <p className="text-cool-grey mt-3 text-sm leading-7">{project.problem}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">{t('approach')}</h2>
          <p className="text-cool-grey mt-3 text-sm leading-7">{project.approach}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">{t('challenge')}</h2>
          <p className="text-cool-grey mt-3 text-sm leading-7">{project.challenge}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">{t('tradeoff')}</h2>
          <p className="text-cool-grey mt-3 text-sm leading-7">{project.tradeoff}</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">{t('architecture')}</h2>
        <ul className="text-cool-grey mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
          {project.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">{t('testing')}</h2>
        <p className="text-cool-grey mt-3 text-sm leading-7">{project.testing}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">{t('owned')}</h2>
        <p className="text-cool-grey mt-3 text-sm leading-7">{project.owned}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">{t('differently')}</h2>
        <p className="text-cool-grey mt-3 text-sm leading-7">{project.differently}</p>
      </section>

      {gallery.length > 1 && (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">{t('walkthrough')}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {gallery.map((src) => (
              <div key={src} className="overflow-hidden rounded-xl border border-white/10">
                <BrowserMockup
                  src={src}
                  alt={`${project.title} screen`}
                  url={project.live}
                  accent={project.accent}
                  accentSecondary={project.accentSecondary}
                  sizes="(max-width: 768px) 100vw, 448px"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold">{t('stack')}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-14 flex flex-wrap gap-3 border-t border-white/10 pt-8">
        <Link
          href="/#contact"
          className="text-background from-cta-grad-start to-cta-grad-end focus-ring inline-flex rounded-lg bg-gradient-to-br px-5 py-2.5 text-sm font-semibold"
        >
          {t('discuss')}
        </Link>
        <Link
          href="/#work"
          className="focus-ring inline-flex rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium"
        >
          {t('moreWork')}
        </Link>
      </div>
    </article>
  );
}
