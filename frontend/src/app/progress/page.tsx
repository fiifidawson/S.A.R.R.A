import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const entries = [
  {
    label: "The Spark",
    note: "Where it all started. Photos are on the drive... somewhere.",
  },
  {
    label: "Late Nights",
    note: "Had a cool video of this. Laptop thief has it now.",
  },
  {
    label: "First Moves",
    note: "The model works, the visuals can wait.",
  },
  {
    label: "Pieces Together",
    note: "Product > pictures. Always.",
  },
  {
    label: "Plot Twist",
    note: "Trust me, it looks cooler in person.",
  },
  {
    label: "The Grind",
    note: "Screenshots exist on my Google Drive, check the footer.",
  },
  {
    label: "It's Alive",
    note: "Once it's done done, you'll get the visuals. Pinky promise.",
  },
  {
    label: "Fine Tuning",
    note: "Not the most photogenic milestone tbh.",
  },
  {
    label: "Fresh Start",
    note: "New laptop, fresh start. Stay tuned.",
  },
];

const Divider = () => <hr className="border-none h-px bg-[#1f1f1f]" />;

export default function ProgressPage() {
  const rows: (typeof entries)[] = [];
  for (let i = 0; i < entries.length; i += 3) {
    rows.push(entries.slice(i, i + 3));
  }

  return (
    <>
      <Nav />
      <Divider />

      <main className="px-[120px] max-md:px-10 max-sm:px-5 py-[70px] max-sm:py-10">
        {/* Page heading */}
        <h1
          className="text-[#fafafa] font-normal leading-[1.2] mb-20 max-sm:mb-12"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}
        >
          Progress
        </h1>

        <p className="text-[14px] text-[#fafafa]/40 leading-[1.75] max-w-[520px] mb-16 max-sm:mb-10">
          Yes, the images are missing. Most of
          the visuals live on my{" "}
          <a
            href="https://docs.google.com/document/d/1Dl_-t2hCFhnAevpfKmGbAk_O1FkbCBMr/edit?usp=share_link&ouid=108901671150894161610&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3B82F6] hover:underline"
          >
            Google Drive
          </a>{" "}
          . The rest got lost when my old laptop was stolen, so shoutout to whoever has
          it. Anyway, the product matters more than pretty pictures of the
          product. Once S.A.R.R.A is actually done, I&apos;ll make this page
          worth looking at.
        </p>

        {/* Connected gallery — desktop */}
        <div className="hidden sm:block">
          {rows.map((row, ri) => (
            <div key={ri}>
              {/* Row */}
              <div className="relative">
                {/* Horizontal connecting line across the dots */}
                <div
                  className="absolute h-px bg-[#333]"
                  style={{
                    top: 5,
                    left: "calc(100% / 6)",
                    right: "calc(100% / 6)",
                  }}
                />

                {/* 3-column grid */}
                <div className="grid grid-cols-3">
                  {row.map((entry, ci) => (
                    <div key={ci} className="flex flex-col items-center px-4">
                      {/* Dot */}
                      <div className="w-[10px] h-[10px] rounded-full border border-[#525252] bg-[#111] relative z-10" />

                      {/* Stem */}
                      <div className="w-px h-3 bg-[#333]" />

                      {/* Label tag */}
                      <div className="bg-[#1a1a1a] border border-[#222] px-3 py-1 mb-2">
                        <span className="text-[11px] text-[#fafafa]/60 whitespace-nowrap">
                          {entry.label}
                        </span>
                      </div>

                      {/* Image placeholder */}
                      <div className="relative w-full max-w-[220px] aspect-[4/3] bg-[#1a1a1a] border border-[#222] overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#333"
                            strokeWidth="1"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="1" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                          </svg>
                        </div>
                      </div>

                      {/* Note */}
                      <p className="text-[12px] text-[#fafafa]/30 leading-relaxed mt-2 text-center max-w-[200px]">
                        {entry.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical connector to next row */}
              {ri < rows.length - 1 && (
                <div className="relative h-12">
                  <div
                    className="absolute top-0 bottom-0 w-px bg-[#333]"
                    style={{
                      left:
                        ri % 2 === 0
                          ? "calc(100% * 5 / 6)"
                          : "calc(100% / 6)",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile — simple vertical list */}
        <div className="sm:hidden flex flex-col gap-8">
          {entries.map((entry, i) => (
            <div key={i} className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="w-[8px] h-[8px] rounded-full border border-[#525252] bg-[#111]" />
                <span className="text-[12px] text-[#fafafa]/60">{entry.label}</span>
              </div>
              <div className="relative w-full aspect-[4/3] bg-[#1a1a1a] border border-[#222] overflow-hidden ml-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="1" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
              <p className="text-[12px] text-[#fafafa]/30 leading-relaxed ml-4">
                {entry.note}
              </p>
            </div>
          ))}
        </div>

        {/* Continue indicator */}
        <div className="mt-14 flex items-center gap-3">
          <span className="text-[13px] text-[#525252] italic tracking-wide">
            Continue
          </span>
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-1 h-1 rounded-full bg-[#3B82F6]"
                style={{
                  animation: `dotPulse 1.8s ease-in-out ${i * 0.25}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </main>

      <Divider />
      <Footer />
    </>
  );
}
