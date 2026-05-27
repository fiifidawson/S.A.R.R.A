<div align="center">

# S.A.R.R.A

**Semi-Autonomous Rehabilitation Robotic Hand**

<img src="docs/hand.svg" alt="S.A.R.R.A robotic hand" width="720" />

[Website](https://sarra-nine.vercel.app/) &nbsp;·&nbsp; [Progress](https://sarra-nine.vercel.app/progress) &nbsp;·&nbsp; [Build](https://sarra-nine.vercel.app/build)

</div>

---

> Work in progress. Picking up where I left off after a long school-induced hiatus.
> Some assets were lost - visuals and docs are being rebuilt.

## What it is

S.A.R.R.A is a robotic hand that mirrors the movement of a real human hand in real time. A live camera captures the user's hand, a machine-learning model translates the gesture into joint targets, and an Arduino drives the servos across four degrees of freedom.

Started in 2023 as an undergraduate research project, the goal is to explore how accessible, vision-based control can make assistive robotics more approachable for rehabilitation.

## How it works

```
camera ──▶ hand detector (MediaPipe) ──▶ gesture classifier ──▶ serial ──▶ Arduino ──▶ servos
```

| Layer | Stack |
|---|---|
| Vision | OpenCV, MediaPipe Hands |
| ML | Custom gesture classifier on 21-keypoint landmarks |
| Control | Arduino Uno R3, servo PWM via digital pins |
| Mechanics | InMoov hand (PLA), MG996R servos |

## Hardware

<table>
<tr>
<td><b>Arduino Uno R3</b><br/><sub>Microcontroller — reads input, drives PWM</sub></td>
<td><b>MG996R Servos</b><br/><sub>High-torque actuation per finger joint</sub></td>
</tr>
<tr>
<td><b>10 kΩ Potentiometers</b><br/><sub>Analogue feedback (A0, A1)</sub></td>
<td><b>L298N Motor Driver</b><br/><sub>H-bridge for direction & speed</sub></td>
</tr>
<tr>
<td><b>InMoov Hand</b><br/><sub>3D-printed PLA chassis (Gael Langevin)</sub></td>
<td><b>USB Webcam</b><br/><sub>Live frames into the gesture pipeline</sub></td>
</tr>
<tr>
<td><b>Battery</b><br/><sub>Portable power for untethered operation</sub></td>
<td><b>Jumper Wires & Breadboard</b><br/><sub>Prototyping</sub></td>
</tr>
</table>

## Repo layout

```
.
├── cerebrum/
│   └── Forearm/Forearm.ino     # Arduino servo control loop
├── ml/
│   └── gesture_pipeline.py     # Vision + gesture classification
└── docs/                       # Sketches, schematics, references
```

## Status

|Phase |Status |
|---|---|
| Mechanical | InMoov hand printed |
| Hardware  | In progress |
| Firmware  | In progress |
| ML        | Gesture pipeline — rebuilding |
| Docs      | In progress |

## References

- [InMoov Hand & Forearm](https://inmoov.fr/hand-and-forarm/) — Gael Langevin
- [Arduino Robot Arm](https://github.com/EbenKouao/arduino-robot-arm) — Eben Kouao
- [Arduino Project Hub: Robotic Arm](https://projecthub.arduino.cc/zezarandrade/c9d53b71-0422-41dd-bda1-00d4899583f0) — zezarandrade

## License

MIT

---

<sub>Built by [@fiifidawson](https://github.com/fiifidawson). Full project context lives on the [website](https://sarra-nine.vercel.app/).</sub>
