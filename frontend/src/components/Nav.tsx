"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-[120px] max-md:px-10 max-sm:px-5 py-[18px]">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-[14px] text-[#fafafa] hover:text-accent transition-colors">
          S.A.R.R.A
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/progress"
            className="text-[14px] px-5 py-2.5 text-[#fafafa] hover:text-accent transition-colors"
          >
            Progress
          </Link>
          <Link
            href="/build"
            className="text-[14px] px-5 py-2.5 text-[#fafafa] hover:text-accent transition-colors"
          >
            Build
          </Link>
          <a
            href="https://github.com/fiifidawson/S.A.R.R.A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] px-5 py-2.5 text-[#fafafa] hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="sm:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-[#fafafa] transition-transform origin-center"
            style={open ? { transform: "rotate(45deg) translateY(6px)" } : {}}
          />
          <span
            className="block w-5 h-px bg-[#fafafa] transition-opacity"
            style={open ? { opacity: 0 } : {}}
          />
          <span
            className="block w-5 h-px bg-[#fafafa] transition-transform origin-center"
            style={open ? { transform: "rotate(-45deg) translateY(-6px)" } : {}}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden flex flex-col mt-4 pt-4 border-t border-[#1f1f1f] gap-1">
          <Link
            href="/progress"
            onClick={() => setOpen(false)}
            className="text-[14px] py-3 text-[#fafafa] hover:text-accent transition-colors"
          >
            Progress
          </Link>
          <Link
            href="/build"
            onClick={() => setOpen(false)}
            className="text-[14px] py-3 text-[#fafafa] hover:text-accent transition-colors"
          >
            Build
          </Link>
          <a
            href="https://github.com/fiifidawson/S.A.R.R.A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] py-3 text-[#fafafa] hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
