"use client";

import Image from "next/image";
import { BookOpen, UsersRound } from "lucide-react";
import { motion } from "motion/react";

const storyArtwork =
  "/assets/PRAXISJADE(GREEN)%20ASSETS/ABOUT/praxis-jade-our-story-enhanced-blended-lines.svg";

const storyNotes = [
  {
    icon: BookOpen,
    title: "Praxis",
    copy: "Praxis means putting ideas and knowledge into action. It's the bridge between concepts and real solutions, turning strategy, design, and technology into software that works in the real world.",
  },
  {
    icon: UsersRound,
    title: "Jade",
    copy: "Jade represents the people behind that practice. It is the collective identity of our team, built from our names, our skills, and our shared passion for technology and problem-solving.",
  },
];

export default function OurStory() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="our-story" className="scroll-mt-[72px] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-stretch gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.94fr] lg:gap-14 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, ease }}
          className="about-motion max-w-[610px]"
        >
          <h2 className="text-balance text-[clamp(2.5rem,4.4vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Why Praxis <span className="text-jade-primary">Jade?</span>
          </h2>
          <p className="mt-5 max-w-[570px] text-lg leading-8 text-jade-charcoal">
            Our name describes our working model: practical action powered by a team with different skills, perspectives, and disciplines.
          </p>

          <div className="mt-6 space-y-2">
            {storyNotes.map(({ icon: Icon, title, copy }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.4, delay: 0.14 + index * 0.09, ease }}
                className="about-motion grid grid-cols-[4rem_1fr] gap-4 py-3"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-jade-muted/30 bg-jade-off-white shadow-sm">
                  <Icon className="h-7 w-7 text-jade-primary" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 max-w-[485px] text-sm leading-6 text-jade-charcoal">{copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.35, clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease }}
          className="about-motion relative min-h-[460px] border-l border-jade-muted/45 pl-7 sm:min-h-[520px] sm:pl-10"
        >
          <Image
            src={storyArtwork}
            alt="Layered jade crystal landscape"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover object-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.42, ease }}
            className="about-motion absolute left-12 top-14 text-sm font-semibold uppercase leading-[1.85] tracking-[0.28em] text-jade-primary sm:left-20"
          >
            Thought
            <br />
            Into Action.
            <br />
            Ideas Into
            <br />
            Impact.
          </motion.p>
          <p className="absolute bottom-10 left-12 border-l border-jade-primary/45 pl-4 text-[10px] font-semibold uppercase leading-[1.5] tracking-[0.2em] text-jade-charcoal sm:left-20">
            People
            <br />
            Technology
            <br />
            Real Solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
