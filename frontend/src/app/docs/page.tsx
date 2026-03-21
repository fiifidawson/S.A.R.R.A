import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Divider = () => <hr className="border-none h-px bg-[#1f1f1f]" />;

export default function DocsPage() {
  return (
    <>
      <Nav />
      <Divider />

      <main className="px-[120px] max-md:px-10 max-sm:px-5 py-[70px] max-sm:py-10 min-h-[75vh] flex flex-col justify-center">
        <div className="flex flex-col gap-8 max-w-[520px]">
          <span className="text-[11px] tracking-[0.18em] uppercase text-[#3B82F6]">
            Status
          </span>

          <h1
            className="text-[#fafafa] font-normal leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            In Progress
          </h1>

          <p className="text-[15px] text-[#525252] leading-relaxed">
            The full project documentation is being written up. Come back
            soon — it will cover the hardware design, gesture recognition
            pipeline, and control algorithm in detail.
          </p>

          {/* Animated loading dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="block w-1.5 h-1.5 rounded-full bg-[#3B82F6]"
                style={{
                  animation: `dotPulse 1.8s ease-in-out ${i * 0.18}s infinite`,
                }}
              />
            ))}
          </div>

          <a
            href="https://github.com/fiifidawson/S.A.R.R.A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#fafafa] hover:text-accent transition-colors w-fit"
          >
            View source on GitHub &nbsp;→
          </a>
        </div>
      </main>

      <Divider />
      <Footer />
    </>
  );
}
