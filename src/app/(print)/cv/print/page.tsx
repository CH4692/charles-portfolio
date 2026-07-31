import type { Metadata } from 'next';

import { cvExperience, cvProfile, cvProjects, cvSkills } from '@/data/cv';

export const metadata: Metadata = {
  title: 'CV Print',
  robots: { index: false, follow: false },
};

const summary = [
  cvProfile.summary,
  'Enterprise quality engineering (test management, test data, environments) meets modern full-stack delivery — with automation and maintainability designed in from day one.',
].join(' ');

export default function CvPrintPage() {
  return (
    <div className="cv-print-doc">
      <header className="cv-print-header">
        <h1 className="cv-print-name">{cvProfile.name}</h1>
        <p className="cv-print-title">{cvProfile.title}</p>
        <p className="cv-print-contact">
          {cvProfile.email}
          {' · '}
          www.charlesheller.dev
          {' · '}
          github.com/CH4692
          {' · '}
          linkedin.com/in/charles-heller-068b53233
          {' · '}
          {cvProfile.location}
        </p>
      </header>

      <section className="cv-print-section">
        <h2 className="cv-print-h2">Summary</h2>
        <p className="cv-print-body">{summary}</p>
      </section>

      <section className="cv-print-section">
        <h2 className="cv-print-h2">Skills</h2>
        <ul className="cv-print-skills">
          {cvSkills.map((group) => (
            <li key={group.title}>
              <span className="cv-print-skill-label">{group.title}</span>
              <span className="cv-print-body"> {group.items.join(', ')}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="cv-print-section">
        <h2 className="cv-print-h2">Experience</h2>
        <div className="cv-print-jobs">
          {cvExperience.map((job) => (
            <article key={job.role + job.company} className="cv-print-job">
              <div className="cv-print-job-head">
                <h3 className="cv-print-h3">
                  {job.role}
                  <span className="cv-print-muted"> · {job.company}</span>
                </h3>
                <p className="cv-print-date">{job.period}</p>
              </div>
              <p className="cv-print-context">{job.context}</p>
              <p className="cv-print-body cv-print-job-summary">{job.summary}</p>
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
          {cvProjects.map((project) => (
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
  );
}
