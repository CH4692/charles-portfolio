import Image from 'next/image';

import CtaButton from '@/components/CtaButton';
import Icons from '@/components/Icons';

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex min-h-[calc(100dvh-var(--header-h))] scroll-mt-[var(--header-h)] flex-col justify-center gap-16 md:flex-row md:justify-normal"
      >
        <div className="mt-8 text-left sm:mt-50">
          <h1 className="to-cta-grad-end from-cta-grad-start bg-gradient-to-r bg-clip-text text-left text-4xl text-transparent md:text-7xl">
            Charles Heller
          </h1>
          <h2 className="text-2xl md:text-6xl">Fullstack Developer</h2>
          <p className="text-cool-grey mt-8 mb-12 max-w-xl">
            I design, build, and test modern web applications with a strong focus on
            <strong> quality</strong>,<strong> automation</strong>, and
            <strong> user experience</strong>. With hands-on experience in frontend and backend
            development, I create reliable systems that look great and perform even better.
          </p>
          <CtaButton addClass="w-full md:w-xs" name="Contact Me" />
          <Icons />
        </div>
        <div className="fixed -z-100 md:static">
          <Image
            src="/me.png"
            alt="Me"
            width={652}
            height={977}
            className="opacity-30 sm:opacity-100"
          />
        </div>
      </section>
    </>
  );
}
