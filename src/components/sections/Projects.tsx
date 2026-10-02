"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeLeft(reduce: boolean | null, delay = 0) {
  return {
    initial: reduce ? false : { opacity: 0, x: -24 },
    whileInView: reduce ? undefined : { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: EASE, delay },
  };
}

function fadeUp(reduce: boolean | null, delay = 0) {
  return {
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: reduce ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: EASE, delay },
  };
}

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="overflow-clip bg-jade-off-white pb-5 sm:pb-6"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[40%_60%] lg:gap-8">
        <motion.div {...fadeLeft(reduce)} className="lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-jade-primary">
            Our Work
          </p>
          <h2
            id="work-heading"
            className="mt-4 text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em] text-jade-black"
          >
            Real Solutions.{" "}
            <span className="text-jade-primary">Real Businesses.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-jade-charcoal lg:text-lg">
            Take a look at some of the custom software solutions we&apos;ve
            built for businesses across different industries.
          </p>

          <motion.div {...fadeLeft(reduce, 0.15)} className="mt-9">
            <Link
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-jade-primary px-7 text-sm font-semibold text-jade-primary transition-colors duration-200 hover:bg-jade-soft/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-primary"
            >
              View All Projects
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div {...fadeUp(reduce, 0.1)} className="relative">
          <div className="relative w-[108%] sm:w-[112%] lg:ml-[-9%] lg:w-[110%]">
            <Image
              src="/assets/PRAXISJADE(GREEN) ASSETS/Praxis Jade branded three-device mockup.png"
              alt="PRAXIS JADE software showcase featuring a POS dashboard, an eCommerce storefront, and a mobile team dashboard"
              width={1774}
              height={887}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full object-contain drop-shadow-[0_24px_34px_rgba(21,46,39,0.12)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
