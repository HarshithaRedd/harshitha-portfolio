"use client";

import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    type: "Fleet Analytics · Predictive Maintenance",
    title: "Fleet Intelligence",
    description:
      "Built analytics and automation workflows around maintenance, telematics, work orders, and vehicle-trip data to help operations teams identify risk earlier and improve fleet performance.",
    impact: [
      "200K+ vehicle trips analyzed",
      "20% reduction in downtime",
      "30–60 day earlier risk identification",
    ],
    tools: [
      "Python",
      "SQL",
      "XGBoost",
      "FastAPI",
      "Streamlit",
      "Power BI",
    ],
  },

  {
    number: "02",
    type: "Data Analytics · Cloud",
    title: "Analytics at Scale",
    description:
      "Developed analytics workflows across large order and fulfillment datasets, improving how product teams accessed reliable data for experimentation, forecasting, and operational decisions.",
    impact: [
      "10TB+ daily data",
      "40% lower refresh latency",
      "Analytics used across product workflows",
    ],
    tools: [
      "SQL",
      "Python",
      "AWS",
      "Snowflake",
      "Databricks",
      "dbt",
      "Airflow",
    ],
  },

  {
    number: "03",
    type: "Forecasting · Experimentation",
    title: "Demand Intelligence",
    description:
      "Applied forecasting, machine learning, and experimentation to understand promotional demand and customer behavior, helping improve predictions and support pricing decisions.",
    impact: [
      "18% improvement in forecast accuracy",
      "12% increase in conversion",
      "Statistical experiment analysis",
    ],
    tools: [
      "Python",
      "XGBoost",
      "scikit-learn",
      "SageMaker",
      "Time Series",
      "A/B Testing",
    ],
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="border-t border-white/10 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
              Selected Work
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
              Data work measured by
              <span className="text-zinc-600"> what changed afterward.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-relaxed text-zinc-400">
              A few examples of how I&apos;ve used analytics, automation, and
              machine learning to solve operational and product problems.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-20 space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
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
                amount: 0.18,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="group rounded-3xl border border-white/10 bg-zinc-950/40 p-7 transition duration-300 hover:border-white/25 md:p-10"
            >

              {/* Top Row */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    {project.type}
                  </p>

                  <h3 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-700">
                  {project.number}
                </p>
              </div>

              {/* Main Content */}
              <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr]">

                {/* Description */}
                <div>
                  <p className="max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Impact
                  </p>

                  <div className="mt-5 space-y-3">
                    {project.impact.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border-b border-white/5 pb-3 text-zinc-300"
                      >
                        <span className="mt-1 text-zinc-600">
                          ↗
                        </span>

                        <p>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Tools */}
              <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500 transition group-hover:border-white/20 group-hover:text-zinc-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}