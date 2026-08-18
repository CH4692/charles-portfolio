import type { Locale } from '@/i18n/routing';

const cvProfileByLocale = {
  en: {
    name: 'Charles Heller',
    title: 'Senior Software Engineer · Quality Engineering · Test Data & Environment Management',
    location: 'Germany · remote-friendly',
    email: 'charles@charlesheller.dev',
    website: 'https://charlesheller.dev',
    github: 'https://github.com/CH4692',
    linkedin: 'https://www.linkedin.com/in/charles-heller-068b53233/',
    summary:
      'I build reliable software by combining enterprise quality engineering with modern full-stack development.',
    intro: [
      'My career began in software testing, where I learned that quality isn’t something you verify at the end of a project — it’s something you design into the product from the beginning. Over the years, I expanded into test automation, test management, test data management, environment management, cloud transformation, and software engineering.',
      'Today I build modern web applications while applying the same engineering discipline used in enterprise environments. My goal is simple: create software that is scalable, maintainable, thoroughly tested, and ready for production.',
    ],
  },
  de: {
    name: 'Charles Heller',
    title: 'Senior Software Engineer · Quality Engineering · Test Data & Environment Management',
    location: 'Deutschland · remote-freundlich',
    email: 'charles@charlesheller.dev',
    website: 'https://charlesheller.dev',
    github: 'https://github.com/CH4692',
    linkedin: 'https://www.linkedin.com/in/charles-heller-068b53233/',
    summary:
      'Ich baue zuverlässige Software, indem ich Enterprise Quality Engineering mit modernem Fullstack-Development verbinde.',
    intro: [
      'Meine Karriere begann im Software Testing. Dort habe ich gelernt: Qualität prüft man nicht am Ende eines Projekts — man designed sie von Anfang an ins Produkt. Über die Jahre habe ich mich in Testautomation, Testmanagement, Test Data Management, Environment Management, Cloud Transformation und Software Engineering weiterentwickelt.',
      'Heute baue ich moderne Web-Anwendungen und bringe dieselbe Engineering-Disziplin ein, die in Enterprise-Umgebungen gefordert ist. Mein Ziel ist klar: Software, die skalierbar, wartbar, gründlich getestet und production-ready ist.',
    ],
  },
} as const;

const cvAboutByLocale = {
  en: {
    lead: 'I enjoy solving complex technical challenges and turning ideas into high-quality software products.',
    body: [
      'With several years of experience in enterprise software delivery, I understand both the technical and organisational aspects of building reliable systems. I work comfortably across development, testing, cloud infrastructure, automation, and product delivery.',
      'Whether I’m developing a SaaS platform, designing a test strategy, or introducing modern testing practices for enterprise teams, I focus on long-term maintainability rather than short-term fixes.',
    ],
  },
  de: {
    lead: 'Ich löse gerne komplexe technische Herausforderungen und verwandle Ideen in hochwertige Softwareprodukte.',
    body: [
      'Mit mehrjähriger Erfahrung in der Enterprise-Software-Delivery verstehe ich sowohl die technischen als auch die organisatorischen Aspekte zuverlässiger Systeme. Ich arbeite sicher an der Schnittstelle von Development, Testing, Cloud-Infrastruktur, Automation und Product Delivery.',
      'Ob ich eine SaaS-Plattform entwickle, eine Teststrategie gestalte oder moderne Testing-Praktiken in Enterprise-Teams einführe — ich fokussiere auf langfristige Wartbarkeit statt auf kurzfristige Fixes.',
    ],
  },
} as const;

