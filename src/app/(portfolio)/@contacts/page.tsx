import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

import ContactForm from '@/components/ContactForm';
import Title from '@/components/Title';
import { availability } from '@/data/experience';
import { references } from '@/data/proof';

export default function Contact() {
  return (
    <section
      id="contact"
      className="from-sec-gra-start to-background flex min-h-[calc(100dvh-var(--header-h))] w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-3xl px-4 text-center">
        <Title>Get In Touch</Title>

        <h2 className="font-display mt-6 text-3xl font-semibold md:text-4xl">
          Let&apos;s build something reliable together.
        </h2>

        <p className="text-cool-grey mt-6 leading-7">
          {availability} Germany-based · remote-friendly. Tell me about the role or product — I
          usually reply within one business day.
        </p>

        <ContactForm />

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:charles@charlesheller.dev?subject=Project%20inquiry%20%2F%20role"
            className="border-primary/60 hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
          >
            <Mail className="h-4 w-4" />
            charles@charlesheller.dev
          </a>
          <a
            href="https://www.linkedin.com/in/charles-heller-068b53233/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <Link
            href="/cv"
            className="hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
          >
            <FileText className="h-4 w-4" />
            CV
          </Link>
          <a
            href="/charles-heller-cv.pdf"
            download
            className="hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
          >
            <FileText className="h-4 w-4" />
            PDF
          </a>
        </div>

        <blockquote className="text-cool-grey mx-auto mt-10 max-w-xl text-sm leading-7 italic">
          “{references[0].quote}”
          <footer className="text-cool-grey/80 mt-2 text-xs tracking-wide uppercase not-italic">
            {references[0].attribution}
          </footer>
        </blockquote>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/CH4692"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring rounded-md text-white/70 transition hover:text-white"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
