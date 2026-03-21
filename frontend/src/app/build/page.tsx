import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const Divider = () => <hr className="border-none h-px bg-[#1f1f1f]" />;

/* ─── Data ─────────────────────────────────────────────────── */

const parts = [
  {
    name: "Arduino Uno R3",
    role: "Microcontroller",
    desc: "Reads potentiometer values and drives the motor outputs via digital pins.",
  },
  {
    name: "MG996R Servo Motors",
    role: "Actuation",
    desc: "High-torque servos for each finger joint — providing precise, repeatable movement.",
  },
  {
    name: "10 kΩ Potentiometers",
    role: "Sensing",
    desc: "Analogue inputs (A0, A1) that feed positional data back to the control loop.",
  },
  {
    name: "L298N Motor Driver",
    role: "Motor Control",
    desc: "H-bridge module that translates Arduino output signals into motor direction and speed.",
  },
  {
    name: "InMoov Hand (3D Printed)",
    role: "Structure",
    desc: "Open-source hand design by Gael Langevin — printed in PLA and used as the mechanical chassis.",
  },
  {
    name: "USB Webcam",
    role: "Vision Input",
    desc: "Captures the user's hand in real time, feeding frames into the gesture recognition pipeline.",
  },
  {
    name: "Flex Sensors",
    role: "Gesture Input",
    desc: "Measure finger bend angles on the control glove, used as an alternative input method.",
  },
  {
    name: "Jumper Wires & Breadboard",
    role: "Prototyping",
    desc: "Standard prototyping components for rapid iteration without permanent soldering.",
  },
];

const sources = [
  {
    label: "Arduino Project Hub",
    title: "zezarandrade — Robotic Arm",
    href: "https://projecthub.arduino.cc/zezarandrade/c9d53b71-0422-41dd-bda1-00d4899583f0",
    external: true,
  },
  {
    label: "GitHub",
    title: "Eben Kouao — Arduino Robot Arm",
    href: "https://github.com/EbenKouao/arduino-robot-arm",
    external: true,
  },
  {
    label: "inmoov.fr",
    title: "Gael Langevin — InMoov Hand & Forearm",
    href: "https://inmoov.fr/hand-and-forarm/",
    external: true,
  },
  {
    label: "Documentation",
    title: "S.A.R.R.A Project Documentation",
    href: "/docs",
    external: false,
  },
];

const videos = [
  {
    title: "Robotic Arm Controlled by Human Arm",
    href: "https://youtu.be/XZ63bZIfIoc",
    channel: "YouTube",
  },
  {
    title: "DIY Arduino Robot Arm — Controlled by Hand Gestures",
    href: "https://youtu.be/F0ZvF-FbCr0",
    channel: "YouTube",
  },
  {
    title: "Robot Arm Arduino Tutorial — Murtaza",
    href: "https://youtu.be/gmz7eOB-tCg",
    channel: "YouTube",
  },
];

const mlPseudo = `# 1. Load models
hand_detector  ← load_model("mediapipe_hands")
gesture_model  ← load_model("sarra_gesture_classifier")

# 2. Open camera
stream ← open_camera(device=0)

# 3. Inference loop
LOOP:
  frame     ← stream.read()
  landmarks ← hand_detector.detect(frame)   // 21 keypoints

  IF landmarks found:
    gesture ← gesture_model.classify(landmarks)
    serial.send(gesture)                     // → Arduino`;

const hardwarePseudo = `// 1. Initialise
servos ← attach([pin3, pin5, pin6, pin9, pin10, pin11])
serial.begin(9600)

// 2. Control loop
LOOP:
  IF serial.available():
    gesture ← serial.read()
    angles  ← map_gesture_to_angles(gesture)

    FOR EACH servo IN servos:
      servo.write(angles[servo.id])

    delay(15ms)`;

