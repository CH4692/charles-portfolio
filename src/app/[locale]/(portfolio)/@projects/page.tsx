import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import BrowserMockup from '@/components/BrowserMockup';
import Title from '@/components/Title';
import { getProjects } from '@/data/projects';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export default async function Projects({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations('Work');
  const tSection = await getTranslations('WorkSection');
  const featured = getProjects(locale).filter((p) => p.featured);

  return (
    <section
      id="work"
      className="from-sec-gra-start to-background flex w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Title>{tSection('eyebrow')}</Title>
        <p className="text-cool-grey mt-4 max-w-2xl text-sm leading-7 md:text-base">
          {tSection('intro')}
        </p>

        <div className="mt-12 flex flex-col gap-16">
          {featured.map((project, index) => {
            const bullets = [
              { label: t('result'), text: project.result },
              { label: t('problem'), text: project.problem },
              { label: t('approach'), text: project.approach },
              { label: t('testing'), text: project.testing },
            ];

            return (
              <article
                key={project.title}
                className="group reveal-on-scroll overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
              >
                <div
                  className={`grid items-stretch lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
                >
                  <BrowserMockup
                    src={project.image}
                    alt={`${project.title} — project by Charles Heller`}
                    url={project.live}
                    accent={project.accent}
                    accentSecondary={project.accentSecondary}
                    priority={index === 0}
                    fillHeight
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="min-h-[300px] lg:min-h-[420px]"
                  />

                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                    <h3 className="font-display text-2xl font-semibold md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-cool-grey mt-3 text-sm leading-7 md:text-base">
                      {project.outcome}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {bullets.map((bullet) => (
                        <li key={bullet.label} className="text-sm leading-6">
                          <span className="text-primary font-medium">{bullet.label}</span>
                          <span className="text-cool-grey"> — {bullet.text}</span>
                        </li>
                      ))}
                    </ul>

                    {project.metrics?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.metrics.slice(0, 3).map((metric) => (
                          <span
                            key={metric}
                            className="border-primary/20 bg-primary/5 text-primary/90 rounded-full border px-3 py-1 text-xs"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      {(project.caseStudy || project.slug === 'navissedes') && (
                        <Link
                          href={`/work/${project.slug}`}
                          className="text-primary focus-ring inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                        >
                          {t('readCaseStudy')}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} on GitHub`}
                          className="focus-ring rounded-md text-white/80 transition hover:text-white"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="focus-ring rounded-md text-white/80 transition hover:text-white"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
