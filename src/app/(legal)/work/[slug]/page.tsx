import { ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import BrowserMockup from '@/components/BrowserMockup';
import { getProject, projects } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy || p.slug === 'navissedes')
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Case study' };
  return {
    title: `${project.title} Case Study`,
    description: project.result,
    openGraph: {
      title: `${project.title} · Charles Heller`,
      description: project.result,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const gallery = project.gallery?.length ? project.gallery : [project.image];

  return (
    <article className="mx-auto max-w-4xl px-5 py-16 sm:px-9">
      <Link
        href="/#work"
        className="text-cool-grey hover:text-primary focus-ring rounded-sm text-sm transition"
      >
        ← Back to selected work
      </Link>

      <header className="mt-8">
        <p className="text-primary text-xs tracking-[0.2em] uppercase">Case study</p>
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
              Live demo
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
              GitHub
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
        <h2 className="font-display text-2xl font-semibold">Proof points</h2>
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
          <h2 className="font-display text-xl font-semibold">Problem</h2>
          <p className="text-cool-grey mt-3 text-sm leading-7">{project.problem}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">Approach</h2>
          <p className="text-cool-grey mt-3 text-sm leading-7">{project.approach}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">Challenge</h2>
          <p className="text-cool-grey mt-3 text-sm leading-7">{project.challenge}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">Trade-off</h2>
          <p className="text-cool-grey mt-3 text-sm leading-7">{project.tradeoff}</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Architecture decisions</h2>
        <ul className="text-cool-grey mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
          {project.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">How I tested this</h2>
        <p className="text-cool-grey mt-3 text-sm leading-7">{project.testing}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">What I owned</h2>
        <p className="text-cool-grey mt-3 text-sm leading-7">{project.owned}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">What I&apos;d do differently</h2>
        <p className="text-cool-grey mt-3 text-sm leading-7">{project.differently}</p>
      </section>

      {gallery.length > 1 && (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Product walkthrough</h2>
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
        <h2 className="font-display text-xl font-semibold">Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-14 flex flex-wrap gap-3 border-t border-white/10 pt-8">
        <Link
          href="/#contact"
          className="text-background from-cta-grad-start to-cta-grad-end focus-ring inline-flex rounded-lg bg-gradient-to-br px-5 py-2.5 text-sm font-semibold"
        >
          Discuss a similar project
        </Link>
        <Link
          href="/#work"
          className="focus-ring inline-flex rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium"
        >
          More work
        </Link>
      </div>
    </article>
  );
}
