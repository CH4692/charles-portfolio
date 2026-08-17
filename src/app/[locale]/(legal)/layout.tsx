import { getTranslations, setRequestLocale } from 'next-intl/server';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LegalLayout({ children, params }: Props) {
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
        {children}
      </main>
      <Footer />
    </>
  );
}
