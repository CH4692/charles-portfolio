import Image from 'next/image';

import CtaButton from '@/components/CtaButton';
import Icons from '@/components/Icons';

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100dvh-var(--header-h))] scroll-mt-[var(--header-h)] flex-col justify-center gap-16 py-12 md:flex-row md:items-center md:justify-between"
    >
      <div className="mt-8 max-w-2xl text-left sm:mt-24">
        <p className="text-cool-grey mb-3 text-sm tracking-[0.2em] uppercase">
          QA Automation Engineer
        </p>

        <h1 className="from-cta-grad-start to-cta-grad-end bg-gradient-to-r bg-clip-text text-4xl text-transparent md:text-7xl">
          Charles Heller
        </h1>

        <h2 className="mt-3 text-2xl md:text-5xl">
          Building quality through automation and modern web development
        </h2>

        <p className="text-cool-grey mt-8 mb-12 max-w-xl leading-8">
          I help teams build reliable web applications with a strong focus on
          <strong> test automation</strong>, <strong>quality engineering</strong>, and
          <strong> maintainable software</strong>. My main tools are Playwright, Selenium,
          TypeScript, React, and Next.js.
        </p>

        <div className="flex flex-col gap-4 md:flex-row">
          <CtaButton addClass="w-full md:w-xs" name="Contact Me" />
        </div>

        <Icons />
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/me.png"
          alt="Portrait of Charles Heller"
          width={420}
          height={620}
          className="h-auto max-w-[260px] opacity-80 sm:max-w-[340px] md:max-w-[420px]"
        />
      </div>
    </section>
  );
}
