
const bucketItems = [
    {
      category: "Build",
      title: "Launch my portfolio website",
      status: "in-progress",
    },
    {
      category: "Build",
      title: "Build an AI agent people actually use",
      status: "planned",
    },
    {
      category: "Build",
      title: "Create a production RAG application",
      status: "planned",
    },
    {
      category: "Career",
      title: "Get a Hybrid Job",
      status: "planned",
    },
    {
      category: "Life",
      title: "Put on 8 pounds of weight",
      status: "planned",
    },
  ];
  
  function getStatusLabel(status: string) {
    if (status === "completed") return "Done";
    if (status === "in-progress") return "In progress";
    return "Someday";
  }
  
  function getStatusSymbol(status: string) {
    if (status === "completed") return "●";
    if (status === "in-progress") return "◐";
    return "○";
  }
  
  export default function BucketList() {
    return (
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
  
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Bucket List
            </p>
  
            <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Things I&apos;d like to do while I&apos;m here.
            </h2>
  
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Some professional. Some personal. Some still waiting for the right
              amount of courage.
            </p>
          </div>
  
          <div className="grid gap-4 md:grid-cols-2">
            {bucketItems.map((item) => (
              <div
                key={item.title}
                className="group flex items-start justify-between gap-6 rounded-2xl border border-white/10 bg-zinc-950 p-6 transition hover:border-white/30"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    {item.category}
                  </p>
  
                  <h3 className="mt-3 text-lg font-medium text-white">
                    {item.title}
                  </h3>
                </div>
  
                <div className="flex shrink-0 items-center gap-2 text-sm text-zinc-500">
                  <span>{getStatusSymbol(item.status)}</span>
                  <span>{getStatusLabel(item.status)}</span>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-8 text-sm text-zinc-600">
            ○ Someday &nbsp;&nbsp; ◐ In progress &nbsp;&nbsp; ● Done
          </div>
  
        </div>
      </section>
    );
  }