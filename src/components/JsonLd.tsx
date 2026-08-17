import { SITE_URL } from '@/i18n/paths';

type Props = { locale: string };

export default function JsonLd({ locale }: Props) {
  const isDe = locale === 'de';
  const pageUrl = isDe ? `${SITE_URL}/de` : SITE_URL;

  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Charles Heller',
    url: SITE_URL,
    image: `${SITE_URL}/me.png`,
    email: 'mailto:charles@charlesheller.dev',
    jobTitle: isDe
      ? 'Software Engineer · Quality Engineering · Testautomation'
      : 'Software Engineer · Quality Engineering · Test Automation',
    description: isDe
      ? 'Charles Heller ist Software Engineer in Deutschland. Er verbindet Enterprise Quality Engineering mit modernem Fullstack-Delivery (Next.js, TypeScript, Playwright).'
      : 'Charles Heller is a software engineer based in Germany. He combines enterprise quality engineering with modern fullstack delivery (Next.js, TypeScript, Playwright).',
    nationality: 'German',
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
      'TypeScript',
      'Next.js',
      'React',
      'Playwright',
      'Test Automation',
      'Quality Engineering',
      'Test Data Management',
      'Test Environment Management',
      'Fullstack Development',
      'Software Quality',
    ],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Charles Heller',
    url: SITE_URL,
    inLanguage: ['en', 'de'],
    publisher: { '@id': `${SITE_URL}/#person` },
    about: { '@id': `${SITE_URL}/#person` },
  };

  const profilePage = {
    '@type': 'ProfilePage',
    '@id': `${pageUrl}/#profile`,
    url: pageUrl,
    name: isDe
      ? 'Charles Heller — Software Engineer Portfolio'
      : 'Charles Heller — Software Engineer Portfolio',
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
