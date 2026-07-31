import CredibilityStrip from '@/components/CredibilityStrip';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function PortfolioLayout({
  about,
  approach,
  home,
  projects,
  skills,
  contacts,
}: Readonly<{
  children: React.ReactNode;
  about: React.ReactNode;
  approach: React.ReactNode;
  home: React.ReactNode;
  projects: React.ReactNode;
  skills: React.ReactNode;
  contacts: React.ReactNode;
}>) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
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
