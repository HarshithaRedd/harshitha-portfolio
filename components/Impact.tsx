"use client";

import { motion } from "motion/react";

const metrics = [
  { value: "5+", label: "Years", sub: "Experience" },
  { value: "10TB+", label: "Daily Data", sub: "Processed" },
  { value: "200K+", label: "Vehicle Trips", sub: "Analyzed" },
  { value: "20%", label: "Downtime", sub: "Reduced" },
];

export default function Impact() {
  return (
    <section className="px-6 py-14 md:py-18">
      <div className="mx-auto max-w-7xl border-y border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.65,
                delay: index * 0.09,
              }}
              whileHover={{ y: -5 }}
              className="border-white/10 px-4 py-8 md:border-r md:px-7 md:py-10 last:border-r-0"
            >
              <div className="text-4xl font-black tracking-[-0.04em] text-[#F1EDE5] md:text-6xl">
                {metric.value.replace("+", "").replace("%", "")}
                <span className="text-[#FF5A1F]">
                  {metric.value.includes("+")
                    ? "+"
                    : metric.value.includes("%")
                    ? "%"
                    : ""}
                </span>
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-400">
                {metric.label}
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-700">
                {metric.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}