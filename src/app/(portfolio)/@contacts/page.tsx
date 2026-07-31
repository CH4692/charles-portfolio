import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

import Title from '@/components/Title';
import { availability } from '@/data/experience';

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
          {availability} I help teams ship fullstack products with automation and test strategy
          baked in from day one.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:charles@charlesheller.dev?subject=Project%20inquiry%20%2F%20role"
            className="text-background from-primary to-cta-grad-end hover:shadow-primary focus-ring inline-flex items-center gap-2 rounded-lg bg-gradient-to-br px-6 py-3 font-medium transition duration-300 hover:scale-[1.03]"
          >
            <Mail className="h-5 w-5" />
            charles@charlesheller.dev
          </a>
          <a
            href="https://www.linkedin.com/in/charles-heller-068b53233/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary/60 hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-medium text-white transition duration-300 hover:bg-white/5"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <Link
            href="/cv"
            className="hover:border-primary focus-ring inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition duration-300 hover:bg-white/5"
          >
            <FileText className="h-5 w-5" />
            View CV
          </Link>
        </div>

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
