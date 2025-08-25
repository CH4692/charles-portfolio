export default function PulsingBackground() {
  return (
    <div className="absolute -z-10 min-h-screen w-screen">
      <div
        id="lg-circle"
        className="bg-animate absolute top-[15%] left-[15%] -z-10 h-100 w-100 animate-pulse rounded-full opacity-20 blur-3xl [--pulse-max:0.05] [--pulse-min:0.40] [animation-duration:3000ms] md:top-[15%] md:left-[25%]"
      ></div>
      <div
        id="sm-circle"
        className="bg-animate absolute top-[15%] left-[15%] -z-10 h-60 w-60 animate-pulse rounded-full opacity-20 blur-3xl [--pulse-max:0.5] [--pulse-min:0.40] [animation-delay:1500ms] [animation-duration:3000ms] md:top-[35%] md:left-[60%]"
      ></div>
    </div>
  );
}
