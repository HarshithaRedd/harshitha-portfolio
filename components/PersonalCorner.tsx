export default function PersonalCorner() {
    return (
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
  
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Personal Corner
          </p>
  
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            A little less work.
            <br />
            A little more me.
          </h2>
  
          <div className="mt-16 border-t border-white/10">
  
            <a
              href="#journal"
              className="group flex items-center justify-between border-b border-white/10 py-8"
            >
              <div>
                <p className="text-2xl font-medium text-white">
                  Journal
                </p>
  
                <p className="mt-2 text-sm text-zinc-500">
                  Notes, thoughts, places, books, and everything in between.
                </p>
              </div>
  
              <span className="text-2xl text-zinc-500 transition group-hover:translate-x-2 group-hover:text-white">
                →
              </span>
            </a>
  
            <a
              href="#guest-list"
              className="group flex items-center justify-between border-b border-white/10 py-8"
            >
              <div>
                <p className="text-2xl font-medium text-white">
                  Guest List
                </p>
  
                <p className="mt-2 text-sm text-zinc-500">
                  A small record of people who stopped by.
                </p>
              </div>
  
              <span className="text-2xl text-zinc-500 transition group-hover:translate-x-2 group-hover:text-white">
                ↓
              </span>
            </a>
  
          </div>
  
        </div>
      </section>
    );
  }