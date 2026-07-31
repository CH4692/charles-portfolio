export type Project = {
  slug: string;
  title: string;
  outcome: string;
  problem: string;
  approach: string;
  owned: string;
  result: string;
  challenge: string;
  tradeoff: string;
  differently: string;
  testing: string;
  metrics: string[];
  architecture: string[];
  gallery?: string[];
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  /** Optional alternate shot for the home hero card */
  heroImage?: string;
  /** Mockup stage gradient — primary accent */
  accent?: string;
  /** Mockup stage gradient — secondary/deep accent */
  accentSecondary?: string;
  featured: boolean;
  heroFeatured?: boolean;
  caseStudy?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'navissedes',
    title: 'NavisSedes',
    outcome:
      'Production event-ticketing for basilica concerts — seat holds, Stripe, QR tickets, and staff check-in.',
    problem:
      'A church concert series needed reliable seat reservations, payments, invoicing, and door check-in — not a generic ticketing SaaS.',
    approach:
      'Next.js 16 + Prisma/Neon domain model (Venue → Plan → Seat), atomic seat holds, Stripe webhooks with mock fallback, QR tokens, admin scanner, Vitest + Playwright.',
    owned:
      'End-to-end product ownership: seating plans, checkout, payments, tickets/invoices, role-based admin, and automated regression coverage.',
    result:
      'Live system serving paid and free events with interactive seating, 10-minute holds, Stripe checkout, QR tickets, and role-based admin check-in.',
    challenge:
      'Concurrent seat selection and hold expiry had to stay consistent under checkout races without overselling.',
    tradeoff:
      'Chose optimistic locking + short holds over websockets — simpler ops, clearer failure modes, easier to test under load.',
    differently:
      'Next I would add stronger observability around hold expiry/webhook retries and a staging seed that mirrors production seating density.',
    testing:
      'Vitest covers domain/services; Playwright covers booking and admin flows — quality is part of the delivery pipeline, not a afterthought.',
    metrics: [
      '10-minute atomic seat holds',
      'Paid + free checkout paths',
      'Versioned seating plans (Draft → Published)',
      'Vitest + Playwright coverage',
    ],
    architecture: [
      'Venue → SeatingPlan → Section → Bench → Seat',
      'AVAILABLE → HELD → sold/released lifecycle',
      'Stripe Checkout + webhook (mock fallback for local/dev)',
      'QR tokens without PII + staff scanner roles',
    ],
    gallery: ['/navissedes.jpg', '/navissedes-seats.png', '/navissedes-event.png'],
    tech: ['Next.js', 'Prisma', 'Neon', 'Stripe', 'Playwright', 'Vitest'],
    github: 'https://github.com/CH4692/NavisSedes',
    live: 'https://navissedes.charlesheller.dev/',
    image: '/navissedes-seats.png',
    heroImage: '/navissedes.jpg',
    accent: '#6b1a2e',
    accentSecondary: '#1a1216',
    featured: true,
    heroFeatured: true,
    caseStudy: true,
  },
  {
    slug: 'seatly',
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
      'Deployed demo with city search, auth sessions, restaurant detail/menus, and reservation persistence across environments.',
    challenge:
      'Keeping develop/production Neon branches and env wiring aligned so builds and E2E stayed green.',
    tradeoff:
      'OpenTable-inspired UX to focus engineering depth on booking integrity, auth, and CI — not novel branding.',
    differently:
      'I would extract booking invariants into shared domain tests earlier to reduce env-specific flakiness.',
    testing:
      'Playwright CI covers home, search, restaurant/menu, reservation, and auth paths against a seeded database.',
    metrics: [
      'Multi-city restaurant search',
      'JWT auth + session restore',
      'CI Playwright suite on push/schedule',
      'Separate develop/production DB branches',
    ],
    architecture: [
      'App Router + API routes',
      'Prisma schema on Neon Postgres',
      'Cookie-based JWT sessions',
      'Seeded demo data for deterministic E2E',
    ],
    tech: ['Next.js', 'Prisma', 'Neon', 'JWT', 'Playwright'],
    github: 'https://github.com/CH4692/opentablenextjs',
    live: 'https://opentableclone-ten.vercel.app/',
    image: '/seatly.jpg',
    accent: '#0d4f52',
    accentSecondary: '#0c1418',
    featured: true,
  },
  {
    slug: 'playwright-automation-suite',
    title: 'Playwright Automation Suite',
    outcome:
      'Maintainable E2E suite with Page Object Model — critical paths as engineering artifacts, not ad-hoc scripts.',
    problem: 'Ad-hoc UI checks do not scale; teams need durable automation they can trust in CI.',
    approach:
      'TypeScript + Playwright with clear POM structure, focused scenarios, and readable failure signals/reports.',
    owned:
      'Suite architecture, critical-path coverage, and a reportable run experience for stakeholders.',
    result:
      'Published POM-based suite with HTML report UI — automation presented as a shippable engineering product.',
    challenge: 'Balancing coverage breadth with suite stability so failures stay actionable.',
    tradeoff: 'Smaller high-signal suite over chasing 100% UI coverage.',
    differently:
      'I would add API-level setup helpers earlier to keep UI tests focused on user-visible risk.',
    testing:
      'The suite itself is the deliverable: structured specs, POM, traces/report artifacts for debugging.',
    metrics: [
      'Page Object Model structure',
      'Critical-path login + cart coverage',
      'HTML report for stakeholders',
      'TypeScript-first maintainability',
    ],
    architecture: [
      'Playwright Test runner',
      'POM separation of pages/actions',
      'Focused specs over giant end-to-end scripts',
      'Report-first feedback loop',
    ],
    tech: ['Playwright', 'TypeScript', 'E2E', 'POM'],
    github: 'https://github.com/CH4692/playwright-automation-suite',
    live: 'https://playwright-automation-suite.vercel.app/',
    image: '/playwright.png',
    accent: '#2a3f1e',
    accentSecondary: '#10140f',
    featured: true,
  },
  {
    slug: 'elikuren',
    title: 'Elikuren Website',
    outcome:
      'Responsive site for chamber choir Elikuren — clear structure and a professional digital presence.',
    problem:
      'A cultural organization needed a modern web presence that feels trustworthy and easy to navigate.',
    approach:
      'Next.js + Tailwind with content-first layout, strong visual hierarchy, and mobile-ready UX.',
    owned:
      'Frontend implementation, responsive polish, and delivery toward a production-ready experience.',
    result:
      'Public-facing choir site with polished hero storytelling and clear navigation for concerts and participation.',
    challenge: 'Keeping brand atmosphere strong on mobile without cluttering the first viewport.',
    tradeoff: 'Editorial layout and imagery over app-like interaction density.',
    differently:
      'I would instrument key CTAs earlier to learn which content paths convert visitors.',
    testing:
      'Responsive UI validation and content hierarchy reviews across breakpoints before release.',
    metrics: [
      'Content-first responsive layout',
      'Clear concert discovery path',
      'Brand-forward first viewport',
    ],
    architecture: [
      'Next.js App Router',
      'Tailwind design system tokens',
      'Section-based marketing structure',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/CH4692/elikuren-app',
    live: 'https://dev.kammerchor-elikuren.de',
    image: '/elikuren.png',
    accent: '#3d2a4a',
    accentSecondary: '#121018',
    featured: true,
  },
];

export const heroProject = projects.find((p) => p.heroFeatured) ?? projects[0];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
