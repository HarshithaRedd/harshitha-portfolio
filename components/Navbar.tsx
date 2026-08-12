"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="text-sm font-bold tracking-tight text-[#F1EDE5]"
        >
          HG<span className="text-[#FF5A1F]">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#work"
            className="group relative text-xs uppercase tracking-[0.18em] text-zinc-500 transition hover:text-white"
          >
            Work
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#FF5A1F] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#experience"
            className="group relative text-xs uppercase tracking-[0.18em] text-zinc-500 transition hover:text-white"
          >
            Experience
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#FF5A1F] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#about"
            className="group relative text-xs uppercase tracking-[0.18em] text-zinc-500 transition hover:text-white"
          >
            About
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#FF5A1F] transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs uppercase tracking-[0.16em] text-zinc-300 transition hover:text-[#FF5A1F] sm:block"
          >
            View Résumé ↗
          </a>

          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              aria-label="Contact"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5A1F]"
            >
              <span className="text-sm text-white">↘</span>
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}