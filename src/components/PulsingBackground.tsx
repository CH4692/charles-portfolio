export default function PulsingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* großer Kreis */}
      <div className="bg-animate will-change:opacity,filter absolute top-[22vh] left-1/2 h-[clamp(16rem,60vw,28rem)] w-[clamp(16rem,60vw,28rem)] -translate-x-1/2 rounded-full [--alpha-max:.35] [--alpha-min:.15] [--blur-max:36px] [--blur-min:24px] [--dur:3200ms] motion-safe:[animation:pulseOpacity_var(--dur)_ease-in-out_infinite] motion-reduce:animate-none sm:opacity-20 sm:blur-2xl md:top-[15%] md:left-[25%] md:-translate-x-0 md:blur-3xl" />

      {/* kleiner Kreis – Start um eine halbe Periode vorziehen */}
      <div className="bg-animate will-change:opacity,filter /* -½T als Shorthand */ absolute right-[10%] bottom-[12vh] h-[clamp(10rem,40vw,18rem)] w-[clamp(10rem,40vw,18rem)] rounded-full [--alpha-max:.30] [--alpha-min:.10] [--blur-max:28px] [--blur-min:18px] [--dur:3200ms] motion-safe:[animation:pulseOpacity_var(--dur)_ease-in-out_-1600ms_infinite] motion-safe:[animation-fill-mode:both] motion-reduce:animate-none sm:opacity-20 sm:blur-xl md:top-[35%] md:right-auto md:bottom-auto md:left-[60%] md:blur-2xl" />
    </div>
  );
}
