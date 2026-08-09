const services = [
    {
      number: "01",
      title: "Analytics",
      description:
        "I turn complex operational and product data into clear decisions using SQL, Python, dashboards, experimentation, and statistical analysis.",
      tools: "SQL · Python · Power BI · Experimentation",
    },
    {
      number: "02",
      title: "Automation",
      description:
        "I build workflows that reduce repetitive work by connecting data pipelines, APIs, analytics applications, and reporting systems.",
      tools: "Python · APIs · ETL · FastAPI",
    },
    {
      number: "03",
      title: "Intelligent Systems",
      description:
        "I use machine learning and emerging AI capabilities to build predictive and increasingly autonomous analytical workflows.",
      tools: "XGBoost · Machine Learning · LLMs · AI Agents",
    },
  ];
  
  export default function WhatIDo() {
    return (
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
  
          {/* Heading */}
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                What I Do
              </p>
            </div>
  
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
                From understanding the data
                <span className="text-zinc-600"> to building what comes next.</span>
              </h2>
            </div>
          </div>
  
          {/* Capabilities */}
          <div className="mt-20 border-t border-white/10">
            {services.map((service) => (
              <div
                key={service.number}
                className="group grid gap-6 border-b border-white/10 py-10 transition md:grid-cols-[100px_0.8fr_1.2fr] md:items-start md:py-14"
              >
                {/* Number */}
                <p className="text-xs tracking-[0.2em] text-zinc-700">
                  {service.number}
                </p>
  
                {/* Title */}
                <h3 className="text-2xl font-medium tracking-tight text-zinc-200 transition group-hover:text-white md:text-3xl">
                  {service.title}
                </h3>
  
                {/* Description */}
                <div>
                  <p className="max-w-xl leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
  
                  <p className="mt-5 text-xs uppercase tracking-[0.15em] text-zinc-600">
                    {service.tools}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }