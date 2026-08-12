"use client";

import { motion } from "motion/react";

const jobs = [
  {
    period: "2026 — NOW",
    company: "CITY OF CORPUS CHRISTI",
    role: "Senior Management Analyst",
    detail:
      "Financial analytics / Cloud FinOps / forecasting / operational intelligence",
  },
  {
    period: "2024 — 2026",
    company: "INSTACART",
    role: "Product Data Analyst",
    detail:
      "Product economics / experimentation / unit economics / analytics engineering",
  },
  {
    period: "2022 — 2024",
    company: "UNIVERSITY OF COLORADO DENVER",
    role: "Instructional Assistant · Analyst",
    detail:
      "Financial analysis / fund analytics / applied analytics",
  },
  {
    period: "2020 — 2022",
    company: "TUDIP TECHNOLOGIES",
    role: "Data Analyst",
    detail:
      "Project P&L / billing analytics / reporting / financial controls",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[#FF5A1F]">
          04 / Experience
        </p>

        <div className="mt-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              whileHover={{
                x: 7,
              }}
              className="group grid gap-4 border-t border-white/10 py-7 md:grid-cols-[160px_1fr_1fr]"
            >
              <p className="text-xs tracking-[0.12em] text-zinc-700">
                {job.period}
              </p>

              <div>
                <h3 className="text-xl font-black tracking-[-0.02em] text-zinc-300 transition group-hover:text-[#FF5A1F] md:text-2xl">
                  {job.company}
                </h3>

                <p className="mt-1 text-sm text-zinc-600">
                  {job.role}
                </p>
              </div>

              <p className="text-sm leading-6 text-zinc-700 transition group-hover:text-zinc-500 md:text-right">
                {job.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}