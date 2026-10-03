"use client";

import Link from "next/link";
import { Box, Code2, Lightbulb, Rocket } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Lightbulb,
    title: "Understand Together",
    copy: "We map your goals, workflows, users, and constraints before deciding what the solution should be.",
  },
  {
    icon: Box,
    title: "Plan With Clarity",
    copy: "We turn what we learned into a clear product direction, scope, and practical delivery plan.",
  },
  {
    icon: Code2,
    title: "Build and Refine",
    copy: "We design and develop in visible increments, using regular feedback to refine what matters.",
  },
  {
    icon: Rocket,
    title: "Support for What's Next",
    copy: "After launch, we can support the product, improve it, and help it adapt to what comes next.",
  },
];

export default function HowWeWork() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12 xl:px-20">
        <div className="max-w-[570px]">
          <h2 className="text-balance text-[clamp(2.5rem,4.4vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            A small team
            <br />
            with <span className="text-jade-primary">big possibilities.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-jade-charcoal">
            We combine product thinking, design, and software engineering in one collaborative process. You stay close to the work from discovery through launch, with room to learn and adjust along the way.
          </p>
          <Link
            href="/#work"
            className="mt-8 inline-flex h-12 items-center rounded-full border border-jade-primary px-8 text-sm font-semibold text-jade-deep transition-colors hover:bg-jade-soft/10"
          >
            Our Work <span className="ml-3" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative border-l border-jade-muted/40 pl-8 sm:pl-12">
          <div className="absolute bottom-10 left-[3.45rem] top-10 w-px bg-jade-muted/40 sm:left-[4.95rem]" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 1.05, ease }}
            className="about-motion absolute left-[3.45rem] top-10 h-[calc(100%-5rem)] w-px origin-top bg-jade-primary sm:left-[4.95rem]"
          />
          <div className="space-y-5">
            {steps.map(({ icon: Icon, title, copy }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.1, ease }}
                className="about-motion relative grid grid-cols-[3.5rem_1fr] gap-5"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-lg border border-jade-muted/35 bg-jade-off-white shadow-sm">
                  <Icon className="h-6 w-6 text-jade-primary" strokeWidth={1.7} />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-jade-charcoal">{copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
