import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S.A.R.R.A ",
  description:
    "S.A.R.R.A is a semi-autonomous rehabilitation robotic arm that mimics human movement using gesture recognition and machine learning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
