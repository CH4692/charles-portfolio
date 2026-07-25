import Image from 'next/image';

import CtaButton from '@/components/CtaButton';
import Icons from '@/components/Icons';

export default function Home() {
  return (
    <section
      id="home"
      className="hero-enter flex min-h-[calc(100dvh-var(--header-h))] scroll-mt-[var(--header-h)] flex-col justify-center gap-12 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
    >
      <div className="mt-8 w-full max-w-2xl min-w-0 text-left sm:mt-16">
        <p className="text-cool-grey mb-3 font-sans text-sm tracking-[0.22em] uppercase">
          Quality-Driven Software Engineer
        </p>

        <h1 className="font-display from-cta-grad-start to-cta-grad-end bg-gradient-to-r bg-clip-text text-4xl break-words text-transparent sm:text-5xl lg:text-7xl">
          Charles Heller
        </h1>

        <h2 className="font-display mt-4 text-2xl leading-snug sm:text-3xl lg:text-4xl">
          I build reliable web apps — with testing, architecture, and automation from day one.
        </h2>

        <p className="text-cool-grey mt-6 mb-8 max-w-xl leading-8">
          Enterprise QA and test management experience meets modern fullstack delivery. I ship
          products teams can trust — and the automation that keeps them that way.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaButton
            addClass="w-full sm:w-auto"
            name="View selected work"
            targetId="work"
            variant="primary"
          />
          <CtaButton
            addClass="w-full sm:w-auto"
            name="Get in touch"
            targetId="contact"
            variant="secondary"
          />
        </div>

        <p className="text-cool-grey mt-8 text-sm tracking-wide">
          Swiss Life · Playwright / TypeScript · Next.js
        </p>

        <Icons />
      </div>

      <div className="hero-portrait flex shrink-0 justify-center lg:justify-end">
        <Image
          src="/me.png"
          alt="Portrait of Charles Heller"
          width={420}
          height={620}
          priority
          className="h-auto max-w-[220px] opacity-90 sm:max-w-[280px] lg:max-w-[380px]"
        />
      </div>
    </section>
  );
}
