import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-14">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="text-3xl font-black">
              HG<span className="text-[#FF5A1F]">.</span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600">
              Data / Automation / Intelligence
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-700">
              General
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-500">
              <Link href="#top" className="hover:text-[#FF5A1F]">
                Home
              </Link>
              <Link href="#work" className="hover:text-[#FF5A1F]">
                Work
              </Link>
              <Link href="#experience" className="hover:text-[#FF5A1F]">
                Experience
              </Link>
              <Link href="#about" className="hover:text-[#FF5A1F]">
                About
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-700">
              Personal Corner
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-500">
              <Link href="/journal" className="hover:text-[#FF5A1F]">
                Journal
              </Link>
              <Link href="/guest-list" className="hover:text-[#FF5A1F]">
                Guest List
              </Link>
              <Link href="/bucket-list" className="hover:text-[#FF5A1F]">
                Bucket List
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] uppercase tracking-[0.2em] text-zinc-800 sm:flex-row sm:justify-between">
          <span>Corpus Christi, TX</span>
          <span>© 2026 Harshitha Gangasani</span>
        </div>
      </div>
    </footer>
  );
}