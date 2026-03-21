import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/**
 * Timeline items — add/remove entries freely.
 *
 * To add media, set `media` to one of:
 *   { type: "image", src: "/media/your-file.jpg", alt: "description" }
 *   { type: "video", src: "/media/your-file.mp4" }
 *   { type: "youtube", id: "VIDEO_ID" }
 */
const entries: TimelineEntry[] = [
  {
    date: "2023",
    title: "Initial prototype",
    description:
      "First mechanical assembly of the arm structure. Sourced servo motors, 3D-printed the forearm and hand components based on the InMoov open-source design.",
    media: null,
  },
  {
    date: "2023",
    title: "Servo calibration",
    description:
      "Wired up the Arduino and ran the first potentiometer-based control tests. Mapped sensor values to motor directions for basic bidirectional movement.",
    media: null,
  },
  {
    date: "2023",
    title: "Gesture recognition",
    description:
      "Integrated the camera module and began training the gesture recognition pipeline. The ML model learns to map hand positions to arm movements in real time.",
    media: null,
  },
  {
    date: "2024",
    title: "Full arm demo",
    description:
      "End-to-end demonstration of gesture-controlled arm movement across all four degrees of freedom — the first fully integrated run of the system.",
    media: null,
  },
];

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string }
  | { type: "youtube"; id: string }
  | null;

type TimelineEntry = {
  date: string;
  title: string;
  description: string;
  media: MediaItem;
};

function Media({ media }: { media: MediaItem }) {
  if (!media) {
    return (
      <div className="w-full aspect-video bg-[#1c1c1c] flex items-center justify-center">
        <span className="text-[13px] text-[#525252] tracking-wide">Add media</span>
      </div>
    );
  }
  if (media.type === "image") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={media.src} alt={media.alt} className="w-full aspect-video object-cover" />;
  }
  if (media.type === "video") {
    return <video src={media.src} controls className="w-full aspect-video" />;
  }
  return (
    <iframe
      src={`https://www.youtube.com/embed/${media.id}`}
      className="w-full aspect-video border-0"
      allowFullScreen
    />
  );
}

const Divider = () => (
  <hr className="border-none h-px bg-[#1f1f1f]" />
);

export default function ProgressPage() {
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

        {/* Timeline */}
        <div className="relative">

          {/* Vertical connecting line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-[#525252] max-sm:left-[5px]" />

          <div className="flex flex-col gap-0">
            {entries.map((entry, i) => (
              <div key={i} className="relative flex gap-10 max-sm:gap-5 pb-20 max-sm:pb-12 last:pb-0">

                {/* Dot on the line */}
                <div className="relative z-10 mt-[6px] shrink-0">
                  <div className="w-[15px] h-[15px] max-sm:w-[11px] max-sm:h-[11px] border border-[#525252] bg-[#111]" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-6 max-w-[720px]">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <span className="text-[13px] text-[#525252]">{entry.date}</span>
                    <h2 className="text-[20px] max-sm:text-[17px] text-[#fafafa] font-normal leading-snug">
                      {entry.title}
                    </h2>
                  </div>

                  {/* Media */}
                  <div className="w-full max-w-[600px]">
                    <Media media={entry.media} />
                  </div>

                  <p className="text-[15px] text-[#fafafa]/70 leading-relaxed max-w-[560px]">
                    {entry.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </main>

      <Divider />
      <Footer />
    </>
  );
}
