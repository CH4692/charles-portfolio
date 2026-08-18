import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import {
  getCvProfile,
  getCvSkills,
  getPrintApproach,
  getPrintExperience,
  getPrintProjects,
  getPrintSummary,
} from '@/data/cv';
import type { Locale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'CvPrint' });
  return {
    title: t('eyebrow'),
    robots: { index: false, follow: false },
  };
}

export default async function CvPrintPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;

  const t = await getTranslations('CvPrint');
  const cvProfile = getCvProfile(locale);
  const cvSkills = getCvSkills(locale);
  const printSummary = getPrintSummary(locale);
  const printApproach = getPrintApproach(locale);
  const printExperience = getPrintExperience(locale);
  const printProjects = getPrintProjects(locale);

  return (
    <div className="cv-print-doc">
      <header className="cv-print-hero">
        <div className="cv-print-hero-inner">
          <Image
            src="/brand/Logo_standard2.png"
            alt="Charles Heller logo"
            width={56}
            height={56}
            className="cv-print-logo"
            priority
          />
          <div className="cv-print-hero-copy">
            <p className="cv-print-eyebrow">{t('eyebrow')}</p>
            <h1 className="cv-print-name">{cvProfile.name}</h1>
            <p className="cv-print-title">{cvProfile.title}</p>
            <p className="cv-print-contact">
              <a href={`mailto:${cvProfile.email}`}>{cvProfile.email}</a>
              <span aria-hidden>·</span>
              <a href="https://charlesheller.dev">charlesheller.dev</a>
              <span aria-hidden>·</span>
              <a href="https://github.com/CH4692">github.com/CH4692</a>
              <span aria-hidden>·</span>
              <a href="https://www.linkedin.com/in/charles-heller-068b53233">
                linkedin.com/in/charles-heller
              </a>
            </p>
            <p className="cv-print-meta">{cvProfile.location}</p>
          </div>
        </div>
        <div className="cv-print-hero-bar" aria-hidden />
      </header>

      <div className="cv-print-body-wrap">
        <section className="cv-print-section">
          <h2 className="cv-print-h2">{t('summary')}</h2>
          <p className="cv-print-body">{printSummary}</p>
        </section>

        <section className="cv-print-section">
          <h2 className="cv-print-h2">{t('skills')}</h2>
          <ul className="cv-print-skills">
            {cvSkills.map((group) => (
              <li key={group.title}>
                <span className="cv-print-skill-label">{group.title}</span>
                <span className="cv-print-body">{group.items.join(', ')}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-print-section">
          <h2 className="cv-print-h2">{t('experience')}</h2>
          <div className="cv-print-jobs">
            {printExperience.map((job) => (
              <article key={job.role + job.company} className="cv-print-job">
                <div className="cv-print-job-head">
                  <h3 className="cv-print-h3">
                    {job.role}
                    <span className="cv-print-muted"> · {job.company}</span>
                  </h3>
                  <p className="cv-print-date">{job.period}</p>
                </div>
                <p className="cv-print-context">{job.context}</p>
                <ul className="cv-print-bullets">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-print-section">
          <h2 className="cv-print-h2">{t('projects')}</h2>
          <div className="cv-print-projects">
            {printProjects.map((project) => (
              <article key={project.title} className="cv-print-project">
                <h3 className="cv-print-h3">{project.title}</h3>
                <p className="cv-print-body">{project.description}</p>
                <p className="cv-print-stack">{project.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-print-section cv-print-approach">
          <h2 className="cv-print-h2">{t('approach')}</h2>
          <p className="cv-print-body">{printApproach}</p>
        </section>
      </div>
    </div>
  );
}