function CodeBlock({
  label,
  file,
  code,
  githubPath,
}: {
  label: string;
  file: string;
  code: string;
  githubPath: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <span className="text-[13px] text-[#525252]">{label}</span>
      </div>

      <div className="border border-[#1f1f1f] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#1f1f1f] bg-[#161616]">
          <span className="text-[12px] text-[#525252] font-mono">{file}</span>
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#3B82F6]">
            pseudocode
          </span>
        </div>
        <pre className="bg-[#0d0d0d] text-[13px] leading-[1.8] text-[#c9d1d9] font-mono overflow-x-auto p-8 max-sm:p-5">
          <code>{code}</code>
        </pre>
      </div>

      <a
        href={githubPath}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] text-[#525252] hover:text-accent transition-colors w-fit"
      >
        View full code on GitHub &nbsp;↗
      </a>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function BuildPage() {
  return (
    <>
      <Nav />
      <Divider />

      <main>

        {/* ── Page heading ── */}
        <div className="px-[120px] max-md:px-10 max-sm:px-5 pt-14 pb-16">
          <span className="text-[11px] tracking-[0.18em] uppercase text-[#525252]">
            Hardware &amp; Code &amp; References
          </span>
          <h1
            className="text-[#fafafa] font-normal leading-[1.1] tracking-tight mt-5"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)" }}
          >
            Build
          </h1>
        </div>

        <Divider />

        {/* ── Parts ── */}
        <div className="px-[120px] max-md:px-10 max-sm:px-5 py-[70px] max-sm:py-10">
          <p className="text-[11px] tracking-[0.18em] uppercase text-[#525252] mb-10">
            Hardware
          </p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-[#1f1f1f] border border-[#1f1f1f]">
            {parts.map((p) => (
              <div key={p.name} className="bg-[#111] p-8 max-sm:p-5 flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <span className="text-[15px] text-[#fafafa] font-normal">{p.name}</span>
                  <span className="text-[11px] tracking-[0.12em] uppercase text-[#3B82F6] shrink-0">
                    {p.role}
                  </span>
                </div>
                <p className="text-[14px] text-[#525252] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Code ── */}
        <div className="px-[120px] max-md:px-10 max-sm:px-5 py-[70px] max-sm:py-10 flex flex-col gap-16 max-sm:gap-10">
          <p className="text-[11px] tracking-[0.18em] uppercase text-[#525252]">
            Code
          </p>

          <CodeBlock
            label="Machine Learning — gesture recognition pipeline"
            file="ml / gesture_pipeline.py"
            code={mlPseudo}
            githubPath="https://github.com/fiifidawson/S.A.R.R.A"
          />

          <CodeBlock
            label="Robot Hand — Arduino servo control loop"
            file="cerebrum / Forearm / Forearm.ino"
            code={hardwarePseudo}
            githubPath="https://github.com/fiifidawson/S.A.R.R.A/tree/main/cerebrum/Forearm"
          />
        </div>

        <Divider />

        {/* ── References ── */}
        <div className="px-[120px] max-md:px-10 max-sm:px-5 py-[70px] max-sm:py-10">
          <p className="text-[11px] tracking-[0.18em] uppercase text-[#525252] mb-10">
            References
          </p>

          <div className="flex flex-col gap-16 max-sm:gap-10">

            <div>
              <p className="text-[13px] text-[#525252] mb-6 tracking-wide">Sources</p>
              <div className="flex flex-col divide-y divide-[#1f1f1f]">
                {sources.map((s) =>
                  s.external ? (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-6 py-5"
                    >
                      <div className="flex items-baseline gap-5 min-w-0">
                        <span className="text-[11px] tracking-[0.12em] uppercase text-[#525252] shrink-0 w-24 max-sm:w-16">{s.label}</span>
                        <span className="text-[15px] text-[#fafafa] group-hover:text-accent transition-colors truncate">{s.title}</span>
                      </div>
                      <span className="text-[#525252] group-hover:text-accent transition-colors shrink-0">↗</span>
                    </a>
                  ) : (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group flex items-center justify-between gap-6 py-5"
                    >
                      <div className="flex items-baseline gap-5 min-w-0">
                        <span className="text-[11px] tracking-[0.12em] uppercase text-[#525252] shrink-0 w-24 max-sm:w-16">{s.label}</span>
                        <span className="text-[15px] text-[#fafafa] group-hover:text-accent transition-colors truncate">{s.title}</span>
                      </div>
                      <span className="text-[#525252] group-hover:text-accent transition-colors shrink-0">↗</span>
                    </Link>
                  )
                )}
              </div>
            </div>

            <div>
              <p className="text-[13px] text-[#525252] mb-6 tracking-wide">Videos</p>
              <div className="flex flex-col divide-y divide-[#1f1f1f]">
                {videos.map((v) => (
                  <a
                    key={v.href}
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-5"
                  >
                    <div className="flex items-baseline gap-5 min-w-0">
                      <span className="text-[11px] tracking-[0.12em] uppercase text-[#525252] shrink-0 w-24 max-sm:w-16">{v.channel}</span>
                      <span className="text-[15px] text-[#fafafa] group-hover:text-accent transition-colors truncate">{v.title}</span>
                    </div>
                    <span className="text-[#525252] group-hover:text-accent transition-colors shrink-0">↗</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </main>

      <Divider />
      <Footer />
    </>
  );
}
