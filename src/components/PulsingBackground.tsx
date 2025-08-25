export default function PulsingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* großer Kreis */}
      <div className="bg-animate absolute top-[22vh] left-1/2 h-[clamp(16rem,60vw,28rem)] w-[clamp(16rem,60vw,28rem)] -translate-x-1/2 rounded-full opacity-15 blur-xl [--pulse-max:0.05] [--pulse-min:0.40] [animation-duration:3000ms] motion-safe:animate-pulse motion-reduce:animate-none sm:opacity-20 sm:blur-2xl md:top-[15%] md:left-[25%] md:-translate-x-0 md:blur-3xl" />

      {/* kleiner Kreis */}
      <div className="bg-animate absolute right-[10%] bottom-[12vh] h-[clamp(10rem,40vw,18rem)] w-[clamp(10rem,40vw,18rem)] rounded-full opacity-10 blur-lg [--pulse-max:0.5] [--pulse-min:0.40] [animation-delay:1500ms] [animation-duration:3000ms] motion-safe:animate-pulse motion-reduce:animate-none sm:opacity-20 sm:blur-xl md:top-[35%] md:right-auto md:bottom-auto md:left-[60%] md:blur-2xl" />
    </div>
  );
}
