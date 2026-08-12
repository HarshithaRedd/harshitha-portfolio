"use client";

import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "ANALYTICS",
    text: "Financial, operational, product, and performance analysis that turns complex data into decisions.",
  },
  {
    number: "02",
    title: "ANALYTICS ENGINEERING",
    text: "SQL models, data pipelines, cloud platforms, and reliable reporting layers built for repeatable analysis.",
  },
  {
    number: "03",
    title: "FINANCIAL INTELLIGENCE",
    text: "Forecasting, variance analysis, profitability, unit economics, cost allocation, and decision support.",
  },
];

export default function WhatIDo() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#FF5A1F]">
              02 / What I Do
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-6xl">
              DATA MEETS
              <br />
              BUSINESS
              <br />
              <span className="text-[#FF5A1F]">DECISIONS.</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-6 text-zinc-600">
              I work across analytics, engineering, finance, and operations —
              connecting technical systems to measurable business outcomes.
            </p>
          </div>

          <div>
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  x: 35,
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  x: 8,
                }}
                className="group grid gap-4 border-t border-white/10 py-7 md:grid-cols-[70px_1fr_1fr] md:items-center"
              >
                <span className="text-xs text-[#FF5A1F]">
                  {service.number}
                </span>

                <h3 className="text-xl font-black tracking-[-0.03em] text-zinc-300 transition group-hover:text-[#FF5A1F] md:text-2xl">
                  {service.title} →
                </h3>

                <p className="max-w-md text-sm leading-6 text-zinc-600">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}