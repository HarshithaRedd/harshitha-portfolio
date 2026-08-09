"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-white/30" />

          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            Senior Data Analyst · AI Automation
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl text-6xl font-semibold leading-[0.86] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          Harshitha
          <br />
          Gangasani
        </motion.h1>

        {/* Supporting Content */}
        <div className="mt-10 grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-end">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
              I turn complex data and repetitive work into analytics systems,
              automation, and intelligent workflows.
            </p>

            <p className="mt-5 text-sm tracking-wide text-zinc-500">
              Python · SQL · Analytics · Machine Learning · AI Agents
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:justify-self-end"
          >
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              Building at the intersection of analytics, automation, and
              intelligent systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#work"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                View my work
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-700"
        >
          <span>Scroll to explore</span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
}