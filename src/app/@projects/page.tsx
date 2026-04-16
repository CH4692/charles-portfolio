import { ExternalLink,Github } from 'lucide-react';

import Title from '@/components/Title';

export default function Projects() {
  const projects = [
    {
      title: 'Playwright Automation',
      description: 'E2E testing suite with modern test automation',
      tech: ['Playwright', 'TypeScript', 'E2E'],
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio built with Next.js',
      tech: ['Next.js', 'React', 'Tailwind'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="from-sec-gra-start to-background flex min-h-[calc(100dvh-var(--header-h))] w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Title>My Work</Title>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold">{project.title}</h3>

              {/* Description */}
              <p className="text-cool-grey mt-3 text-sm">{project.description}</p>

              {/* Tech */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                <a href={project.github} target="_blank">
                  <Github className="h-5 w-5 text-white/80 hover:text-white" />
                </a>
                <a href={project.live} target="_blank">
                  <ExternalLink className="h-5 w-5 text-white/80 hover:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
