const places = [
    {
      number: "01",
      city: "Hyderabad",
      country: "India",
      note: "Where it started.",
    },
    {
      number: "02",
      city: "Denver",
      country: "Colorado",
      note: "A new country, a master's degree, and a very different altitude.",
    },
    {
      number: "03",
      city: "Houston",
      country: "Texas",
      note: "Another stop along the way.",
    },
    {
      number: "04",
      city: "Corpus Christi",
      country: "Texas",
      note: "Where I am now.",
    },
  ];
  
  export default function Journey() {
    return (
      <section className="border-t border-white/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
  
          {/* Header */}
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                My Journey
              </p>
            </div>
  
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
                A few cities.
                <span className="text-zinc-600">
                  {" "}
                  A lot of becoming.
                </span>
              </h2>
  
              <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
                Hyderabad to Colorado to Texas — each place added something
                different to the story.
              </p>
            </div>
          </div>
  
          {/* Journey Route */}
          <div className="relative mt-20">
  
            {/* Desktop connecting line */}
            <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-white/10 md:block" />
  
            <div className="grid gap-12 md:grid-cols-4 md:gap-6">
              {places.map((place, index) => (
                <div
                  key={`${place.city}-${place.country}`}
                  className="relative"
                >
                  {/* Route point */}
                  <div className="mb-8 flex items-center gap-4 md:block">
  
                    <div className="relative z-10 h-[18px] w-[18px] rounded-full border border-white/30 bg-[#050505]">
                      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
                    </div>
  
                    {/* Mobile connector */}
                    {index !== places.length - 1 && (
                      <div className="h-px flex-1 bg-white/10 md:hidden" />
                    )}
                  </div>
  
                  <p className="text-xs tracking-[0.2em] text-zinc-700">
                    {place.number}
                  </p>
  
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-white">
                    {place.city}
                  </h3>
  
                  <p className="mt-1 text-sm text-zinc-600">
                    {place.country}
                  </p>
  
                  <p className="mt-5 max-w-[240px] text-sm leading-relaxed text-zinc-500">
                    {place.note}
                  </p>
                </div>
              ))}
            </div>
  
          </div>
        </div>
      </section>
    );
  }