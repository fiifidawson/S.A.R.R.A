import Image from "next/image";
import Link from "next/link";

const HR = () => <hr className="border-none h-px bg-[#1f1f1f]" />;

export default function Hero() {
  return (
    <section>

      {/* ── Heading + CTAs ── */}
      <div className="px-[120px] max-md:px-10 max-sm:px-5 pt-14 pb-10 max-sm:pt-9 max-sm:pb-7">
        <h1
          className="text-[#fafafa] font-normal leading-[1.08] tracking-tight mb-9"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)" }}
        >
          Semi-Autonomous<br />
          Rehabilitation<br />
          Robotic Hand
        </h1>

        <div className="flex items-center gap-5 flex-wrap">
          <Link
            href="/progress"
            className="text-[13px] font-medium text-[#111] bg-accent px-5 py-2.5 hover:opacity-80 transition-opacity"
          >
            View Progress
          </Link>
          <Link
            href="/build"
            className="text-[13px] text-[#fafafa] hover:text-accent transition-colors"
          >
            Build
          </Link>
        </div>
      </div>

      <HR />

      {/* ── Image ── */}
      <div className="px-[120px] max-md:px-10 max-sm:px-5 py-4">
        <Image
          src="/hand.png"
          alt="S.A.R.R.A robotic hand"
          width={1400}
          height={900}
          className="w-full h-auto block"
          priority
        />
      </div>

      <HR />

      {/* ── Body text ── */}
      <div className="px-[120px] max-md:px-10 max-sm:px-5 py-16 max-sm:py-10">
        <p className="text-[15px] text-[#fafafa] leading-[1.75] max-w-[600px]">
          S.A.R.R.A is a robotic hand that mirrors the movement of a real human
          hand in real time. A live camera records the user&apos;s hand, and a
          machine learning algorithm translates those gestures into precise
          mechanical movements across four degrees of freedom. Started in 2023
          as an undergraduate research project, S.A.R.R.A explores how
          accessible, vision-based control can make assistive robotic technology
          more approachable for rehabilitation.
        </p>
        <p className="text-[15px] text-[#fafafa] leading-[1.75] max-w-[600px]">
          ...
        </p>
        <p className="text-[15px] text-[#fafafa] leading-[1.75] max-w-[600px]">
          I started this in my second year (2023) as a research project on using 
          vision-based control to make assistive robotics more accessible for rehab.
          I was broke and school got intense, so I had to pause. Now I’m back, 
          picking up where I left off.
        </p>
      </div>

    </section>
  );
}