const cvCapabilitiesByLocale = {
  en: [
    {
      title: 'Full Stack Development',
      text: 'I design and develop modern web applications from concept to production — frontend, backend architecture, authentication, databases, payments, deployment, and automated testing. I enjoy building products that are fast, intuitive, and easy to maintain.',
    },
    {
      title: 'Quality Engineering',
      text: 'Quality is not a separate phase of development. It influences architecture, code quality, testing, deployment, and maintenance. Every project I build includes clean architecture, automated testing, CI, continuous improvement, and production-ready deployment.',
    },
    {
      title: 'Test Automation',
      text: 'Automation has been part of my daily work throughout my career. I build reliable frameworks that help teams deliver faster while reducing manual effort and release risk — covering E2E, API, integration, UI, and regression testing with Playwright, Selenium, Vitest, and CI/CD.',
    },
    {
      title: 'Test Data Management',
      text: 'Reliable software depends on reliable test data. I help establish enterprise-wide strategies for managing test data across applications and environments — including lifecycle management, database refresh concepts, pseudo-production environments, governance, and AWS-based approaches.',
    },
    {
      title: 'Test Environment Management',
      text: 'Modern delivery depends on stable environments. I coordinate enterprise test environments across teams and help ensure testing can be performed reliably — covering planning, readiness, release preparation, deployment coordination, risk assessment, and cloud-based delivery support.',
    },
  ],
  de: [
    {
      title: 'Full Stack Development',
      text: 'Ich konzipiere und entwickle moderne Web-Anwendungen von der Idee bis Production — Frontend, Backend-Architektur, Authentication, Datenbanken, Payments, Deployment und automatisiertes Testing. Ich baue Produkte, die schnell, intuitiv und leicht wartbar sind.',
    },
    {
      title: 'Quality Engineering',
      text: 'Qualität ist keine separate Phase der Entwicklung. Sie beeinflusst Architektur, Codequalität, Testing, Deployment und Wartung. Jedes Projekt, das ich baue, umfasst saubere Architektur, automatisiertes Testing, CI, kontinuierliche Verbesserung und production-ready Deployment.',
    },
    {
      title: 'Test Automation',
      text: 'Automation gehört seit Beginn meiner Karriere zum Alltag. Ich baue belastbare Frameworks, mit denen Teams schneller liefern und manuellen Aufwand sowie Release-Risiken reduzieren — E2E, API, Integration, UI und Regression mit Playwright, Selenium, Vitest und CI/CD.',
    },
    {
      title: 'Test Data Management',
      text: 'Zuverlässige Software braucht zuverlässige Testdaten. Ich etabliere unternehmensweite Strategien für Testdaten über Anwendungen und Umgebungen hinweg — inklusive Lifecycle Management, Datenbank-Refresh-Konzepten, Pseudo-Production-Umgebungen, Governance und AWS-basierten Ansätzen.',
    },
    {
      title: 'Test Environment Management',
      text: 'Moderne Delivery hängt von stabilen Umgebungen ab. Ich koordiniere Enterprise-Testumgebungen über Teams hinweg und stelle sicher, dass Testing verlässlich möglich ist — von Planung und Readiness über Release-Vorbereitung und Deployment-Koordination bis Risikoanalyse und Cloud-Delivery-Support.',
    },
  ],
} as const;

