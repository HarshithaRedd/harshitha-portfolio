export default function About() {
    return (
      <section
        id="about"
        className="border-t border-white/10 px-6 py-28 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
  
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
  
            {/* Label */}
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                About
              </p>
            </div>
  
            {/* Main copy */}
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
                I like solving problems where
                <span className="text-zinc-600">
                  {" "}
                  data meets real-world work.
                </span>
              </h2>
  
              <div className="mt-10 grid gap-8 text-base leading-relaxed text-zinc-400 md:grid-cols-2 md:text-lg">
  
                <p>
                  I&apos;m a Senior Data Analyst who enjoys working on problems
                  where analytics, automation, and operations come together. I
                  started with reporting and analysis, then became increasingly
                  interested in the systems behind the analysis.
                </p>
  
                <p>
                  That led me into data pipelines, internal applications,
                  machine learning, APIs, and workflow automation. More recently,
                  I&apos;ve been exploring how AI agents can take repetitive
                  analytical and knowledge work even further.
                </p>
  
              </div>
  
              {/* Personal philosophy */}
              <div className="mt-14 border-l border-white/20 pl-6">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-600">
                  How I think about the progression
                </p>
  
                <p className="mt-4 text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl">
                  Analyze → Automate → Predict → Delegate
                </p>
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }