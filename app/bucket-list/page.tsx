"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "personal" | "career";

type BucketItem = {
  title: string;
  description?: string;
  status: "planned" | "in-progress" | "completed";
};

const bucketItems: Record<Category, BucketItem[]> = {
  personal: [
    {
      title: "Read 12 books this year",
      description:
        "Books read so far: Too Late. Currently reading: Bhagavad Gita and King of Wrath.",
      status: "in-progress",
    },
    {
      title: "Do 5 push-ups",
      description:
        "Five proper push-ups. No questionable form and no negotiating with gravity.",
      status: "planned",
    },
    {
      title: "Do something slightly outside my comfort zone",
      description:
        "Say yes to something I would normally overthink my way out of.",
      status: "planned",
    },
    {
        title: " Go on a solo trip",
        description: "For 5 days,to a place I've never been before.",
        status: "planned",
    }
  ],

  career: [
    {
      title: "Launch my portfolio website",
      description:
        "Build and publish a portfolio that feels like me and shows the work I am proud of.",
      status: "in-progress",
    },
    {
      title: "Build an AI agent people actually use",
      description:
        "Create something useful enough that it solves a real problem instead of being just another demo.",
      status: "planned",
    },
    {
      title: "Contribute to open source",
      description:
        "Make a meaningful contribution to a project I genuinely find useful.",
      status: "planned",
    },
    {
      title: "Publish something I am proud of",
      description:
        "Put something meaningful into the world with my name attached to it.",
      status: "planned",
    },
  ],
};

function statusSymbol(status: BucketItem["status"]) {
  if (status === "completed") return "●";
  if (status === "in-progress") return "◐";
  return "○";
}

export default function BucketListPage() {
  const [category, setCategory] = useState<Category>("personal");

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
            Bucket List
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Things I want to do while I&apos;m here.
          </h1>
        </div>

        {/* Category Buttons */}
        <div className="mt-16 flex gap-3">
          <button
            onClick={() => setCategory("personal")}
            className={`rounded-full px-6 py-3 text-sm transition ${
              category === "personal"
                ? "bg-white text-black"
                : "border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
            }`}
          >
            Personal
          </button>

          <button
            onClick={() => setCategory("career")}
            className={`rounded-full px-6 py-3 text-sm transition ${
              category === "career"
                ? "bg-white text-black"
                : "border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
            }`}
          >
            Career
          </button>
        </div>

        {/* Bucket List Items */}
        <div className="mt-14">
          {bucketItems[category].map((item, index) => (
            <div
              key={item.title}
              className="grid grid-cols-[40px_1fr] border-t border-white/10 py-7 last:border-b"
            >
              {/* Status Symbol */}
              <span
                className="pt-1 text-zinc-500"
                title={
                  item.status === "completed"
                    ? "Done"
                    : item.status === "in-progress"
                    ? "In progress"
                    : "Someday"
                }
              >
                {statusSymbol(item.status)}
              </span>

              {/* Goal */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="mt-2 text-xl font-medium text-zinc-200">
                  {item.title}
                </h2>

                {item.description && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Status Legend */}
        <div className="mt-10 text-sm text-zinc-600">
          ○ Someday &nbsp;&nbsp; ◐ In progress &nbsp;&nbsp; ● Done
        </div>

      </div>
    </main>
  );
}