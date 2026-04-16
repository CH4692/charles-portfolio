import { Briefcase, Code, Layers, Rocket, TestTube, Workflow } from 'lucide-react';

import Title from '@/components/Title';

export default function About() {
  const facts = [
    { label: 'QA Automation Engineer', icon: TestTube },
    { label: 'Test Manager at Swiss Life', icon: Briefcase },
    { label: 'Playwright & Selenium', icon: Code },
    { label: 'TypeScript & Next.js', icon: Layers },
    { label: 'Agile QA & CRM Testing', icon: Workflow },
    { label: 'Open for freelance work', icon: Rocket },
  ];

  return (
    <section
      id="about"
      className="from-sec-gra-start to-background flex min-h-[calc(100dvh-var(--header-h))] w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Title>About Me</Title>

        <div className="mt-12 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          {/* LEFT */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-cool-grey mb-3 text-sm tracking-[0.2em] uppercase">Who I am</p>

            <h3 className="text-2xl font-semibold md:text-4xl">
              Quality-focused engineer with a passion for automation
            </h3>

            <p className="text-cool-grey mt-6 max-w-2xl leading-8">
              I build reliable testing solutions for modern web applications and help teams improve
              software quality through automation, structure, and clean implementation.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4 sm:grid-cols-2">
            {facts.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
              >
                <Icon className="h-5 w-5 text-white/80" />
                <p className="text-sm text-gray-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
