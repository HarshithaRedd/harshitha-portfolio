"use client";

import Image from "next/image";
import { motion } from "motion/react";

const photos = [
  {
    src: "/images/life/photo-1.jpg",
    alt: "A moment from life lately",
    caption: "Life, lately.",
  },
  {
    src: "/images/life/photo-2.jpg",
    alt: "Another moment from life lately",
    caption: "Somewhere between work and everything else.",
  },
];

export default function PhotoStory() {
  return (
    <section className="px-6 pb-28 md:pb-36">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-10">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
              Life, Lately
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Outside the dashboards.
            </h2>
          </div>

          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-zinc-600 md:block">
            A few frames from the parts of life that don&apos;t belong in a
            résumé.
          </p>
        </div>

        {/* Photos */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group ${
                index === 1 ? "md:mt-20" : ""
              }`}
            >
              <motion.div
                whileHover={{
                  scale: 0.985,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-950"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
              </motion.div>

              <figcaption className="mt-4 text-sm text-zinc-600">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  );
}