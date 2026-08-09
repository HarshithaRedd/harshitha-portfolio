const journalIdeas = [
    {
      title: "Four cities, four versions of me",
      description:
        "A reflection on Hyderabad, Denver, Houston, Corpus Christi, and how changing places changes you.",
      category: "Life",
    },
    {
      title: "Why repetitive work bothers me",
      description:
        "A non-technical reflection on why I keep looking for ways to automate things that feel unnecessarily repetitive.",
      category: "Thoughts",
    },
    {
      title: "Things I want to do before I feel ready",
      description:
        "A note about bucket lists, ambition, uncertainty, and doing things before confidence catches up.",
      category: "Personal",
    },
  ];
  
  export default function Journal() {
    return (
      <section
        id="journal"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
  
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Journal
              </p>
  
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Things I think about.
              </h2>
            </div>
  
            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
                Not everything I write needs to be about SQL, machine learning,
                or AI. This is where I keep notes about life, places, ideas,
                books, ambition, and whatever else stays on my mind.
              </p>
            </div>
          </div>
  
          <div className="grid gap-6 md:grid-cols-3">
            {journalIdeas.map((post, index) => (
              <article
                key={post.title}
                className="group flex min-h-[330px] flex-col justify-between rounded-3xl border border-white/10 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      {post.category}
                    </span>
  
                    <span className="text-xs text-zinc-700">
                      0{index + 1}
                    </span>
                  </div>
  
                  <h3 className="mt-8 text-2xl font-semibold leading-tight text-white">
                    {post.title}
                  </h3>
  
                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {post.description}
                  </p>
                </div>
  
                <div className="mt-10">
                  <span className="text-sm text-zinc-600">
                    Draft idea
                  </span>
                </div>
              </article>
            ))}
          </div>
  
          <div className="mt-10">
            <p className="text-sm text-zinc-600">
              Longer essays coming soon.
            </p>
          </div>
  
        </div>
      </section>
    );
  }