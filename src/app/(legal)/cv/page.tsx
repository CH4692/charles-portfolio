import type { Metadata } from 'next';
import Link from 'next/link';

import PrintButton from '@/components/PrintButton';
import { bio, experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { stackGroups } from '@/data/stack';

export const metadata: Metadata = {
  title: 'CV · Charles Heller',
  description:
    'Curriculum vitae of Charles Heller — Quality-Driven Software Engineer with enterprise QA and fullstack delivery experience.',
};

export default function CvPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-9">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="text-cool-grey hover:text-primary focus-ring rounded-sm text-sm transition"
        >
          ← Back to portfolio
        </Link>
        <div className="flex flex-wrap gap-3">
          <a
            href="/charles-heller-cv.pdf"
            download
            className="border-primary/60 hover:border-primary focus-ring rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-white/5"
          >
            Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <header className="border-b border-white/10 pb-8">
        <h1 className="font-display text-4xl font-semibold">Charles Heller</h1>
        <p className="text-primary mt-2 text-sm tracking-[0.18em] uppercase">
          Quality-Driven Software Engineer
        </p>
        <p className="text-cool-grey mt-4 leading-7">{bio}</p>
        <p className="text-cool-grey mt-4 text-sm">
          <a href="mailto:charles@charlesheller.dev" className="hover:text-primary">
            charles@charlesheller.dev
          </a>
          {' · '}
          <a
            href="https://www.charlesheller.dev"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            charlesheller.dev
          </a>
          {' · '}
          <a
            href="https://github.com/CH4692"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {' · '}
          <a
            href="https://www.linkedin.com/in/charles-heller-068b53233/"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-8">
          {experience.map((item) => (
            <article key={item.role + item.company}>
              <h3 className="font-semibold">
                {item.role} · {item.company}
              </h3>
              <p className="text-cool-grey mt-1 text-xs tracking-wide uppercase">{item.period}</p>
              <p className="text-cool-grey mt-3 text-sm leading-7">{item.summary}</p>
              <ul className="text-cool-grey mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">Selected work</h2>
        <div className="mt-6 space-y-5">
          {projects.map((project) => (
            <article key={project.title}>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-cool-grey mt-2 text-sm leading-6">{project.result}</p>
              <p className="text-cool-grey mt-1 text-xs">{project.tech.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">Stack</h2>
        <div className="mt-4 space-y-3">
          {stackGroups.map((group) => (
            <p key={group.title} className="text-cool-grey text-sm leading-6">
              <span className="font-medium text-white">{group.title}: </span>
              {group.skills.join(', ')}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
