import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import CtaButton from '@/components/CtaButton';
import Icons from '@/components/Icons';
import { availability } from '@/data/experience';
import { heroProject } from '@/data/projects';

export default function Home() {
  return (
    <section
      id="home"
      className="hero-enter flex min-h-[calc(100dvh-var(--header-h))] scroll-mt-[var(--header-h)] flex-col justify-center gap-10 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
    >
      <div className="mt-8 w-full max-w-xl min-w-0 text-left sm:mt-12">
        <p className="text-cool-grey mb-3 font-sans text-sm tracking-[0.22em] uppercase">
          Quality-Driven Software Engineer
        </p>

        <h1 className="font-display from-cta-grad-start to-cta-grad-end bg-gradient-to-r bg-clip-text text-4xl break-words text-transparent sm:text-5xl lg:text-6xl">
          Charles Heller
        </h1>

        <h2 className="font-display mt-4 text-2xl leading-snug sm:text-3xl lg:text-[2.15rem]">
          I build reliable web apps — with testing, architecture, and automation from day one.
        </h2>

        <p className="text-cool-grey mt-5 mb-4 max-w-xl leading-7">
          Enterprise QA and test management experience meets modern fullstack delivery. Based in
          Germany · open to remote and hybrid roles.
        </p>

        <p className="text-primary/90 mb-6 text-sm font-medium tracking-wide">{availability}</p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaButton
            addClass="w-full sm:w-auto"
            name="View selected work"
            targetId="work"
            variant="primary"
          />
          <Link
            href="/cv"
            className="border-primary/60 hover:border-primary focus-ring inline-flex w-full items-center justify-center rounded-lg border px-5 py-2.5 font-medium text-white transition duration-300 hover:scale-[1.03] hover:bg-white/5 sm:w-auto"
          >
            View CV
          </Link>
        </div>

        <p className="text-cool-grey mt-7 text-sm tracking-wide">
          Swiss Life · Playwright / TypeScript · Next.js
        </p>

        <Icons />
      </div>

      <div className="hero-portrait w-full max-w-lg shrink-0">
        <Link
          href={`/work/${heroProject.slug}`}
          className="group hover:border-primary/40 block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.06]"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={heroProject.image}
              alt={`${heroProject.title} preview`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 512px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-4 sm:p-5">
            <p className="text-primary text-xs tracking-[0.18em] uppercase">Featured case study</p>
            <div className="mt-2 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold">{heroProject.title}</h3>
                <p className="text-cool-grey mt-2 text-sm leading-6">{heroProject.result}</p>
              </div>
              <ExternalLink className="group-hover:text-primary mt-1 h-4 w-4 shrink-0 text-white/50 transition" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
