import { absoluteUrl, SITE_URL } from '@/i18n/paths';

type Props = { locale: string };

export default function JsonLd({ locale }: Props) {
  const isDe = locale === 'de';
  const pageUrl = absoluteUrl(isDe ? 'de' : 'en', '/');

  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Charles Heller',
    url: SITE_URL,
    image: `${SITE_URL}/me.png`,
    email: 'mailto:charles@charlesheller.dev',
    jobTitle: 'Software Engineer',
    description: isDe
      ? 'Charles Heller ist Software Engineer in Deutschland mit Schwerpunkt QA Automation, Playwright, Next.js und AWS.'
      : 'Charles Heller is a software engineer based in Germany specializing in QA Automation, Playwright, Next.js, and AWS.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Swiss Life',
    },
    sameAs: ['https://github.com/CH4692', 'https://www.linkedin.com/in/charles-heller-068b53233/'],
    knowsAbout: [
      'QA Automation',
      'Playwright',
      'Next.js',
      'TypeScript',
      'AWS',
      'Software Testing',
      'Test Automation',
      'Quality Engineering',
      'React',
      'Fullstack Development',
    ],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Charles Heller',
    alternateName: 'charlesheller.dev',
    url: SITE_URL,
    inLanguage: ['en', 'de'],
    publisher: { '@id': `${SITE_URL}/#person` },
    about: { '@id': `${SITE_URL}/#person` },
  };

  const profilePage = {
    '@type': 'ProfilePage',
    '@id': `${pageUrl}#profile`,
    url: pageUrl,
    name: isDe
      ? 'Charles Heller — Software Engineer & QA Automation'
      : 'Charles Heller — Software Engineer & QA Automation',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: { '@id': `${SITE_URL}/#person` },
    inLanguage: isDe ? 'de' : 'en',
  };

  const data = {
    '@context': 'https://schema.org',
    '@graph': [person, website, profilePage],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