const cvExperienceByLocale = {
  en: [
    {
      role: 'Test Manager · Test Data Manager · Test Environment Manager',
      company: 'Swiss Life',
      context: 'Enterprise CRM & Digital Platforms',
      period: 'Multi-year · Agile enterprise delivery',
      summary:
        'Working within large agile delivery organisations, I help ensure software can be delivered with confidence, quality, and predictable releases. Responsibilities have expanded from traditional QA into enterprise-wide quality engineering and delivery management.',
      highlights: [
        'Lead enterprise test management, quality engineering, and risk-based test strategy across complex CRM and digital platforms.',
        'Drive Playwright automation, API testing, and integration testing as part of release readiness.',
        'Own test data management: lifecycle, refresh concepts, pseudo-production environments, governance, and cross-team coordination.',
        'Coordinate test environments, deployment readiness, and release preparation across multiple Scrum teams.',
        'Support AWS cloud transformation and cloud-native delivery together with product, engineering, and architecture stakeholders.',
        'Improve processes continuously so quality becomes a shared delivery signal — not a late gate.',
      ],
    },
    {
      role: 'Independent Software Engineer',
      company: 'Freelance / Projects',
      context: 'Web products & SaaS',
      period: 'Ongoing',
      summary:
        'Alongside enterprise work, I develop modern web applications and SaaS products from idea to production — combining software engineering with enterprise quality engineering.',
      highlights: [
        'Own end-to-end delivery: architecture, frontend/backend, authentication, databases, payments, and deployment.',
        'Ship production products such as NavisSedes (ticketing) and Seatly (reservations) with Next.js, Prisma, and cloud data layers.',
        'Build automated testing and CI/CD into the delivery process from day one.',
        'Optimise for maintainability, performance, and a clear product experience.',
      ],
    },
  ],
  de: [
    {
      role: 'Test Manager · Test Data Manager · Test Environment Manager',
      company: 'Swiss Life',
      context: 'Enterprise-CRM & digitale Plattformen',
      period: 'Mehrjährig · Agile Enterprise Delivery',
      summary:
        'In großen agilen Delivery-Organisationen sorge ich dafür, dass Software mit Verlässlichkeit, Qualität und planbaren Releases geliefert werden kann. Mein Verantwortungsbereich hat sich von klassischer QA zu unternehmensweitem Quality Engineering und Delivery Management erweitert.',
      highlights: [
        'Leitung von Enterprise-Testmanagement, Quality Engineering und risikoorientierter Teststrategie für komplexe CRM- und Digitalplattformen.',
        'Vorantreiben von Playwright-Automation, API-Testing und Integrationstests als Teil der Release-Readiness.',
        'Verantwortung für Test Data Management: Lifecycle, Refresh-Konzepte, Pseudo-Production-Umgebungen, Governance und Cross-Team-Koordination.',
        'Koordination von Testumgebungen, Deployment-Readiness und Release-Vorbereitung über mehrere Scrum-Teams hinweg.',
        'Unterstützung der AWS-Cloud-Transformation und cloud-nativer Delivery gemeinsam mit Product, Engineering und Architektur.',
        'Kontinuierliche Prozessverbesserung, damit Qualität ein gemeinsames Delivery-Signal wird — kein spätes Gate.',
      ],
    },
    {
      role: 'Independent Software Engineer',
      company: 'Freelance / Projekte',
      context: 'Web-Produkte & SaaS',
      period: 'Laufend',
      summary:
        'Neben der Enterprise-Arbeit entwickle ich moderne Web-Anwendungen und SaaS-Produkte von der Idee bis Production — und verbinde Software Engineering mit Enterprise Quality Engineering.',
      highlights: [
        'End-to-End-Delivery: Architektur, Frontend/Backend, Authentication, Datenbanken, Payments und Deployment.',
        'Production-Produkte wie NavisSedes (Ticketing) und Seatly (Reservierungen) mit Next.js, Prisma und Cloud-Datenlayern.',
        'Automatisiertes Testing und CI/CD von Tag eins als Teil der Delivery.',
        'Optimierung auf Wartbarkeit, Performance und eine klare Produkterfahrung.',
      ],
    },
  ],
} as const;

