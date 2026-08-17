import { ArrowUpRight, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';

import PrintButton from '@/components/PrintButton';
import {
  getCvAbout,
  getCvCapabilities,
  getCvClosing,
  getCvExperience,
  getCvInterests,
  getCvNav,
  getCvProfile,
  getCvProjects,
  getCvSkills,
  getCvWorkflow,
} from '@/data/cv';
import { Link } from '@/i18n/navigation';
import { type Locale, locales } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-[1.75rem]">
      {children}
    </h2>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const t = await getTranslations({ locale, namespace: 'Cv' });
  const languages = Object.fromEntries(
    locales.map((l) => [l, `https://www.charlesheller.dev/${l}/cv`]),
  ) as Record<string, string>;
  languages['x-default'] = 'https://www.charlesheller.dev/en/cv';

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `https://www.charlesheller.dev/${locale}/cv`,
      languages,
    },
  };
}

export default async function CvPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;

  const t = await getTranslations('Cv');
  const tCommon = await getTranslations('Common');

  const cvProfile = getCvProfile(locale);
  const cvAbout = getCvAbout(locale);
  const cvCapabilities = getCvCapabilities(locale);
  const cvExperience = getCvExperience(locale);
  const cvProjects = getCvProjects(locale);
  const cvSkills = getCvSkills(locale);
  const cvWorkflow = getCvWorkflow(locale);
  const cvInterests = getCvInterests(locale);
  const cvClosing = getCvClosing(locale);
  const cvNav = getCvNav(locale);

  const pdfHref = locale === 'de' ? '/charles-heller-cv-de.pdf' : '/charles-heller-cv.pdf';

  return (
    <div className="relative px-5 py-12 sm:px-9 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
        {/* Side nav */}
        <aside className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start print:hidden">
          <div className="mb-6 flex flex-wrap items-center gap-3 lg:flex-col lg:items-stretch">
            <Link
              href="/"
              className="text-cool-grey hover:text-primary focus-ring rounded-sm text-sm transition"
            >
              {tCommon('backToPortfolio')}
            </Link>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              <a
                href={pdfHref}
                download
                className="border-primary/50 hover:border-primary focus-ring inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-white/5"
              >
                <Download className="h-3.5 w-3.5" />
                {t('downloadPdf')}
              </a>
              <PrintButton />
            </div>
          </div>

          <nav aria-label={t('sectionsAria')} className="hidden lg:block">
            <p className="text-cool-grey mb-3 text-[11px] tracking-[0.2em] uppercase">
              {t('onThisPage')}
            </p>
            <ul className="space-y-1.5 border-l border-white/10 pl-3">
              {cvNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-cool-grey hover:text-primary focus-ring block rounded-sm py-1 text-sm transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="min-w-0">
          {/* Header */}
          <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(120%_90%_at_10%_0%,rgba(46,245,245,0.12),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-6 py-8 sm:px-9 sm:py-10">
            <p className="text-primary text-xs tracking-[0.22em] uppercase">{t('eyebrow')}</p>
            <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {cvProfile.name}
            </h1>
            <p className="text-cool-grey mt-3 max-w-2xl text-base leading-7 sm:text-lg">
              {cvProfile.title}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">{cvProfile.summary}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={`mailto:${cvProfile.email}`}
                className="text-cool-grey hover:text-primary focus-ring inline-flex items-center gap-1.5 rounded-sm transition"
              >
                <Mail className="h-3.5 w-3.5" />
                {cvProfile.email}
              </a>
              <a
                href={cvProfile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-grey hover:text-primary focus-ring inline-flex items-center gap-1.5 rounded-sm transition"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                charlesheller.dev
              </a>
              <a
                href={cvProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-grey hover:text-primary focus-ring inline-flex items-center gap-1.5 rounded-sm transition"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={cvProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-grey hover:text-primary focus-ring inline-flex items-center gap-1.5 rounded-sm transition"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <span className="text-cool-grey">{cvProfile.location}</span>
            </div>
          </header>

          <div className="mt-10 space-y-4 text-base leading-8 text-white/85">
            {cvProfile.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-cool-grey">
                {paragraph}
              </p>
            ))}
          </div>

          {/* About */}
          <section id="about" className="mt-14 scroll-mt-[calc(var(--header-h)+1rem)]">
            <SectionHeading>{t('about')}</SectionHeading>
            <p className="mt-4 text-lg leading-8 text-white/90">{cvAbout.lead}</p>
            <div className="mt-4 space-y-4">
              {cvAbout.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-cool-grey text-base leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section id="capabilities" className="mt-14 scroll-mt-[calc(var(--header-h)+1rem)]">
            <SectionHeading>{t('whatIDo')}</SectionHeading>
            <p className="text-cool-grey mt-3 max-w-2xl text-sm leading-7">
              {t('capabilitiesIntro')}
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {cvCapabilities.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6 ${
                    index === cvCapabilities.length - 1 && cvCapabilities.length % 2 === 1
                      ? 'md:col-span-2'
                      : ''
                  }`}
                >
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-cool-grey mt-3 text-sm leading-7">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mt-14 scroll-mt-[calc(var(--header-h)+1rem)]">
            <SectionHeading>{t('experience')}</SectionHeading>
            <div className="mt-8 space-y-10">
              {cvExperience.map((job) => (
                <article key={job.role + job.company} className="relative pl-5 sm:pl-6">
                  <div
                    aria-hidden
                    className="bg-primary absolute top-1.5 left-0 h-full w-px opacity-40"
                  />
                  <div
                    aria-hidden
                    className="bg-primary absolute top-2 left-[-3px] h-2 w-2 rounded-full shadow-[0_0_12px_rgba(46,245,245,0.55)]"
                  />
                  <p className="text-primary text-xs tracking-[0.18em] uppercase">{job.period}</p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-white">{job.role}</h3>
                  <p className="mt-1 text-sm text-white/80">
                    {job.company}
                    <span className="text-cool-grey"> · {job.context}</span>
                  </p>
                  <p className="text-cool-grey mt-4 text-sm leading-7">{job.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-cool-grey before:bg-primary/70 relative pl-4 text-sm leading-7 before:absolute before:top-[0.7em] before:left-0 before:h-1 before:w-1 before:rounded-full"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-14 scroll-mt-[calc(var(--header-h)+1rem)]">
            <SectionHeading>{t('selectedProjects')}</SectionHeading>
            <div className="mt-8 space-y-6">
              {cvProjects.map((project) => {
                const external = project.href.startsWith('http');

                return (
                  <article
                    key={project.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:bg-white/[0.04] sm:p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      {external ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary focus-ring inline-flex items-center gap-1 rounded-sm text-sm font-medium hover:underline"
                        >
                          {t('openExternal')}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={project.href}
                          className="text-primary focus-ring inline-flex items-center gap-1 rounded-sm text-sm font-medium hover:underline"
                        >
                          {t('caseStudy')}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                    <p className="text-cool-grey mt-3 text-sm leading-7">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/80"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-cool-grey mt-4 text-xs leading-6 tracking-wide">
                      {project.stack}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mt-14 scroll-mt-[calc(var(--header-h)+1rem)]">
            <SectionHeading>{t('technicalExpertise')}</SectionHeading>
            <div className="mt-8 space-y-6">
              {cvSkills.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-medium tracking-wide text-white">{group.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="border-primary/20 bg-primary/5 text-primary/90 rounded-full border px-3 py-1.5 text-xs"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* How I work */}
          <section id="approach" className="mt-14 scroll-mt-[calc(var(--header-h)+1rem)]">
            <SectionHeading>{t('howIWork')}</SectionHeading>
            <p className="text-cool-grey mt-4 max-w-2xl text-sm leading-7">{t('howIWorkIntro')}</p>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {cvWorkflow.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm leading-6"
                >
                  <span className="text-primary font-display shrink-0 text-base font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-cool-grey">{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-cool-grey mt-6 text-sm leading-7">{t('howIWorkOutro')}</p>
          </section>

          {/* Interests */}
          <section className="mt-14">
            <SectionHeading>{t('interestedIn')}</SectionHeading>
            <ul className="mt-6 flex flex-wrap gap-2">
              {cvInterests.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/12 px-3 py-1.5 text-xs text-white/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Closing CTA */}
          <section
            id="contact-cta"
            className="border-primary/25 mt-14 scroll-mt-[calc(var(--header-h)+1rem)] overflow-hidden rounded-3xl border bg-[radial-gradient(90%_120%_at_0%_0%,rgba(46,245,245,0.14),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-8 sm:px-8"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {cvClosing.title}
            </h2>
            <p className="text-cool-grey mt-4 max-w-2xl text-sm leading-7">{cvClosing.text}</p>
            <p className="text-primary mt-4 text-sm font-medium tracking-wide">
              {cvClosing.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="text-background from-cta-grad-start to-cta-grad-end focus-ring inline-flex rounded-lg bg-gradient-to-br px-5 py-2.5 text-sm font-semibold"
              >
                {t('getInTouch')}
              </Link>
              <a
                href={`mailto:${cvProfile.email}`}
                className="focus-ring inline-flex rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:bg-white/5"
              >
                {t('emailMe')}
              </a>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
