export type Project = {
  title: string;
  outcome: string;
  bullets: { label: string; text: string }[];
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'Seatly',
    outcome:
      'Fullstack restaurant discovery and reservation app — search, auth, menus, and booking persisted end-to-end.',
    bullets: [
      {
        label: 'Problem',
        text: 'Needed a production-shaped booking product to prove fullstack delivery beyond UI demos.',
      },
      {
        label: 'Approach',
        text: 'Next.js app with Prisma/Neon, JWT auth, reservation flow, and Playwright coverage in CI.',
      },
      {
        label: 'Owned',
        text: 'Domain modeling, auth/session, booking persistence, deploy envs, and automated E2E paths.',
      },
    ],
    tech: ['Next.js', 'Prisma', 'Neon', 'JWT', 'Playwright'],
    github: 'https://github.com/CH4692/opentablenextjs',
    live: 'https://opentableclone-ten.vercel.app/',
    image: '/seatly.png',
    featured: true,
  },
  {
    title: 'Playwright Automation Suite',
    outcome:
      'Maintainable E2E suite with Page Object Model — login, UI validation, and cart flows as engineering artifacts.',
    bullets: [
      {
        label: 'Problem',
        text: 'Ad-hoc UI checks do not scale; teams need durable automation they can trust in CI.',
      },
      {
        label: 'Approach',
        text: 'TypeScript + Playwright with clear POM structure, focused scenarios, and readable failure signals.',
      },
      {
        label: 'Owned',
        text: 'Suite architecture, critical-path coverage, and a reportable run experience for stakeholders.',
      },
    ],
    tech: ['Playwright', 'TypeScript', 'E2E', 'POM'],
    github: 'https://github.com/CH4692/playwright-automation-suite',
    live: 'https://playwright-automation-suite.vercel.app/',
    image: '/playwright.png',
    featured: true,
  },
  {
    title: 'Elikuren Website',
    outcome:
      'Responsive site for chamber choir Elikuren — clear structure, usability, and a professional digital presence.',
    bullets: [
      {
        label: 'Problem',
        text: 'A cultural organization needed a modern web presence that feels trustworthy and easy to navigate.',
      },
      {
        label: 'Approach',
        text: 'Next.js + Tailwind with content-first layout, strong visual hierarchy, and mobile-ready UX.',
      },
      {
        label: 'Owned',
        text: 'Frontend implementation, responsive polish, and delivery toward a production-ready experience.',
      },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/CH4692/elikuren-app',
    live: 'https://dev.kammerchor-elikuren.de',
    image: '/elikuren.png',
    featured: true,
  },
];
