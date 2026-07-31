import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t px-5 py-10 sm:px-9">
      <div className="text-cool-grey mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Charles Heller · Quality-Driven Software Engineer</p>
        <nav aria-label="Legal" className="flex flex-wrap gap-4">
          <Link href="/cv" className="focus-ring hover:text-primary rounded-sm transition">
            CV
          </Link>
          <a
            href="/charles-heller-cv.pdf"
            download
            className="focus-ring hover:text-primary rounded-sm transition"
          >
            PDF
          </a>
          <Link
            href="/work/navissedes"
            className="focus-ring hover:text-primary rounded-sm transition"
          >
            Case study
          </Link>
          <Link href="/impressum" className="focus-ring hover:text-primary rounded-sm transition">
            Impressum
          </Link>
          <Link href="/datenschutz" className="focus-ring hover:text-primary rounded-sm transition">
            Datenschutz
          </Link>
          <a
            href="mailto:charles@charlesheller.dev"
            className="focus-ring hover:text-primary rounded-sm transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
