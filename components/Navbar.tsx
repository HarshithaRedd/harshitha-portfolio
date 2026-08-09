import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#050505]/70 backdrop-blur-xl">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Left — Name */}
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-white transition hover:text-zinc-300"
        >
          Harshitha G.
        </Link>

        {/* Center — Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <Link
            href="#work"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Work
          </Link>

          <Link
            href="#experience"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Experience
          </Link>

          <Link
            href="#about"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            About
          </Link>
        </div>

        {/* Right — CTA */}
        <Link
          href="#contact"
          className="rounded-full border border-white/15 px-5 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white hover:text-black"
        >
          Let&apos;s Talk
        </Link>

      </nav>
    </header>
  );
}