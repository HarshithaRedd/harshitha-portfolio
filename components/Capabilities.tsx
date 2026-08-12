"use client";

import { motion } from "motion/react";

import {
  SiPython,
  SiGooglebigquery,
  SiSnowflake,
  SiDatabricks,
  SiApacheairflow,
  SiGooglecloud,
  SiJira,
  SiConfluence,
} from "react-icons/si";

import {
  HiOutlineChartBar,
  HiOutlineTableCells,
  HiOutlineCircleStack,
  HiOutlinePresentationChartBar,
} from "react-icons/hi2";

const logos = [
  { icon: SiPython, label: "Python" },
  { icon: HiOutlineChartBar, label: "Power BI" },
  { icon: HiOutlineTableCells, label: "Excel" },
  { icon: HiOutlinePresentationChartBar, label: "Tableau" },
  { icon: HiOutlineChartBar, label: "Looker" },
  { icon: SiGooglebigquery, label: "BigQuery" },
  { icon: SiSnowflake, label: "Snowflake" },
  { icon: SiDatabricks, label: "Databricks" },
  { icon: HiOutlineCircleStack, label: "dbt" },
  { icon: SiApacheairflow, label: "Apache Airflow" },
  { icon: SiGooglecloud, label: "Google Cloud" },
  { icon: SiJira, label: "Jira" },
  { icon: SiConfluence, label: "Confluence" },
];

function LogoSet() {
  return (
    <>
      {logos.map(({ icon: Icon, label }, index) => (
        <motion.div
          key={`${label}-${index}`}
          whileHover={{
            y: -6,
            scale: 1.12,
            color: "#FF5A1F",
          }}
          title={label}
          aria-label={label}
          className="mx-7 flex h-14 w-14 shrink-0 cursor-default items-center justify-center text-4xl text-zinc-500 transition-colors md:mx-10 md:h-16 md:w-16 md:text-5xl"
        >
          <Icon />
        </motion.div>
      ))}
    </>
  );
}

export default function Capabilities() {
  return (
    <section className="overflow-hidden py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.28em] text-[#FF5A1F]">
          05 / Capabilities
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#F1EDE5] md:text-6xl">
          THE TOOLS CHANGE.
          <br />
          <span className="text-zinc-600">
            THE PROBLEM-SOLVING DOESN&apos;T.
          </span>
        </h2>
      </div>

      {/* Moving tool icons */}
      <div className="mt-10 overflow-hidden border-y border-white/10 py-7">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center"
        >
          <div className="flex items-center">
            <LogoSet />
          </div>

          <div className="flex items-center">
            <LogoSet />
          </div>
        </motion.div>
      </div>

      {/* Core areas */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-6 text-xs uppercase tracking-[0.18em] text-zinc-600">
        <span>Financial Analytics</span>
        <span className="text-[#FF5A1F]">•</span>

        <span>Analytics Engineering</span>
        <span className="text-[#FF5A1F]">•</span>

        <span>Cloud FinOps</span>
        <span className="text-[#FF5A1F]">•</span>

        <span>Business Intelligence</span>
        <span className="text-[#FF5A1F]">•</span>

        <span>Automation</span>
      </div>

      {/* Capability summary */}
      <div className="mx-auto mt-8 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "FINANCIAL ANALYTICS",
            description:
              "Forecasting · Variance · Profitability · Unit Economics · Excel",
          },
          {
            title: "ANALYTICS ENGINEERING",
            description:
              "SQL · Data Models · Pipelines · dbt · Airflow",
          },
          {
            title: "BI & DATA PLATFORMS",
            description:
              "Power BI · Tableau · Looker · BigQuery · Snowflake · Databricks",
          },
          {
            title: "AUTOMATION & DELIVERY",
            description:
              "Python · APIs · ETL · Jira · Confluence · Workflow Automation",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -5,
            }}
            className="group border-t border-white/10 pt-5"
          >
            <span className="text-xs text-[#FF5A1F]">
              0{index + 1}
            </span>

            <h3 className="mt-3 text-sm font-black text-zinc-300 transition group-hover:text-[#FF5A1F]">
              {item.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-zinc-600">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}