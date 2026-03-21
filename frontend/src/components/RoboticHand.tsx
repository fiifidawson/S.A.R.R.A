"use client";

/**
 * MediaPipe-style hand landmark skeleton.
 *
 * Visualises the 21 keypoints + 23 bone connections that a hand-tracking
 * model sees in real time — the exact output the S.A.R.R.A algorithm uses
 * to drive the robotic hand.
 *
 * Stroke/fill colour is `currentColor`; wrap with a Tailwind text-colour
 * class to re-tint. The container rocks on the Y-axis via the CSS
 * @keyframes rockHand defined in globals.css.
 */

type Pt = [number, number];

// 21 landmarks: right hand, palm facing viewer, fingers pointing up.
const L: Pt[] = [
  [100, 238], // 0  WRIST
  [74,  204], // 1  THUMB_CMC
  [54,  178], // 2  THUMB_MCP
  [39,  154], // 3  THUMB_IP
  [28,  136], // 4  THUMB_TIP
  [83,  170], // 5  INDEX_MCP
  [77,  133], // 6  INDEX_PIP
  [73,  107], // 7  INDEX_DIP
  [71,   87], // 8  INDEX_TIP
  [101, 165], // 9  MIDDLE_MCP
  [101, 127], // 10 MIDDLE_PIP
  [101,  99], // 11 MIDDLE_DIP
  [101,  78], // 12 MIDDLE_TIP
  [120, 168], // 13 RING_MCP
  [123, 131], // 14 RING_PIP
  [125, 105], // 15 RING_DIP
  [126,  86], // 16 RING_TIP
  [137, 176], // 17 PINKY_MCP
  [141, 144], // 18 PINKY_PIP
  [144, 120], // 19 PINKY_DIP
  [146, 104], // 20 PINKY_TIP
];

// Standard MediaPipe HAND_CONNECTIONS (23 pairs)
const CONNECTIONS: [number, number][] = [
  [0, 1],  [1, 2],  [2, 3],  [3, 4],   // thumb
  [0, 5],  [5, 6],  [6, 7],  [7, 8],   // index
  [0, 9],  [9, 10], [10,11], [11,12],  // middle
  [0,13],  [13,14], [14,15], [15,16],  // ring
  [0,17],  [17,18], [18,19], [19,20],  // pinky
  [5, 9],  [9,13],  [13,17],           // palm (knuckle row)
];

const TIPS = new Set([4, 8, 12, 16, 20]);

export default function RoboticHand() {
  return (
    <div style={{ perspective: "700px" }} className="flex justify-center py-10">
      <div
        style={{
          animation: "rockHand 7s ease-in-out infinite",
          display: "inline-block",
        }}
      >
        <svg
          viewBox="18 68 148 182"
          width="210"
          height="270"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Hand tracking landmark visualisation"
        >
          {/* ── Bone connections ── */}
          {CONNECTIONS.map(([a, b], i) => (
            <line
              key={i}
              x1={L[a][0]} y1={L[a][1]}
              x2={L[b][0]} y2={L[b][1]}
              strokeWidth="1.6"
              strokeOpacity="0.45"
            />
          ))}

          {/* ── Landmark dots ──
               Fingertips are larger and brighter; wrist is the anchor point. */}
          {L.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={TIPS.has(i) ? 5 : i === 0 ? 5.5 : 3.2}
              fill="currentColor"
              fillOpacity={TIPS.has(i) ? 1 : 0.6}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
