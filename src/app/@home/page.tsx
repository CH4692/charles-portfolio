import CtaButton from "@/components/CtaButton";
import CvButton from "@/components/CvButton";
import { Download, MoveDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen w-auto flex flex-col items-center">
      <Image
        alt="Logo"
        width={160}
        height={160}
        src="/brand/Logo_standard2.png"
        className="mt-8"
      />
      <div className="justify-center mt-15">
        <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-br from-primary to-cta-grad-end text-transparent bg-clip-text">
            Charles Heller
          </span>
        </h1>
        <h2 className="text-center mt-6 text-4xl font-bold text-cool-grey text-muted-foreground">
          Developer & Quality Engineer
        </h2>
        <p className="text-center text-balance mt-6 text-2xl max-h-15 max-w-2xl text-cool-grey text-muted-foreground">
          Building robust applications and ensuring quality through
          comprehensive development and engineering strategies
        </p>
      </div>
      <div className="mt-10 flex justify-between gap-4">
        <CtaButton
          name="View My Work"
          addClass="flex gap-1"
          icon={<MoveDown />}
        ></CtaButton>
        <CvButton name="Download CV" icon={<Download />} />
      </div>
    </section>
  );
}
