export default function Contact() {
    return (
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-28 md:py-40"
      >
        <div className="mx-auto max-w-7xl">
  
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            Contact
          </p>
  
          <div className="mt-8 grid gap-12 md:grid-cols-[1.4fr_0.6fr] md:items-end">
  
            {/* Main CTA */}
            <div>
              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
                Have a problem
                <br />
                worth solving?
              </h2>
  
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
                I&apos;m open to full-time opportunities, freelance work,
                interesting collaborations, or simply a good conversation.
              </p>
            </div>
  
            {/* Contact */}
            <div className="md:text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Say hello
              </p>
  
              <a
                href="mailto:harshithagangasani5@gmail.com"
                className="mt-4 inline-block border-b border-white/20 pb-1 text-lg text-zinc-200 transition hover:border-white hover:text-white"
              >
                harshithagangasani5@gmail.com
              </a>
  
              <div className="mt-8">
                <a
                  href="mailto:harshithagangasani5@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  Start a conversation
                  <span>↗</span>
                </a>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }