export const cvProfile = {
  name: 'Charles Heller',
  title: 'Senior Software Engineer · Quality Engineering · Test Data & Environment Management',
  location: 'Germany · remote-friendly',
  email: 'charles@charlesheller.dev',
  website: 'https://www.charlesheller.dev',
  github: 'https://github.com/CH4692',
  linkedin: 'https://www.linkedin.com/in/charles-heller-068b53233/',
  summary:
    'I build reliable software by combining enterprise quality engineering with modern full-stack development.',
  intro: [
    'My career began in software testing, where I learned that quality isn’t something you verify at the end of a project — it’s something you design into the product from the beginning. Over the years, I expanded into test automation, test management, test data management, environment management, cloud transformation, and software engineering.',
    'Today I build modern web applications while applying the same engineering discipline used in enterprise environments. My goal is simple: create software that is scalable, maintainable, thoroughly tested, and ready for production.',
  ],
};

export const cvAbout = {
  lead: 'I enjoy solving complex technical challenges and turning ideas into high-quality software products.',
  body: [
    'With several years of experience in enterprise software delivery, I understand both the technical and organisational aspects of building reliable systems. I work comfortably across development, testing, cloud infrastructure, automation, and product delivery.',
    'Whether I’m developing a SaaS platform, designing a test strategy, or introducing modern testing practices for enterprise teams, I focus on long-term maintainability rather than short-term fixes.',
  ],
};

export const cvCapabilities = [
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
];

export const cvExperience = [
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
];

export const cvProjects = [
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
];

export const cvSkills = [
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
];

export const cvWorkflow = [
  'Understanding the business problem',
  'Designing scalable architectures',
  'Building maintainable software',
  'Automating testing from the beginning',
  'Deploying continuously',
  'Monitoring and improving over time',
];

export const cvInterests = [
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
];

export const cvClosing = {
  title: "Let's build reliable software",
  text: 'Whether you need a modern web application, enterprise quality engineering, automated testing, or someone who can bridge development and quality assurance — I’d be happy to hear about your project.',
  tagline: 'Software engineering with quality built in — not added later.',
};

export const cvNav = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'What I do' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'approach', label: 'How I work' },
  { id: 'contact-cta', label: 'Contact' },
];
