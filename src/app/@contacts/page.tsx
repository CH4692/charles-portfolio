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

        {/* Text */}
        <p className="text-cool-grey mt-6 leading-7">
          I’m currently open for freelance and contract opportunities. If you’re looking for support
          in QA, test automation or modern web development, feel free to reach out.
        </p>

        {/* Email Card */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3">
            <Mail className="h-5 w-5 text-white/80" />
            <a
              href="mailto:charles@charlesheller.dev"
              className="text-lg font-medium hover:underline"
            >
              charles@charlesheller.dev
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/YOUR_GITHUB" target="_blank">
            <Github className="h-6 w-6 text-white/70 hover:text-white" />
          </a>

          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">
            <Linkedin className="h-6 w-6 text-white/70 hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
