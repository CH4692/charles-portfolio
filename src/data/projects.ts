import type { Locale } from '@/i18n/routing';

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
  /** Optional alternate shot for case-study hero (vs work-card image) */
  heroImage?: string;
  /** Mockup stage gradient — primary accent */
  accent?: string;
  /** Mockup stage gradient — secondary/deep accent */
  accentSecondary?: string;
  featured: boolean;
  caseStudy?: boolean;
};

type ProjectNarrative = {
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
};

type ProjectBase = {
  slug: string;
  title: string;
  gallery?: string[];
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  heroImage?: string;
  accent?: string;
  accentSecondary?: string;
  featured: boolean;
  caseStudy?: boolean;
  i18n: Record<Locale, ProjectNarrative>;
};

const projectDefs: ProjectBase[] = [
  {
    slug: 'navissedes',
    title: 'NavisSedes',
    gallery: ['/navissedes.jpg', '/navissedes-seats.png', '/navissedes-event.png'],
    tech: ['Next.js', 'Prisma', 'Neon', 'Stripe', 'Playwright', 'Vitest'],
    github: 'https://github.com/CH4692/NavisSedes',
    live: 'https://konzerte.st-godehard-hildesheim.de/',
    image: '/navissedes-seats.png',
    heroImage: '/navissedes.jpg',
    accent: '#6b1a2e',
    accentSecondary: '#1a1216',
    featured: true,
    caseStudy: true,
    i18n: {
      en: {
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
      },
      de: {
        outcome:
          'Produktiv eingesetztes Event-Ticketing für Basilika-Konzerte — Sitzplatz-Holds, Stripe, QR-Tickets und Check-in fürs Personal.',
        problem:
          'Eine Kirchenkonzertreihe brauchte zuverlässige Sitzplatzreservierung, Zahlungen, Rechnungen und Tür-Check-in — kein generisches Ticketing-SaaS.',
        approach:
          'Next.js 16 + Prisma/Neon-Domänenmodell (Venue → Plan → Seat), atomare Sitzplatz-Holds, Stripe-Webhooks mit Mock-Fallback, QR-Tokens, Admin-Scanner, Vitest + Playwright.',
        owned:
          'End-to-End-Produktverantwortung: Sitzpläne, Checkout, Zahlungen, Tickets/Rechnungen, rollenbasierte Admin-Oberfläche und automatisierte Regressionstests.',
        result:
          'Live-System für kostenpflichtige und kostenlose Events mit interaktivem Seating, 10-Minuten-Holds, Stripe Checkout, QR-Tickets und rollenbasiertem Admin-Check-in.',
        challenge:
          'Gleichzeitige Sitzplatzwahl und Hold-Ablauf mussten unter Checkout-Race Conditions konsistent bleiben — ohne Überverkauf.',
        tradeoff:
          'Optimistisches Locking + kurze Holds statt WebSockets — schlankerer Betrieb, klarere Fehlermodi, einfacher unter Last zu testen.',
        differently:
          'Als Nächstes würde ich Observability rund um Hold-Ablauf und Webhook-Retries stärken sowie einen Staging-Seed, der die Produktionsdichte der Sitzplätze abbildet.',
        testing:
          'Vitest deckt Domäne/Services ab; Playwright die Booking- und Admin-Flows — Qualität ist Teil der Delivery-Pipeline, kein Nachgedanke.',
        metrics: [
          'Atomare Sitzplatz-Holds (10 Minuten)',
          'Checkout-Pfade für kostenpflichtig und kostenlos',
          'Versionierte Sitzpläne (Draft → Published)',
          'Abdeckung mit Vitest + Playwright',
        ],
        architecture: [
          'Venue → SeatingPlan → Section → Bench → Seat',
          'Lebenszyklus AVAILABLE → HELD → verkauft/freigegeben',
          'Stripe Checkout + Webhook (Mock-Fallback für lokal/dev)',
          'QR-Tokens ohne PII + Scanner-Rollen fürs Personal',
        ],
      },
    },
  },
  {
    slug: 'seatly',
    title: 'Seatly',
    tech: ['Next.js', 'Prisma', 'Neon', 'JWT', 'Playwright'],
    github: 'https://github.com/CH4692/opentablenextjs',
    live: 'https://opentableclone-ten.vercel.app/',
    image: '/seatly.jpg',
    accent: '#0d4f52',
    accentSecondary: '#0c1418',
    featured: true,
    i18n: {
      en: {
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
      },
      de: {
        outcome:
          'Fullstack-App für Restaurant-Suche und -Reservierung mit Auth, Menüs und durchgängig persistiertem Booking.',
        problem:
          'Es brauchte ein produktionsnahes Booking-Produkt, um Fullstack-Delivery jenseits von UI-Demos zu belegen.',
        approach:
          'Next.js + Prisma/Neon, JWT-Auth, Reservierungsflow, Develop-/Production-DB-Branches und Playwright-Abdeckung in der CI.',
        owned:
          'Domänenmodellierung, Auth/Session, Booking-Persistenz, Deploy-Umgebungen und automatisierte E2E-Pfade.',
        result:
          'Deployte Demo mit Städtesuche, Auth-Sessions, Restaurant-Detail/Menüs und Reservierungspersistenz über Umgebungen hinweg.',
        challenge:
          'Develop- und Production-Branches auf Neon sowie Env-Verdrahtung so abstimmen, dass Builds und E2E grün bleiben.',
        tradeoff:
          'OpenTable-inspirierte UX, um Engineering-Tiefe auf Booking-Integrität, Auth und CI zu legen — nicht auf neues Branding.',
        differently:
          'Booking-Invarianten würde ich früher in gemeinsame Domänentests ziehen, um umgebungsspezifische Flakiness zu reduzieren.',
        testing:
          'Playwright in der CI deckt Home, Suche, Restaurant/Menü, Reservierung und Auth gegen eine geseedete Datenbank ab.',
        metrics: [
          'Restaurant-Suche über mehrere Städte',
          'JWT-Auth + Session-Wiederherstellung',
          'CI-Playwright-Suite bei Push/Schedule',
          'Getrennte Develop-/Production-DB-Branches',
        ],
        architecture: [
          'App Router + API-Routen',
          'Prisma-Schema auf Neon Postgres',
          'Cookie-basierte JWT-Sessions',
          'Geseedete Demo-Daten für deterministische E2E',
        ],
      },
    },
  },
  {
    slug: 'playwright-automation-suite',
    title: 'Playwright Automation Suite',
    tech: ['Playwright', 'TypeScript', 'E2E', 'POM'],
    github: 'https://github.com/CH4692/playwright-automation-suite',
    live: 'https://playwright-automation-suite.vercel.app/',
    image: '/playwright.png',
    accent: '#2a3f1e',
    accentSecondary: '#10140f',
    featured: true,
    i18n: {
      en: {
        outcome:
          'Maintainable E2E suite with Page Object Model — critical paths as engineering artifacts, not ad-hoc scripts.',
        problem:
          'Ad-hoc UI checks do not scale; teams need durable automation they can trust in CI.',
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
      },
      de: {
        outcome:
          'Wartbare E2E-Suite mit Page Object Model — kritische Pfade als Engineering-Artefakte, keine Ad-hoc-Skripte.',
        problem:
          'Ad-hoc-UI-Checks skalieren nicht; Teams brauchen langlebige Automation, der man in der CI vertrauen kann.',
        approach:
          'TypeScript + Playwright mit klarer POM-Struktur, fokussierten Szenarien und lesbaren Failure-Signalen/Reports.',
        owned:
          'Suite-Architektur, Abdeckung der kritischen Pfade und ein reportfähiger Lauf für Stakeholder.',
        result:
          'Veröffentlichte POM-basierte Suite mit HTML-Report-UI — Automation als lieferfähiges Engineering-Produkt.',
        challenge:
          'Abdeckungsbreite und Suite-Stabilität so ausbalancieren, dass Failures handlungsfähig bleiben.',
        tradeoff: 'Kleinere Suite mit hohem Signal statt 100 % UI-Coverage zu jagen.',
        differently:
          'API-seitige Setup-Helper würde ich früher einführen, damit UI-Tests auf nutzer-sichtbares Risiko fokussiert bleiben.',
        testing:
          'Die Suite selbst ist das Deliverable: strukturierte Specs, POM, Traces/Report-Artefakte fürs Debugging.',
        metrics: [
          'Page-Object-Model-Struktur',
          'Abdeckung kritischer Pfade: Login + Warenkorb',
          'HTML-Report für Stakeholder',
          'Wartbarkeit mit TypeScript zuerst',
        ],
        architecture: [
          'Playwright Test Runner',
          'POM-Trennung von Pages/Actions',
          'Fokussierte Specs statt riesiger End-to-End-Skripte',
          'Report-first Feedback-Loop',
        ],
      },
    },
  },
  {
    slug: 'elikuren',
    title: 'Elikuren Website',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/CH4692/elikuren-app',
    live: 'https://elikuren-app.vercel.app/',
    image: '/elikuren.png',
    accent: '#3d2a4a',
    accentSecondary: '#121018',
    featured: true,
    i18n: {
      en: {
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
        challenge:
          'Keeping brand atmosphere strong on mobile without cluttering the first viewport.',
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
      },
      de: {
        outcome:
          'Responsive Website für den Kammerchor Elikuren — klare Struktur und professioneller digitaler Auftritt.',
        problem:
          'Eine kulturelle Organisation brauchte eine moderne Webpräsenz, die vertrauenswürdig wirkt und leicht zu navigieren ist.',
        approach:
          'Next.js + Tailwind mit content-first Layout, starker visueller Hierarchie und mobiltauglicher UX.',
        owned:
          'Frontend-Umsetzung, responsives Feintuning und Delivery bis zu einem produktionsreifen Erlebnis.',
        result:
          'Öffentliche Chor-Website mit ausgearbeitetem Hero-Storytelling und klarer Navigation zu Konzerten und Mitmachen.',
        challenge:
          'Markenatmosphäre auf Mobile stark halten, ohne den ersten Viewport zu überladen.',
        tradeoff: 'Editorial Layout und Bildsprache statt app-artiger Interaktionsdichte.',
        differently:
          'Zentrale CTAs würde ich früher instrumentieren, um zu sehen, welche Content-Pfade Besucher konvertieren.',
        testing:
          'Responsive UI-Checks und Reviews der Content-Hierarchie über Breakpoints vor dem Release.',
        metrics: [
          'Content-first responsives Layout',
          'Klarer Pfad zur Konzerterkundung',
          'Markenstarker erster Viewport',
        ],
        architecture: [
          'Next.js App Router',
          'Tailwind Design-System-Tokens',
          'Abschnittsbasierte Marketing-Struktur',
        ],
      },
    },
  },
];

function resolveProject(def: ProjectBase, locale: Locale): Project {
  const { i18n, ...shared } = def;
  const narrative = i18n[locale] ?? i18n.en;
  return { ...shared, ...narrative };
}

export function getProjects(locale: Locale): Project[] {
  return projectDefs.map((def) => resolveProject(def, locale));
}

export function getProject(slug: string, locale: Locale = 'en'): Project | undefined {
  const def = projectDefs.find((p) => p.slug === slug);
  if (!def) return undefined;
  return resolveProject(def, locale);
}

/** @deprecated Prefer getProjects(locale). Kept for EN backward compatibility. */
export const projects: Project[] = getProjects('en');
