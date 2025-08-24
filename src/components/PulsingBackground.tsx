export default function PulsingBackground() {
  return (
    <div className="absolute -z-10 w-screen min-h-screen">
      <div className=" absolute -z-10 animate-pulse w-100 h-100 blur-3xl opacity-20 top-[15%] left-[25%] bg-animate rounded-full [animation-duration:3000ms] [--pulse-max:0.05] [--pulse-min:0.40]"></div>
      <div className=" absolute -z-10 animate-pulse blur-3xl opacity-20 w-60 h-60 top-[35%] left-[60%] bg-animate rounded-full [animation-delay:1500ms] [animation-duration:3000ms] [--pulse-max:0.5] [--pulse-min:0.40]"></div>
    </div>
  );
}
