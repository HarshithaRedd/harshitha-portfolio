"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type GuestEntry = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function GuestList() {
  const [entries, setEntries] = useState<GuestEntry[]>([]);

  useEffect(() => {
    async function loadEntries() {
      const { data, error } = await supabase
        .from("guestbook")
        .select("id, name, message, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setEntries(data ?? []);
    }

    loadEntries();
  }, []);

  return (
    <section
      id="guest-list"
      className="px-6 pb-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Guest List
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            People who were here.
          </h2>
        </div>

        {entries.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/10 p-12 text-center">
            <p className="text-zinc-600">
              Nobody has signed the wall yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry, index) => (
              <article
                key={entry.id}
                className={`rounded-2xl border border-white/10 bg-zinc-950 p-6 ${
                  index % 3 === 0
                    ? "sm:rotate-1"
                    : index % 3 === 1
                    ? "sm:-rotate-1"
                    : ""
                }`}
              >
                <p className="leading-relaxed text-zinc-300">
                  “{entry.message}”
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-white">
                    {entry.name}
                  </p>

                  <p className="text-xs text-zinc-600">
                    was here
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}