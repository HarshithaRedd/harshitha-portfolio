"use client";

import { motion } from "motion/react";

const philosophy = [
  "ANALYZE",
  "MODEL",
  "AUTOMATE",
  "DECIDE",
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
        <p className="text-xs uppercase tracking-[0.28em] text-[#FF5A1F]">
          06 / About Me
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-600">
              Where I work best
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.88] tracking-[-0.05em] text-[#F1EDE5] md:text-7xl">
              DATA
              <br />

              <span className="text-zinc-600">
                FINANCE
              </span>
              <br />

              <span className="text-[#FF5A1F]">
                OPERATIONS.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="flex flex-col justify-end"
          >
            <p className="text-lg leading-8 text-zinc-300">
              I work at the intersection of data, finance, and operations.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500">
              I build analytics systems that explain not only what happened,
              but what it cost, why it changed, and what decision should come
              next.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500">
              My work spans financial analytics, cloud cost management,
              forecasting, product economics, operational analytics, data
              platforms, and automation — connecting technical systems to
              measurable business outcomes.
            </p>

            <div className="mt-8 h-px w-16 bg-[#FF5A1F]" />
          </motion.div>
        </div>

        <div className="mt-14 border-y border-white/10 py-7">
          <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-zinc-700">
            How I think
          </p>

          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            {philosophy.map((word, index) => (
              <div
                key={word}
                className="flex items-center gap-3 md:gap-5"
              >
                <motion.span
                  whileHover={{
                    y: -4,
                    color: "#FF5A1F",
                  }}
                  className="text-xl font-black text-zinc-400 md:text-4xl"
                >
                  {word}
                </motion.span>

                {index < philosophy.length - 1 && (
                  <span className="text-[#FF5A1F]">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}