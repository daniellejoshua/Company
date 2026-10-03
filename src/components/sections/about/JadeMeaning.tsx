"use client";

import Image from "next/image";
import { motion } from "motion/react";

const jadeArtwork =
  "/assets/PRAXISJADE(GREEN)%20ASSETS/ABOUT/praxis-jade-crystalline-wordmark-depth-v2.svg";

const names = [
  ["J", "Jhon"],
  ["A", "Arvie"],
  ["D", "Danielle"],
  ["E", "Eman"],
];

export default function JadeMeaning() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative overflow-hidden bg-jade-black py-14 text-white sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_60%,rgba(24,167,123,0.08))]" />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0.25, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease }}
              className="about-motion relative aspect-[3.45/1] w-full max-w-[620px]"
            >
              <Image
                src={jadeArtwork}
                alt="Crystalline JADE wordmark"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-contain object-left"
              />
            </motion.div>
          </div>
          <div className="max-w-[530px]">
            <h2 className="text-balance text-[clamp(2rem,3.4vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.04em]">
              More than a name.
              <br />
              <strong className="font-semibold">A shared identity.</strong>
            </h2>
            <p className="mt-6 text-base leading-7 text-jade-muted">
              JADE is formed from Jhon, Arvie, Danielle, and Eman, the people behind Praxis Jade. The name holds our different skills and perspectives together under one shared commitment: build technology that is useful in the real world.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4">
          {names.map(([initial, name], index) => (
            <motion.div
              key={`${initial}-${name}-${index}`}
              initial={{ opacity: 0.2, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.38, delay: 0.08 + index * 0.08, ease }}
              className="about-motion border-l border-white/20 py-2 text-center last:border-r"
            >
              <span className="block text-3xl font-semibold text-jade-fresh">{initial}</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
