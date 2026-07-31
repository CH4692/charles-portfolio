import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

import Title from '@/components/Title';
import { projects } from '@/data/projects';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="work"
      className="from-sec-gra-start to-background flex w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Title>Selected Work</Title>
        <p className="text-cool-grey mt-4 max-w-2xl text-sm leading-7 md:text-base">
          Case studies that show how I ship software — and the quality systems that travel with it.
        </p>

        <div className="mt-12 flex flex-col gap-14">
          {featured.map((project, index) => {
            const bullets = [
              { label: 'Result', text: project.result },
              { label: 'Problem', text: project.problem },
              { label: 'Approach', text: project.approach },
              { label: 'Owned', text: project.owned },
              { label: 'Challenge', text: project.challenge },
              { label: 'Trade-off', text: project.tradeoff },
            ];

            return (
              <article
                key={project.title}
                className="group reveal-on-scroll overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:bg-white/[0.06]"
              >
                <div
                  className={`grid items-stretch lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
                >
                  <div className="bg-card relative min-h-[240px] overflow-hidden lg:min-h-[380px]">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-6 md:p-8">
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

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-4">
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
