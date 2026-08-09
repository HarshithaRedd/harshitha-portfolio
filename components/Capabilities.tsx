const capabilities = [
    {
      number: "01",
      title: "Analytics",
      description:
        "Turning messy operational and product data into metrics, insights, experiments, and decisions.",
      skills: [
        "SQL",
        "Python",
        "Power BI",
        "Tableau",
        "Product Analytics",
        "A/B Testing",
        "Statistical Analysis",
      ],
    },
    {
      number: "02",
      title: "Automation & Data Apps",
      description:
        "Building workflows and lightweight applications that replace repetitive analytical and reporting work.",
      skills: [
        "Python Automation",
        "FastAPI",
        "Streamlit",
        "APIs",
        "ETL / ELT",
        "Git",
        "GitHub",
      ],
    },
    {
      number: "03",
      title: "Data Platforms",
      description:
        "Working across cloud data pipelines, warehouses, transformation layers, and analytical data models.",
      skills: [
        "AWS",
        "Azure",
        "Snowflake",
        "Databricks",
        "dbt",
        "Airflow",
        "PostgreSQL",
      ],
    },
    {
      number: "04",
      title: "Machine Learning & AI",
      description:
        "Applying predictive models today while exploring how LLMs and agents can automate increasingly complex analytical workflows.",
      skills: [
        "XGBoost",
        "scikit-learn",
        "Forecasting",
        "Anomaly Detection",
        "LLMs",
        "AI Agents",
        "RAG",
      ],
    },
  ];
  
  export default function Capabilities() {
    return (
      <section className="border-t border-white/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
  
          {/* Header */}
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                Capabilities
              </p>
            </div>
  
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
                The tools change.
                <span className="text-zinc-600">
                  {" "}
                  The problem-solving stays.
                </span>
              </h2>
  
              <p className="mt-6 max-w-2xl leading-relaxed text-zinc-400">
                My work sits across analytics, automation, data platforms,
                and increasingly intelligent systems.
              </p>
            </div>
          </div>
  
          {/* Capability Grid */}
          <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="group border-b border-r border-white/10 p-7 transition duration-300 hover:bg-white/[0.02] md:p-10"
              >
                {/* Number */}
                <p className="text-xs tracking-[0.2em] text-zinc-700">
                  {capability.number}
                </p>
  
                {/* Title */}
                <h3 className="mt-8 text-2xl font-medium tracking-tight text-white md:text-3xl">
                  {capability.title}
                </h3>
  
                {/* Description */}
                <p className="mt-5 max-w-xl leading-relaxed text-zinc-500">
                  {capability.description}
                </p>
  
                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {capability.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500 transition group-hover:border-white/20 group-hover:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
  
        </div>
      </section>
    );
  }