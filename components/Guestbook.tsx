"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Guestbook() {
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

    const { error } = await supabase.from("guestbook").insert({
      name: cleanName,
      message: cleanMessage,
      approved: false,
    });

    if (error) {
      console.error("Guestbook submission error:", error);
      setStatus("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    setName("");
    setMessage("");

    setStatus(
      "You were here ✓ Your note will appear after I approve it."
    );

    setSubmitting(false);
  }

  return (
    <section
      id="leave-your-mark"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Intro */}
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          You made it this far.
        </p>

        <h2 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          Leave your mark.
        </h2>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">
          Leave a hello, a thought, a joke, or something completely
          unnecessary.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-14 max-w-2xl"
        >

          {/* Name */}
          <div className="border-b border-white/15">
            <label
              htmlFor="guest-name"
              className="block text-xs uppercase tracking-[0.2em] text-zinc-600"
            >
              Name
            </label>

            <input
              id="guest-name"
              type="text"
              value={name}
              maxLength={50}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="w-full bg-transparent py-5 text-xl text-white outline-none placeholder:text-zinc-700"
            />
          </div>

          {/* Message */}
          <div className="mt-8 border-b border-white/15">
            <label
              htmlFor="guest-message"
              className="block text-xs uppercase tracking-[0.2em] text-zinc-600"
            >
              Message
            </label>

            <textarea
              id="guest-message"
              value={message}
              maxLength={300}
              rows={4}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Say something..."
              className="w-full resize-none bg-transparent py-5 text-xl leading-relaxed text-white outline-none placeholder:text-zinc-700"
            />
          </div>

          {/* Submit */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5">

            <p className="text-xs text-zinc-600">
              {message.length} / 300
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition duration-300 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Leaving mark..." : "I Was Here"}
            </button>

          </div>

          {/* Status */}
          {status && (
            <p className="mt-6 text-sm text-zinc-500">
              {status}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}