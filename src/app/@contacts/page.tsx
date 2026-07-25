import { Github, Linkedin, Mail } from 'lucide-react';

import Title from '@/components/Title';

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
          Open for freelance, contract, and full-time opportunities in quality-driven software
          engineering — fullstack delivery with automation and test strategy baked in.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:charles@charlesheller.dev"
            className="text-background from-primary to-cta-grad-end hover:shadow-primary inline-flex items-center gap-2 rounded-lg bg-gradient-to-br px-6 py-3 font-medium transition duration-300 hover:scale-[1.03]"
          >
            <Mail className="h-5 w-5" />
            charles@charlesheller.dev
          </a>
          <a
            href="https://www.linkedin.com/in/charles-heller-068b53233/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary/60 hover:border-primary inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-medium text-white transition duration-300 hover:bg-white/5"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/CH4692"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/70 transition hover:text-white"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
