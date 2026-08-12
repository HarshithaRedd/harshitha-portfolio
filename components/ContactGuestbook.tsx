"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabase";

export default function ContactGuestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanMessage) {
      setStatus("Please add your name and a message.");
      return;
    }

    setSubmitting(true);
    setStatus("");

    const { error } = await supabase.from("guestbook").insert([
      {
        name: cleanName,
        message: cleanMessage,
        approved: false,
      },
    ]);

    if (error) {
      setStatus("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    setName("");
    setMessage("");
    setStatus("Thank you — your note will appear after approval.");
    setSubmitting(false);
  }

  return (
    <section id="contact" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[#FF5A1F]">
          08 / Say Hello
        </p>

        <div className="mt-8 grid overflow-hidden border border-white/10 lg:grid-cols-2">
          {/* Contact */}
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">
                HAVE A
                <br />
                PROBLEM
                <br />
                <span className="text-[#FF5A1F]">WORTH SOLVING?</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-6 text-zinc-500">
                I&apos;m interested in thoughtful problems involving data,
                analytics, automation, and intelligent systems.
              </p>
            </div>

            <div className="mt-12">
              <a
                href="mailto:harshithagangasani5@gmail.com"
                className="break-all text-sm text-zinc-300 transition hover:text-[#FF5A1F]"
              >
                harshithagangasani5@gmail.com
              </a>

              <a
                href="mailto:harshithagangasani5@gmail.com"
                className="mt-6 inline-flex rounded-full bg-[#FF5A1F] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(255,90,31,.22)]"
              >
                Start a conversation ↗
              </a>
            </div>
          </div>

          {/* Guestbook */}
          <div className="border-t border-white/10 bg-white/[0.015] p-8 lg:border-l lg:border-t-0 md:p-12">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FF5A1F]">
              Leave Your Mark
            </p>

            <h3 className="mt-5 text-3xl font-black md:text-4xl">
              BEEN HERE?
              <br />
              LEAVE A NOTE.
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={50}
                placeholder="Your name"
                className="w-full border-b border-white/10 bg-transparent py-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-[#FF5A1F]"
              />

              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={300}
                rows={4}
                placeholder="Leave a little something behind..."
                className="w-full resize-none border-b border-white/10 bg-transparent py-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-[#FF5A1F]"
              />

              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-700">
                  {message.length}/300
                </span>

                <button
                  disabled={submitting}
                  className="rounded-full border border-[#FF5A1F] px-6 py-3 text-sm text-[#FF5A1F] transition hover:bg-[#FF5A1F] hover:text-white disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Leave a note ↗"}
                </button>
              </div>

              {status && (
                <p className="text-sm text-zinc-600">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}