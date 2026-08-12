"use client";

import Image from "next/image";
import { motion } from "motion/react";

const photos = [
  {
    src: "/images/life/photo-1.jpeg",
    label: "01",
  },
  {
    src: "/images/life/photo-2.jpg",
    label: "02",
  },
];

export default function PhotoStory() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[#FF5A1F]">
          07 / Life, Lately
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Compact images */}
          <div className="grid max-w-xl grid-cols-2 gap-4">
            {photos.map((photo, index) => (
              <motion.figure
                key={photo.src}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className={`group ${index === 1 ? "mt-10" : "mb-10"}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt="Life lately"
                    fill
                    sizes="(max-width: 768px) 45vw, 20vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                  <span className="absolute left-3 top-3 text-xs font-bold text-[#FF5A1F]">
                    {photo.label}
                  </span>
                </div>
              </motion.figure>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl">
              OUTSIDE
              <br />
              THE
              <br />
              <span className="text-[#FF5A1F]">DASHBOARDS.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-6 text-zinc-500">
              A few frames from the parts of life that don&apos;t belong in a
              résumé.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}