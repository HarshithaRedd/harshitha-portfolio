"use client";

import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    eyebrow: "Operational Analytics / Predictive Intelligence",
    title: "FLEET\nINTELLIGENCE",
    stat: "20%",
    statLabel: "Downtime reduced",
    description:
      "Combined operational, maintenance, and vehicle-trip data to improve fleet visibility, identify repair risk, and support management decisions.",
    tools:
      "PYTHON / SQL / XGBOOST / FASTAPI / POWER BI",
  },
  {
    number: "02",
    eyebrow: "Product Analytics / Analytics Engineering",
    title: "ANALYTICS\nAT SCALE",
    stat: "10TB+",
    statLabel: "Daily data processed",
    description:
      "Built analytics and reporting workflows across large-scale order and fulfillment data, improving refresh performance and supporting product, operational, and experimentation decisions.",
    tools:
      "SQL / PYTHON / SNOWFLAKE / DATABRICKS / DBT / AIRFLOW",
  },
  {
    number: "03",
    eyebrow: "Financial Analytics / Decision Support",
    title: "FINANCIAL\nINTELLIGENCE",
    stat: "22%",
    statLabel: "Methane gas royalty",
    description:
      "Analyzed fiscal-year actuals versus budget and forecast, performed variance and trend analysis across revenue, operating expenses, and capital spending, while supporting 22% royalty for methane gas production.",
    tools:
      "EXCEL / SQL / POWER BI / BUDGETING / FORECASTING / VARIANCE ANALYSIS",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#FF5A1F]">
              03 / Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              DATA THAT
              <br />
              <span className="text-[#FF5A1F]">
                MOVES DECISIONS.
              </span>
            </h2>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-zinc-700 md:block">
            Selected / 03
          </span>
        </div>

        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden border-b border-white/10 py-12 md:py-14"
          >
            <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#FF5A1F]/0 blur-[110px] transition duration-500 group-hover:bg-[#FF5A1F]/10" />

            <div className="relative grid gap-8 md:grid-cols-[60px_1.25fr_0.75fr]">
              <span className="text-xs text-[#FF5A1F]">
                {project.number}
              </span>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  {project.eyebrow}
                </p>

                <motion.h3
                  whileHover={{
                    x: 7,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="mt-5 whitespace-pre-line text-4xl font-black leading-[0.9] tracking-[-0.05em] text-[#F1EDE5] md:text-6xl"
                >
                  {project.title}
                </motion.h3>

                <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                <p className="mt-6 text-[10px] uppercase leading-5 tracking-[0.18em] text-zinc-700">
                  {project.tools}
                </p>
              </div>

              <div className="flex flex-col justify-end md:items-end md:text-right">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="text-5xl font-black tracking-[-0.06em] text-[#FF5A1F] md:text-7xl"
                >
                  {project.stat}
                </motion.div>

                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
                  {project.statLabel}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}