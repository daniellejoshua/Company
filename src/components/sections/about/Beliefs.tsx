"use client";

import { BarChart3, Handshake, MessagesSquare, Target } from "lucide-react";
import { motion } from "motion/react";

const beliefs = [
  {
    icon: Target,
    title: "Purpose Before Complexity",
    copy: "We start with the real workflow, constraint, or opportunity. Technology follows the purpose, not the other way around.",
  },
  {
    icon: Handshake,
    title: "Built Around People",
    copy: "We consider the owners, teams, and customers who will depend on the product in their everyday work.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Collaboration",
    copy: "We keep decisions, progress, and tradeoffs visible so everyone can contribute with the same context.",
  },
  {
    icon: BarChart3,
    title: "Long-Term Thinking",
    copy: "We make room for the product to adapt as the business, its users, and its priorities change.",
  },
];

export default function Beliefs() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-jade-off-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <h2 className="text-balance max-w-[600px] text-[clamp(2.5rem,4.4vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              Guided by purpose,
              <br />
              <span className="text-jade-primary">driven by people.</span>
            </h2>
          </div>
          <p className="max-w-[540px] border-l border-jade-muted/40 pl-8 text-lg leading-8 text-jade-charcoal">
            These principles guide how we work, make decisions, and build long-term relationships with the businesses we work with.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-jade-muted/40 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {beliefs.map(({ icon: Icon, title, copy }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.21), ease }}
              className="about-motion"
            >
              <Icon className="h-7 w-7 text-jade-primary" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-jade-charcoal">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
