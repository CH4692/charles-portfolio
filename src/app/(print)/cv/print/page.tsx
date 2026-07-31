import type { Metadata } from 'next';
import Image from 'next/image';

import { cvExperience, cvProfile, cvProjects, cvSkills } from '@/data/cv';

export const metadata: Metadata = {
  title: 'CV Print',
  robots: { index: false, follow: false },
};

/** Condensed copy for a single A4 page — web CV keeps the longer narrative. */
const printSummary =
  'I build reliable software by combining enterprise quality engineering with modern full-stack delivery — automation, test data, environments, and maintainability designed in from day one.';

const printExperience = [
  {
    ...cvExperience[0],
    period: 'Multi-year',
    summary: '',
    highlights: [
      'Lead enterprise test management, quality engineering, and risk-based test strategy across CRM and digital platforms.',
      'Drive Playwright automation, API testing, and integration testing as part of release readiness.',
      'Own test data management and coordinate test environments across multiple Scrum teams.',
      'Support AWS cloud transformation with product, engineering, and architecture stakeholders.',
    ],
  },
  {
    ...cvExperience[1],
    summary: '',
    highlights: [
      'Own end-to-end delivery: architecture, frontend/backend, auth, databases, payments, and deployment.',
      'Ship production products such as NavisSedes (ticketing) and Seatly (reservations) with Next.js and Prisma.',
      'Build automated testing and CI/CD into delivery from day one.',
    ],
  },
];

const printProjects = cvProjects.map((project) => ({
  title: project.title,
  stack: project.stack,
  description:
    project.title === 'NavisSedes'
      ? 'Event ticketing for churches and cultural orgs — seating, Stripe, QR tickets, admin, and check-in.'
      : project.title === 'Seatly'
        ? 'Restaurant reservations with auth, search, booking persistence, and automated testing.'
        : project.title === 'Playwright Automation Suite'
          ? 'Enterprise-inspired Playwright framework — POM, reporting, parallel runs, CI-ready.'
          : 'Choir website with secure member platform, media library, and administration.',
}));

export default function CvPrintPage() {
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
            <p className="cv-print-eyebrow">Curriculum Vitae</p>
            <h1 className="cv-print-name">{cvProfile.name}</h1>
            <p className="cv-print-title">{cvProfile.title}</p>
            <p className="cv-print-contact">
              <a href={`mailto:${cvProfile.email}`}>{cvProfile.email}</a>
              <span aria-hidden>·</span>
              <a href="https://www.charlesheller.dev">www.charlesheller.dev</a>
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
          <h2 className="cv-print-h2">Summary</h2>
          <p className="cv-print-body">{printSummary}</p>
        </section>

        <section className="cv-print-section">
          <h2 className="cv-print-h2">Skills</h2>
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
          <h2 className="cv-print-h2">Experience</h2>
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
          <h2 className="cv-print-h2">Projects</h2>
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
          <h2 className="cv-print-h2">Approach</h2>
          <p className="cv-print-body">
            Software engineering with quality built in — not added later. Architecture, automation,
            CI/CD, and maintainability are part of delivery from the first commit.
          </p>
        </section>
      </div>
    </div>
  );
}
