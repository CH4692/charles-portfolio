import Title from '@/components/Title';
import { principles } from '@/data/approach';

export default function Approach() {
  return (
    <section
      id="approach"
      className="from-sec-gra-start to-background flex min-h-[calc(100dvh-var(--header-h))] w-full scroll-mt-[var(--header-h)] items-center bg-linear-to-br py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Title>How I Work</Title>
        <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold md:text-4xl">
          Quality is part of how the product gets built — not a phase at the end.
        </h2>
        <p className="text-cool-grey mt-4 max-w-2xl leading-7">
          This is the wedge I bring versus pure frontend profiles and pure manual QA: I ship
          features and design the systems that keep them reliable.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {principles.map((principle, index) => (
            <div key={principle.title} className="border-t border-white/10 pt-6">
              <p className="text-primary font-display text-sm tracking-[0.2em]">0{index + 1}</p>
              <h3 className="font-display mt-3 text-xl font-semibold">{principle.title}</h3>
              <p className="text-cool-grey mt-3 text-sm leading-7">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
