import Link from "next/link";

const posts = [
  {
    title: "Four cities, four versions of me",
    description:
      "A reflection on Hyderabad, Denver, Houston, Corpus Christi, and how changing places changes you.",
    category: "Life",
    status: "Coming soon",
  },
  {
    title: "Why repetitive work bothers me",
    description:
      "A reflection on why I keep looking for ways to remove unnecessary repetition from work and life.",
    category: "Thoughts",
    status: "Coming soon",
  },
  {
    title: "Things I want to do before I feel ready",
    description:
      "Notes about ambition, uncertainty, bucket lists, and doing things before confidence catches up.",
    category: "Personal",
    status: "Coming soon",
  },
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Back Home */}
        <Link
          href="/"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back home
        </Link>

        {/* Header */}
        <div className="mt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Journal
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Things I think about.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Notes about life, places, books, ambition, learning, and whatever
            else stays on my mind.
          </p>
        </div>

        {/* Posts */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group flex min-h-[320px] flex-col justify-between rounded-3xl border border-white/10 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-white/30"
            >
              <div>

                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    {post.category}
                  </p>

                  <p className="text-xs text-zinc-700">
                    0{index + 1}
                  </p>
                </div>

                <h2 className="mt-8 text-2xl font-semibold leading-tight md:text-3xl">
                  {post.title}
                </h2>

                <p className="mt-5 leading-relaxed text-zinc-400">
                  {post.description}
                </p>

              </div>

              <div className="mt-12">
                <p className="text-sm text-zinc-600">
                  {post.status}
                </p>
              </div>

            </article>
          ))}

        </div>

      </div>
    </main>
  );
}