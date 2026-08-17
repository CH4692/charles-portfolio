import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

import CredibilityStrip from '@/components/CredibilityStrip';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type Props = {
  children: React.ReactNode;
  about: React.ReactNode;
  approach: React.ReactNode;
  home: React.ReactNode;
  projects: React.ReactNode;
  skills: React.ReactNode;
  contacts: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function PortfolioLayout({
  about,
  approach,
  home,
  projects,
  skills,
  contacts,
  params,
}: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Common');

  return (
    <>
      <a href="#main" className="skip-link">
        {t('skipToContent')}
      </a>
      <Navbar />
      <main id="main" className="pt-[var(--header-h)]">
        <div className="px-5 sm:px-9">{home}</div>
        <CredibilityStrip />
        <div className="px-5 sm:px-9">
          {projects}
          {approach}
          {about}
          {skills}
          {contacts}
        </div>
      </main>
      <Footer />
    </>
  );
}