const cvProjectsByLocale = {
  en: [
    {
      title: 'NavisSedes',
      href: '/work/navissedes',
      description:
        'A complete event ticketing platform for churches and cultural organisations — interactive seating, Stripe payments, QR tickets, reservations, role-based admin, and check-in workflows.',
      features: [
        'Interactive seating plans',
        'Stripe checkout',
        'QR tickets & email confirmations',
        'Role-based administration',
        'Automated testing',
      ],
      stack:
        'Next.js · TypeScript · Prisma · PostgreSQL · Neon · Stripe · Playwright · Vitest · Cloudflare',
    },
    {
      title: 'Seatly',
      href: 'https://opentableclone-ten.vercel.app/',
      description:
        'A restaurant reservation platform demonstrating modern full-stack architecture with auth, search, booking persistence, and automated testing.',
      features: [
        'Authentication & sessions',
        'Restaurant search',
        'Reservation workflow',
        'Database persistence',
        'CI Playwright coverage',
      ],
      stack: 'Next.js · TypeScript · Prisma · Neon · JWT · Playwright',
    },
    {
      title: 'Playwright Automation Suite',
      href: 'https://playwright-automation-suite.vercel.app/',
      description:
        'An enterprise-inspired automation framework using modern testing practices — built as a shippable engineering artifact, not ad-hoc scripts.',
      features: [
        'Page Object Model',
        'HTML reporting',
        'Reusable architecture',
        'Parallel execution',
        'CI-ready workflows',
      ],
      stack: 'Playwright · TypeScript · POM · CI',
    },
    {
      title: 'Elikuren',
      href: 'https://elikuren-app.vercel.app/',
      description:
        'Modern choir website with a secure member platform — public presence, protected member area, media library, and administration.',
      features: [
        'Public website',
        'Protected member area',
        'Authentication',
        'Media library & admin',
        'Responsive design',
      ],
      stack: 'Next.js · React · TypeScript · Tailwind',
    },
  ],
  de: [
    {
      title: 'NavisSedes',
      href: '/work/navissedes',
      description:
        'Eine vollständige Event-Ticketing-Plattform für Kirchen und kulturelle Organisationen — interaktive Sitzpläne, Stripe-Payments, QR-Tickets, Reservierungen, rollenbasierte Administration und Check-in-Workflows.',
      features: [
        'Interaktive Sitzpläne',
        'Stripe Checkout',
        'QR-Tickets & E-Mail-Bestätigungen',
        'Rollenbasierte Administration',
        'Automatisiertes Testing',
      ],
      stack:
        'Next.js · TypeScript · Prisma · PostgreSQL · Neon · Stripe · Playwright · Vitest · Cloudflare',
    },
    {
      title: 'Seatly',
      href: 'https://opentableclone-ten.vercel.app/',
      description:
        'Eine Restaurant-Reservierungsplattform mit moderner Fullstack-Architektur — Auth, Suche, Buchungs-Persistenz und automatisiertes Testing.',
      features: [
        'Authentication & Sessions',
        'Restaurant-Suche',
        'Reservierungs-Workflow',
        'Datenbank-Persistenz',
        'CI Playwright Coverage',
      ],
      stack: 'Next.js · TypeScript · Prisma · Neon · JWT · Playwright',
    },
    {
      title: 'Playwright Automation Suite',
      href: 'https://playwright-automation-suite.vercel.app/',
      description:
        'Ein enterprise-inspiriertes Automation-Framework mit modernen Testing-Praktiken — als shippable Engineering-Artefakt gebaut, nicht als Ad-hoc-Skripte.',
      features: [
        'Page Object Model',
        'HTML-Reporting',
        'Wiederverwendbare Architektur',
        'Parallele Ausführung',
        'CI-fähige Workflows',
      ],
      stack: 'Playwright · TypeScript · POM · CI',
    },
    {
      title: 'Elikuren',
      href: 'https://elikuren-app.vercel.app/',
      description:
        'Moderne Chor-Website mit sicherer Mitgliederplattform — öffentlicher Auftritt, geschützter Mitgliederbereich, Medienbibliothek und Administration.',
      features: [
        'Öffentliche Website',
        'Geschützter Mitgliederbereich',
        'Authentication',
        'Medienbibliothek & Admin',
        'Responsive Design',
      ],
      stack: 'Next.js · React · TypeScript · Tailwind',
    },
  ],
} as const;

