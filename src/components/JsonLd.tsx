export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Charles Heller',
    url: 'https://www.charlesheller.dev',
    email: 'mailto:charles@charlesheller.dev',
    jobTitle: 'Quality-Driven Software Engineer',
    sameAs: ['https://github.com/CH4692', 'https://www.linkedin.com/in/charles-heller-068b53233/'],
    knowsAbout: [
      'TypeScript',
      'Next.js',
      'Playwright',
      'Test Automation',
      'Software Quality',
      'Fullstack Development',
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
