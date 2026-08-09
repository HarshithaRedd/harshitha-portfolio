import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">

          {/* Intro */}
          <div>
            <Link
              href="#top"
              className="text-xl font-semibold tracking-tight text-white"
            >
              HG
            </Link>

            <p className="mt-6 max-w-xs leading-relaxed text-zinc-500">
              Senior Data Analyst building analytics systems,
              automation, and intelligent workflows.
            </p>
          </div>

          {/* General */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              General
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="#top"
                className="text-lg text-zinc-300 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="#about"
                className="text-lg text-zinc-300 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="#work"
                className="text-lg text-zinc-300 transition hover:text-white"
              >
                Work
              </Link>

              <Link
                href="#experience"
                className="text-lg text-zinc-300 transition hover:text-white"
              >
                Experience
              </Link>
            </div>
          </div>

          {/* Personal Corner */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              Personal Corner
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/journal"
                className="text-lg text-zinc-300 transition hover:text-white"
              >
                Journal
              </Link>

              <Link
                href="/guest-list"
                className="text-lg text-zinc-300 transition hover:text-white"
              >
                Guest List
              </Link>

              <Link
                href="/bucket-list"
                className="text-lg text-zinc-300 transition hover:text-white"
              >
                Bucket List
              </Link>
            </div>
          </div>

        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-600">
          © 2026 Harshitha Gangasani. All rights reserved.
        </div>
      </div>

    </footer>
  );
}