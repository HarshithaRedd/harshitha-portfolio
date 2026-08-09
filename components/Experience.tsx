const experiences = [
    {
      company: "City of Corpus Christi",
      role: "Senior Management Analyst",
      period: "Jan 2026 — Present",
      location: "Corpus Christi, TX",
      description:
        "Building fleet analytics, reporting automation, predictive maintenance workflows, and operational intelligence across vehicle, maintenance, route, and telematics data.",
      highlights: [
        "Fleet analytics & operational reporting",
        "Python / SQL automation",
        "Predictive maintenance",
        "Power BI & internal data applications",
      ],
    },
    {
      company: "Instacart",
      role: "Product Data Analyst",
      period: "Jul 2024 — Jan 2026",
      location: "United States",
      description:
        "Worked across product analytics, experimentation, forecasting, and large-scale data workflows to support pricing, fulfillment, demand, and customer experience decisions.",
      highlights: [
        "Product analytics & experimentation",
        "Demand forecasting",
        "SQL / Python analytics",
        "Cloud data workflows",
      ],
    },
    {
      company: "University of Colorado Denver",
      role: "Instructional Assistant · Analyst",
      period: "Aug 2022 — May 2024",
      location: "Denver, CO",
      description:
        "Supported analytical and operational workflows using Python, Power BI, and Excel while working with academic and administrative data.",
      highlights: [
        "Data analysis",
        "Reporting automation",
        "Power BI",
        "Python & Excel",
      ],
    },
    {
      company: "Tudip Technologies",
      role: "Data Analyst",
      period: "May 2020 — Jul 2022",
      location: "India",
      description:
        "Analyzed product and engineering data, automated recurring reporting, investigated defect patterns, and developed dashboards used across client projects.",
      highlights: [
        "Operational analytics",
        "Python & SQL",
        "Tableau",
        "Reporting automation",
      ],
    },
  ];
  
  export default function Experience() {
    return (
      <section
        id="experience"
        className="border-t border-white/10 px-6 py-28 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
  
          {/* Header */}
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                Experience
              </p>
            </div>
  
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
                Five years of turning data into
                <span className="text-zinc-600"> something useful.</span>
              </h2>
            </div>
          </div>
  
          {/* Experience Timeline */}
          <div className="mt-20 border-t border-white/10">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="group grid gap-6 border-b border-white/10 py-10 md:grid-cols-[80px_1fr_1.5fr] md:gap-10 md:py-14"
              >
                {/* Number */}
                <div>
                  <p className="text-xs tracking-[0.2em] text-zinc-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
  
                {/* Company */}
                <div>
                  <h3 className="text-xl font-medium text-white md:text-2xl">
                    {experience.company}
                  </h3>
  
                  <p className="mt-2 text-sm text-zinc-500">
                    {experience.role}
                  </p>
  
                  <div className="mt-4 space-y-1 text-xs uppercase tracking-[0.15em] text-zinc-700">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>
  
                {/* Work */}
                <div>
                  <p className="max-w-2xl leading-relaxed text-zinc-400">
                    {experience.description}
                  </p>
  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-600 transition group-hover:border-white/20 group-hover:text-zinc-400"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
  
        </div>
      </section>
    );
  }