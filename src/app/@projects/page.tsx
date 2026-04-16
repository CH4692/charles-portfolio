import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

import Title from '@/components/Title';

export default function Projects() {
  const projects = [
    {
      title: 'Playwright Automation Suite',
      description:
        'End-to-end test automation project covering login validation, UI checks and cart flow using Playwright and TypeScript.',
      tech: ['Playwright', 'TypeScript', 'E2E', 'POM'],
      github: 'https://github.com/CH4692/playwright-automation-suite',
      live: 'https://playwright-automation-suite.vercel.app/', // optional
      image: '/playwright.png',
    },
    {
      title: 'Elikuren Website',
      description:
        'Responsive website for the chamber choir Elikuren, built with a focus on clean structure, usability, and a professional digital presence.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/CH4692/YOUR_ELIKUREN_REPO',
      live: 'https://dev.kammerchor-elikuren.de',
      image: '/elikuren.png',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern portfolio built with Next.js and Tailwind, showcasing QA automation and development projects.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/CH4692/YOUR_PORTFOLIO_REPO',
      live: 'https://charlesheller.dev',
      image: '/portfolio.png',
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
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-t-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="mt-8 h-64 w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>

                <p className="text-cool-grey mt-3 text-sm leading-6">{project.description}</p>

                {/* TECH */}
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

                {/* LINKS */}
                <div className="mt-6 flex gap-4">
                  <a href={project.github} target="_blank">
                    <Github className="h-5 w-5 text-white/80 hover:text-white" />
                  </a>

                  {project.live && (
                    <a href={project.live} target="_blank">
                      <ExternalLink className="h-5 w-5 text-white/80 hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
