
const capabilities = [
    {
      number: "01",
      title: "Analytics",
      description:
        "I turn operational and product data into insights teams can actually use to make decisions.",
      tools: "SQL · Python · Power BI · Experimentation",
    },
    {
      number: "02",
      title: "Automation",
      description:
        "I automate repetitive reporting, data preparation, and analytical workflows so teams spend less time doing manual work.",
      tools: "Python · APIs · ETL · FastAPI",
    },
    {
      number: "03",
      title: "Intelligent Systems",
      description:
        "I use machine learning and AI agents when workflows require prediction, reasoning, or intelligent action.",
      tools: "XGBoost · Machine Learning · LLMs · AI Agents",
    },
  ];
  
  export default function WhatIDo() {
    return (
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
  
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
              What I Do
            </p>
  
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              From analysis to automation.
            </h2>
          </div>
  
          <div className="grid gap-6 md:grid-cols-3">
  
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group rounded-2xl border border-white/10 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <p className="text-sm text-zinc-600">
                  {capability.number}
                </p>
  
                <h3 className="mt-8 text-2xl font-medium text-white">
                  {capability.title}
                </h3>
  
                <p className="mt-4 leading-relaxed text-zinc-400">
                  {capability.description}
                </p>
  
                <p className="mt-8 text-sm text-zinc-500">
                  {capability.tools}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }