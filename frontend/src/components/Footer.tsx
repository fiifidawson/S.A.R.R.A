import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-[120px] max-md:px-10 max-sm:px-5 py-12 max-sm:py-8 grid grid-cols-3 max-sm:grid-cols-1 gap-10 max-sm:gap-7">

      {/* Branding */}
      <div className="flex flex-col gap-3 col-span-1">
        <span className="text-[14px] text-[#fafafa]">S.A.R.R.A</span>
        <p className="text-[13px] text-[#525252] leading-relaxed max-w-[220px]">
          Vision-based control for accessible{" "}
          <span className="text-accent">rehabilitation</span> robotics.
          Started 2023.
        </p>
      </div>

      {/* Navigate */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] tracking-[0.14em] uppercase text-[#525252] mb-1">
          Navigate
        </span>
        <Link
          href="/progress"
          className="text-[14px] text-[#fafafa] hover:text-accent transition-colors w-fit"
        >
          Progress
        </Link>
        <Link
          href="/build"
          className="text-[14px] text-[#fafafa] hover:text-accent transition-colors w-fit"
        >
          Build
        </Link>
      </div>

      {/* Connect */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] tracking-[0.14em] uppercase text-[#525252] mb-1">
          Connect
        </span>
        <a
          href="https://github.com/fiifidawson/S.A.R.R.A"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[#fafafa] hover:text-accent transition-colors w-fit"
        >
          GitHub
        </a>
        <a
          href="https://docs.google.com/document/d/1Dl_-t2hCFhnAevpfKmGbAk_O1FkbCBMr/edit?usp=share_link&ouid=108901671150894161610&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[#fafafa] hover:text-accent transition-colors w-fit"
        >
          Documentation
        </a>
      </div>

    </footer>
  );
}
