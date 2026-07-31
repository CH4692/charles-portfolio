import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function LegalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="pt-[var(--header-h)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
