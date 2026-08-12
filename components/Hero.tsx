"use client";

import Link from "next/link";
import { motion } from "motion/react";

const focusWords = [
  "ANALYTICS.",
  "AUTOMATION.",
  "FINANCIAL INTELLIGENCE.",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Orange ambient glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 45, -20, 0],
          y: [0, -30, 25, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-[#FF5A1F]/12 blur-[150px]"
      />

      {/* Moving light line */}
      <motion.div
        aria-hidden="true"
        initial={{ x: "-100%" }}
        animate={{ x: "220%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-[30%] h-px w-1/3 bg-gradient-to-r from-transparent via-[#FF5A1F]/30 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl py-20">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute h-full w-full rounded-full bg-[#FF5A1F]"
              />

              <span className="relative h-2.5 w-2.5 rounded-full bg-[#FF5A1F]" />
            </span>

            <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Senior Data Analyst / Analytics Engineer
            </p>
          </div>

          <p className="text-[10px] uppercase tracking-[0.24em] text-[#FF5A1F]">
            Analytics · Automation · Data Platforms
          </p>
        </motion.div>

        {/* Name */}
        <div className="mt-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[15vw] font-black leading-[0.79] tracking-[-0.07em] text-[#F1EDE5] sm:text-[12vw] md:text-[9rem] lg:text-[11rem]"
            >
              HARSHITHA
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-end"
            >
              <h1 className="text-[15vw] font-black leading-[0.83] tracking-[-0.07em] text-[#F1EDE5] sm:text-[12vw] md:text-[9rem] lg:text-[11rem]">
                GANGASANI
              </h1>

              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0 rgba(255,90,31,0)",
                    "0 0 35px rgba(255,90,31,.65)",
                    "0 0 0 rgba(255,90,31,0)",
                  ],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                }}
                className="mb-[1vw] ml-3 h-4 w-4 rounded-full bg-[#FF5A1F] md:h-6 md:w-6"
              />
            </motion.div>
          </div>
        </div>

        {/* Message */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.4,
            }}
          >
            <p className="max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
              I build analytics systems that connect financial, operational,
              and product data to{" "}
              <span className="font-medium text-[#FF5A1F]">
                better decisions.
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
              {focusWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.7 + index * 0.12,
                    duration: 0.5,
                  }}
                  className={`text-sm font-bold tracking-[0.08em] ${
                    index === 2 ? "text-[#FF5A1F]" : "text-zinc-500"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="lg:text-right"
          >
            <p className="text-xs uppercase leading-6 tracking-[0.2em] text-zinc-600">
              Financial Analytics
              <br />
              Analytics Engineering
              <br />
              Decision Intelligence
            </p>

            <div className="mt-7 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="#work"
                className="group rounded-full bg-[#FF5A1F] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(255,90,31,.25)]"
              >
                View work{" "}
                <span className="inline-block transition group-hover:translate-x-1">
                  ↗
                </span>
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-300 transition hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="relative h-px flex-1 overflow-hidden bg-white/10">
            <motion.div
              animate={{
                x: ["-100%", "700%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute h-full w-1/5 bg-gradient-to-r from-transparent via-[#FF5A1F] to-transparent"
            />
          </div>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="text-[#FF5A1F]"
          >
            ↓
          </motion.span>
        </div>
      </div>
    </section>
  );
}