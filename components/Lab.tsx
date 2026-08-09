const labProjects = [
    {
      number: "01",
      title: "Health Insurance Fraud Detection",
      description:
        "Built a fraud-scoring workflow using claims data, feature engineering, classification, and anomaly detection to identify suspicious claims.",
      result: "92% model accuracy",
      tools: ["SQL", "Python", "R", "AWS", "Tableau"],
    },
    {
      number: "02",
      title: "Customer Churn Prediction",
      description:
        "Built and compared multiple churn models, then deployed a repeatable prediction workflow using AWS and Flask.",
      result: "90% prediction accuracy",
      tools: [
        "Python",
        "XGBoost",
        "TensorFlow",
        "PyTorch",
        "SageMaker",
        "Flask",
      ],
    },
  ];
  
  export default function Lab() {
    return (
      <section id="lab" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
  
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Lab
            </p>
  
            <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Experiments, models, and things I&apos;m building.
            </h2>
  
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              A space for projects that explore machine learning, automation, and
              increasingly AI-agent workflows.
            </p>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2">
            {labProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-white/10 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <p className="text-sm text-zinc-600">
                  {project.number}
                </p>
  
                <h3 className="mt-8 text-2xl font-semibold text-white md:text-3xl">
                  {project.title}
                </h3>
  
                <p className="mt-4 leading-relaxed text-zinc-400">
                  {project.description}
                </p>
  
                <p className="mt-6 text-sm font-medium text-zinc-200">
                  {project.result}
                </p>
  
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-white/5 px-3 py-2 text-xs text-zinc-500"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
  
                <button className="mt-8 text-sm text-white transition group-hover:translate-x-1">
                  Explore project →
                </button>
              </article>
            ))}
          </div>
  
        </div>
      </section>
    );
  }