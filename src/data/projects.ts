export type Project = {
  title: string;
  outcome: string;
  problem: string;
  approach: string;
  owned: string;
  result: string;
  challenge: string;
  tradeoff: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
  heroFeatured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'NavisSedes',
    outcome:
      'Production event-ticketing platform for basilica concerts — seat holds, Stripe checkout, QR tickets, and staff check-in.',
    problem:
      'A church concert series needed reliable seat reservations, payments, invoicing, and door check-in — not a generic ticketing SaaS.',
    approach:
      'Next.js 16 + Prisma/Neon domain model (Venue → Plan → Seat), atomic seat holds, Stripe webhooks with mock fallback, QR tokens, admin scanner, Vitest + Playwright.',
    owned:
      'End-to-end product ownership: seating plans, checkout, payments, tickets/invoices, role-based admin, and automated regression coverage.',
    result:
      'Shipped a live booking system at navissedes.charlesheller.dev with paid + free events, versioned seating plans, and offline-capable QR check-in.',
    challenge:
      'Concurrent seat selection and hold expiry had to stay consistent under checkout races without overselling.',
    tradeoff:
      'Chose optimistic locking + short holds over complex real-time websockets — simpler ops, clear failure modes, easier to test.',
    tech: ['Next.js', 'Prisma', 'Neon', 'Stripe', 'Playwright', 'Vitest'],
    github: 'https://github.com/CH4692/NavisSedes',
    live: 'https://navissedes.charlesheller.dev/',
    image: '/navissedes.png',
    featured: true,
    heroFeatured: true,
  },
  {
    title: 'Seatly',
    outcome:
      'Fullstack restaurant discovery and reservation app with auth, menus, and booking persisted end-to-end.',
    problem:
      'Needed a production-shaped booking product to prove fullstack delivery beyond UI demos.',
    approach:
      'Next.js + Prisma/Neon, JWT auth, reservation flow, develop/production DB branches, and Playwright coverage in CI.',
    owned:
      'Domain modeling, auth/session, booking persistence, deploy environments, and automated E2E paths.',
    result:
      'Live demo with searchable restaurants, authenticated sessions, and end-to-end reservation persistence.',
    challenge:
      'Keeping develop and production Neon branches + env wiring aligned so builds and E2E stayed green.',
    tradeoff:
      'Accepted an OpenTable-inspired UX to focus engineering depth on booking integrity, auth, and CI — not novel branding.',
    tech: ['Next.js', 'Prisma', 'Neon', 'JWT', 'Playwright'],
    github: 'https://github.com/CH4692/opentablenextjs',
    live: 'https://opentableclone-ten.vercel.app/',
    image: '/seatly.png',
    featured: true,
  },
  {
    title: 'Playwright Automation Suite',
    outcome:
      'Maintainable E2E suite with Page Object Model — critical paths as engineering artifacts, not ad-hoc scripts.',
    problem: 'Ad-hoc UI checks do not scale; teams need durable automation they can trust in CI.',
    approach:
      'TypeScript + Playwright with clear POM structure, focused scenarios, and readable failure signals/reports.',
    owned:
      'Suite architecture, critical-path coverage, and a reportable run experience for stakeholders.',
    result:
      'Reusable POM-based suite with published report UI — demonstrating automation as a shippable product.',
    challenge: 'Balancing coverage breadth with suite stability so failures stay actionable.',
    tradeoff: 'Prioritized a smaller, high-signal suite over chasing 100% UI coverage.',
    tech: ['Playwright', 'TypeScript', 'E2E', 'POM'],
    github: 'https://github.com/CH4692/playwright-automation-suite',
    live: 'https://playwright-automation-suite.vercel.app/',
    image: '/playwright.png',
    featured: true,
  },
  {
    title: 'Elikuren Website',
    outcome:
      'Responsive site for chamber choir Elikuren — clear structure and a professional digital presence.',
    problem:
      'A cultural organization needed a modern web presence that feels trustworthy and easy to navigate.',
    approach:
      'Next.js + Tailwind with content-first layout, strong visual hierarchy, and mobile-ready UX.',
    owned:
      'Frontend implementation, responsive polish, and delivery toward a production-ready experience.',
    result: 'Public-facing choir site with polished hero storytelling and clear navigation paths.',
    challenge: 'Keeping brand atmosphere strong on mobile without cluttering the first viewport.',
    tradeoff: 'Favored editorial layout and imagery over app-like interaction density.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/CH4692/elikuren-app',
    live: 'https://dev.kammerchor-elikuren.de',
    image: '/elikuren.png',
    featured: true,
  },
];

export const heroProject = projects.find((p) => p.heroFeatured) ?? projects[0];
