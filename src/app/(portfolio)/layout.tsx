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
      <main id="main" className="px-5 pt-[var(--header-h)] sm:px-9">
        {home}
        {projects}
        {approach}
        {about}
        {skills}
        {contacts}
      </main>
      <Footer />
    </>
  );
}