const cvSkillsByLocale = {
  en: [
    {
      title: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'Java'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Next.js', 'Prisma', 'PostgreSQL', 'REST APIs', 'JWT Auth'],
    },
    {
      title: 'Testing & Quality',
      items: [
        'Playwright',
        'Selenium',
        'Vitest',
        'API Testing',
        'E2E Testing',
        'Test Strategy',
        'Test Data Management',
        'Test Environment Management',
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS', 'GitHub Actions', 'Docker', 'Cloudflare', 'Neon', 'Vercel', 'Stripe'],
    },
  ],
  de: [
    {
      title: 'Sprachen',
      items: ['TypeScript', 'JavaScript', 'Python', 'Java'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Next.js', 'Prisma', 'PostgreSQL', 'REST APIs', 'JWT Auth'],
    },
    {
      title: 'Testing & Quality',
      items: [
        'Playwright',
        'Selenium',
        'Vitest',
        'API Testing',
        'E2E Testing',
        'Test Strategy',
        'Test Data Management',
        'Test Environment Management',
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS', 'GitHub Actions', 'Docker', 'Cloudflare', 'Neon', 'Vercel', 'Stripe'],
    },
  ],
} as const;

const cvWorkflowByLocale = {
  en: [
    'Understanding the business problem',
    'Designing scalable architectures',
    'Building maintainable software',
    'Automating testing from the beginning',
    'Deploying continuously',
    'Monitoring and improving over time',
  ],
  de: [
    'Das Business-Problem verstehen',
    'Skalierbare Architekturen gestalten',
    'Wartbare Software bauen',
    'Testing von Anfang an automatisieren',
    'Kontinuierlich deployen',
    'Überwachen und fortlaufend verbessern',
  ],
} as const;

const cvInterestsByLocale = {
  en: [
    'Modern web applications',
    'SaaS products',
    'Full-stack development',
    'Enterprise software',
    'Quality engineering',
    'Test automation',
    'Cloud architecture',
    'Developer experience',
    'AWS-based solutions',
    'Scalable platforms',
  ],
  de: [
    'Moderne Web-Anwendungen',
    'SaaS-Produkte',
    'Fullstack-Development',
    'Enterprise-Software',
    'Quality Engineering',
    'Testautomation',
    'Cloud-Architektur',
    'Developer Experience',
    'AWS-basierte Lösungen',
    'Skalierbare Plattformen',
  ],
} as const;

const cvClosingByLocale = {
  en: {
    title: "Let's build reliable software",
    text: 'Whether you need a modern web application, enterprise quality engineering, automated testing, or someone who can bridge development and quality assurance — I’d be happy to hear about your project.',
    tagline: 'Software engineering with quality built in — not added later.',
  },
  de: {
    title: 'Lassen Sie uns zuverlässige Software bauen',
    text: 'Ob moderne Web-Anwendung, Enterprise Quality Engineering, automatisiertes Testing oder jemand, der Development und Quality Assurance verbindet — ich freue mich, von Ihrem Projekt zu hören.',
    tagline: 'Software Engineering mit eingebauter Qualität — nicht nachträglich ergänzt.',
  },
} as const;

const cvNavByLocale = {
  en: [
    { id: 'about', label: 'About' },
    { id: 'capabilities', label: 'What I do' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'approach', label: 'How I work' },
    { id: 'contact-cta', label: 'Contact' },
  ],
  de: [
    { id: 'about', label: 'Über mich' },
    { id: 'capabilities', label: 'Was ich mache' },
    { id: 'experience', label: 'Erfahrung' },
    { id: 'projects', label: 'Projekte' },
    { id: 'skills', label: 'Skills' },
    { id: 'approach', label: 'So arbeite ich' },
    { id: 'contact-cta', label: 'Kontakt' },
  ],
} as const;

/** Condensed copy for a single A4 print page — web CV keeps the longer narrative. */
const printSummaryByLocale = {
  en: 'I build reliable software by combining enterprise quality engineering with modern full-stack delivery — automation, test data, environments, and maintainability designed in from day one.',
  de: 'Ich baue zuverlässige Software, indem ich Enterprise Quality Engineering mit moderner Fullstack-Delivery verbinde — Automation, Testdaten, Umgebungen und Wartbarkeit sind von Tag eins mitgedacht.',
} as const;

const printApproachByLocale = {
  en: 'Software engineering with quality built in — not added later. Architecture, automation, CI/CD, and maintainability are part of delivery from the first commit.',
  de: 'Software Engineering mit eingebauter Qualität — nicht nachträglich ergänzt. Architektur, Automation, CI/CD und Wartbarkeit gehören von Commit eins zur Delivery.',
} as const;

const printExperienceByLocale = {
  en: [
    {
      role: 'Test Manager · Test Data Manager · Test Environment Manager',
      company: 'Swiss Life',
      context: 'Enterprise CRM & Digital Platforms',
      period: 'Multi-year',
      summary: '',
      highlights: [
        'Lead enterprise test management, quality engineering, and risk-based test strategy across CRM and digital platforms.',
        'Drive Playwright automation, API testing, and integration testing as part of release readiness.',
        'Own test data management and coordinate test environments across multiple Scrum teams.',
        'Support AWS cloud transformation with product, engineering, and architecture stakeholders.',
      ],
    },
    {
      role: 'Independent Software Engineer',
      company: 'Freelance / Projects',
      context: 'Web products & SaaS',
      period: 'Ongoing',
      summary: '',
      highlights: [
        'Own end-to-end delivery: architecture, frontend/backend, auth, databases, payments, and deployment.',
        'Ship production products such as NavisSedes (ticketing) and Seatly (reservations) with Next.js and Prisma.',
        'Build automated testing and CI/CD into delivery from day one.',
      ],
    },
  ],
  de: [
    {
      role: 'Test Manager · Test Data Manager · Test Environment Manager',
      company: 'Swiss Life',
      context: 'Enterprise-CRM & digitale Plattformen',
      period: 'Mehrjährig',
      summary: '',
      highlights: [
        'Leitung von Enterprise-Testmanagement, Quality Engineering und risikoorientierter Teststrategie für CRM- und Digitalplattformen.',
        'Vorantreiben von Playwright-Automation, API-Testing und Integrationstests als Teil der Release-Readiness.',
        'Verantwortung für Test Data Management und Koordination von Testumgebungen über mehrere Scrum-Teams.',
        'Unterstützung der AWS-Cloud-Transformation mit Product, Engineering und Architektur.',
      ],
    },
    {
      role: 'Independent Software Engineer',
      company: 'Freelance / Projekte',
      context: 'Web-Produkte & SaaS',
      period: 'Laufend',
      summary: '',
      highlights: [
        'End-to-End-Delivery: Architektur, Frontend/Backend, Auth, Datenbanken, Payments und Deployment.',
        'Production-Produkte wie NavisSedes (Ticketing) und Seatly (Reservierungen) mit Next.js und Prisma.',
        'Automatisiertes Testing und CI/CD von Tag eins in der Delivery.',
      ],
    },
  ],
} as const;

const printProjectBlurbsByLocale = {
  en: {
    NavisSedes:
      'Event ticketing for churches and cultural orgs — seating, Stripe, QR tickets, admin, and check-in.',
    Seatly:
      'Restaurant reservations with auth, search, booking persistence, and automated testing.',
    'Playwright Automation Suite':
      'Enterprise-inspired Playwright framework — POM, reporting, parallel runs, CI-ready.',
    Elikuren: 'Choir website with secure member platform, media library, and administration.',
  },
  de: {
    NavisSedes:
      'Event-Ticketing für Kirchen und kulturelle Organisationen — Sitzpläne, Stripe, QR-Tickets, Admin und Check-in.',
    Seatly:
      'Restaurant-Reservierungen mit Auth, Suche, Buchungs-Persistenz und automatisiertem Testing.',
    'Playwright Automation Suite':
      'Enterprise-inspiriertes Playwright-Framework — POM, Reporting, parallele Läufe, CI-fähig.',
    Elikuren: 'Chor-Website mit sicherer Mitgliederplattform, Medienbibliothek und Administration.',
  },
} as const;

export function getCvProfile(locale: Locale) {
  return cvProfileByLocale[locale];
}

export function getCvAbout(locale: Locale) {
  return cvAboutByLocale[locale];
}

export function getCvCapabilities(locale: Locale) {
  return cvCapabilitiesByLocale[locale];
}

export function getCvExperience(locale: Locale) {
  return cvExperienceByLocale[locale];
}

export function getCvProjects(locale: Locale) {
  return cvProjectsByLocale[locale];
}

export function getCvSkills(locale: Locale) {
  return cvSkillsByLocale[locale];
}

export function getCvWorkflow(locale: Locale) {
  return cvWorkflowByLocale[locale];
}

export function getCvInterests(locale: Locale) {
  return cvInterestsByLocale[locale];
}

export function getCvClosing(locale: Locale) {
  return cvClosingByLocale[locale];
}

export function getCvNav(locale: Locale) {
  return cvNavByLocale[locale];
}

export function getPrintSummary(locale: Locale) {
  return printSummaryByLocale[locale];
}

export function getPrintApproach(locale: Locale) {
  return printApproachByLocale[locale];
}

export function getPrintExperience(locale: Locale) {
  return printExperienceByLocale[locale];
}

export function getPrintProjects(locale: Locale) {
  const projects = cvProjectsByLocale[locale];
  const blurbs = printProjectBlurbsByLocale[locale];
  return projects.map((project) => ({
    title: project.title,
    stack: project.stack,
    description: blurbs[project.title],
  }));
}

/** @deprecated Use locale helpers */
export const cvProfile = cvProfileByLocale.en;
/** @deprecated Use locale helpers */
export const cvAbout = cvAboutByLocale.en;
/** @deprecated Use locale helpers */
export const cvCapabilities = cvCapabilitiesByLocale.en;
/** @deprecated Use locale helpers */
export const cvExperience = cvExperienceByLocale.en;
/** @deprecated Use locale helpers */
export const cvProjects = cvProjectsByLocale.en;
/** @deprecated Use locale helpers */
export const cvSkills = cvSkillsByLocale.en;
/** @deprecated Use locale helpers */
export const cvWorkflow = cvWorkflowByLocale.en;
/** @deprecated Use locale helpers */
export const cvInterests = cvInterestsByLocale.en;
/** @deprecated Use locale helpers */
export const cvClosing = cvClosingByLocale.en;
/** @deprecated Use locale helpers */
export const cvNav = cvNavByLocale.en;
