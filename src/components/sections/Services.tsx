"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { services } from "@/data/services";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fade(reduce: boolean | null, delay = 0, offsetY = 24) {
  return {
    initial: reduce ? false : { opacity: 0, y: offsetY },
    whileInView: reduce ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: EASE, delay },
  };
}

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-12 lg:gap-16">
          <motion.div
            {...fade(reduce)}
            className="md:max-w-[620px]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00875A]">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="mt-4 text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#111827]"
            >
              All the Software You Need, Built{" "}
              <span className="text-[#00875A]">Your Way.</span>
            </h2>
          </motion.div>

          <motion.span
            {...fade(reduce, 0.05)}
            aria-hidden="true"
            className="hidden h-28 w-px shrink-0 bg-gradient-to-b from-[#00875A] via-[#00875A]/30 to-transparent md:block"
          />

          <motion.p
            {...fade(reduce, 0.1)}
            className="max-w-md text-base leading-relaxed text-[#667085] lg:text-lg"
          >
            From idea to launch, we create customized software solutions that
            fit your business goals — no limitations, just possibilities.
          </motion.p>
        </div>

        <ul
          className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:mt-20 lg:grid-cols-7"
          role="list"
          aria-label="Software services"
        >
          {services.map((service, index) => (
            <motion.li
              key={service.name}
              {...fade(reduce, index * 0.07)}
              className="min-w-0"
            >
              <div className="group flex flex-col items-center text-center">
                <div className="flex h-20 items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                  <Image
                    src={service.icon}
                    alt=""
                    width={72}
                    height={72}
                    className="size-[72px] object-contain"
                  />
                </div>
                <h3 className="mt-5 text-sm font-semibold tracking-tight text-[#111827] sm:text-[15px]">
                  {service.name}
                </h3>
                <p className="mt-2 max-w-[150px] text-xs leading-relaxed text-[#667085]">
                  {service.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}