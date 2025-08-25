import { Download, MoveDown } from 'lucide-react';
import Image from 'next/image';

import CtaButton from '@/components/CtaButton';
import CvButton from '@/components/CvButton';
import PulsingBackground from '@/components/PulsingBackground';

export default function Home() {
  return (
    <>
      <PulsingBackground />
      <section
        id="home"
        className="mt-[var(--header-h)] flex min-h-[calc(100dvh-var(--header-h))] w-auto scroll-mt-[var(--header-h)] flex-col items-center pt-14 md:pt-0"
      >
        <Image
          alt="Logo"
          width={100}
          height={100}
          src="/brand/Logo_standard2.png"
          className="mt-8 sm:size-32 md:size-36 lg:size-40"
        />
        <div className="mt-15 justify-center">
          <h1 className="font-sans text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Hi, I’m{' '}
            <span className="from-primary to-cta-grad-end bg-gradient-to-br bg-clip-text text-transparent">
              Charles Heller
            </span>
          </h1>
          <h2 className="text-cool-grey text-muted-foreground mt-6 text-center text-xl font-bold md:text-3xl lg:text-4xl">
            Developer & Quality Engineer
          </h2>
          <p className="text-md sm:2xl text-cool-grey text-muted-foreground mt-6 max-h-15 max-w-2xl text-center text-balance lg:text-2xl">
            Building robust applications and ensuring quality through comprehensive development and
            engineering strategies
          </p>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 md:flex-row">
          <CtaButton name="View My Work" addClass="flex gap-1" icon={<MoveDown />}></CtaButton>
          <CvButton name="Download CV" icon={<Download />} />
        </div>
      </section>
    </>
  );
}
