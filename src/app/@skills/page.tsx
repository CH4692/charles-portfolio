import { Code, Cpu, Database, Layers, TestTube, Workflow } from 'lucide-react';

import Title from '@/components/Title';

export default function Skills() {
  const skillGroups = [
    {
      title: 'QA & Testing',
      icon: TestTube,
      skills: [
        'Playwright',
        'Selenium',
        'E2E Testing',
        'API Testing',
        'k6',
        'Jmeter',
        'SoapUI',
        'Postman',
        'Cypress',
      ],
    },
    {
      title: 'Languages',
      icon: Code,
      skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'Ruby', 'Go'],
    },
    {
      title: 'Frontend',
      icon: Layers,
      skills: ['React', 'Next.js', 'Tailwind', 'VueJS', 'React Native', 'Expo'],
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      skills: ['REST APIs', 'Node.js', 'Springboot', 'FastAPI', 'Django'],
    },
    {
      title: 'CI/CD',
      icon: Workflow,
      skills: ['GitHub Actions', 'Jenkins'],
    },
    {
      title: 'Tools & Workflow',
      icon: Cpu,
      skills: ['Git', 'Agile', 'Test Management', 'Jira', 'Miro'],
    },
  ];

  return (
    <section
      id="skills"
      className="from-sec-gra-start to-background flex min-h-[calc(100dvh-var(--header-h))] w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Title>My Skills</Title>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
            >
              {/* Header */}
              <div className="mb-4 flex items-center gap-3">
                <Icon className="h-5 w-5 text-white/80" />
                <h3 className="text-sm font-semibold tracking-wide uppercase">{title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
