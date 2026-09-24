"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

import { processSteps, type ProcessStep } from "@/data/process";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TIMELINE_PATH =
  "M12 74 C130 8 190 8 310 74 S490 140 610 74 S790 8 910 74 S1090 140 1188 55";

const CHECKPOINTS = [
  { left: "12.5%", top: "19.1%" },
  { left: "37.5%", top: "94.8%" },
  { left: "62.5%", top: "19.1%" },
  { left: "87.5%", top: "93.3%" },
];

const REACH_THRESHOLDS = [0.08, 0.34, 0.59, 0.84];

function fade(reduce: boolean | null, delay = 0, offsetY = 28) {
  return {
    initial: reduce ? false : { opacity: 0, y: offsetY },
    whileInView: reduce ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: EASE, delay },
  };
}

function SectionHeader({ reduce }: { reduce: boolean | null }) {
  return (
    <motion.div {...fade(reduce)} className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00875A]">
        Our Process
      </p>
      <h2
        id="process-heading"
        className="mt-4 text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#111827]"
      >
        From Your Idea to <span className="text-[#00875A]">Reality.</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#667085] lg:text-lg">
        We make software development easy, with a clear process from start to
        finish.
      </p>
    </motion.div>
  );
}

function StepContent({
  step,
  align,
  prefix = "",
}: {
  step: ProcessStep;
  align: "center" | "left";
  prefix?: string;
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment}`}>
      <p className="text-[48px] leading-none font-extrabold tracking-tight text-[#D9F5EC]">
        {step.number}
      </p>
      <h3 className="mt-2.5 text-xl font-bold tracking-tight text-[#111827]">
        {step.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-[#667085] lg:min-h-[48px]">
        {step.description}
      </p>
      <ul role="list" aria-label={`${step.title} features`} className="mt-5 flex w-full max-w-[220px] flex-col gap-2">
        {step.features.map((feature) => {
          const FeatureIcon = feature.icon;
          return (
            <li
              key={feature.label}
              className={`flex h-10 w-full ${align === "center" ? "justify-center" : ""} items-center gap-2.5 rounded-xl bg-[#EFFAF6] px-4`}
            >
              <FeatureIcon
                className="size-4 shrink-0 text-[#00875A]"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-[#23303B]">
                {prefix}
                {feature.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DesktopLayout({ reduce }: { reduce: boolean | null }) {
  const [activeCount, setActiveCount] = useState(
    reduce ? processSteps.length : 0,
  );
  const bandRef = useRef<HTMLDivElement | null>(null);
  const iconSlotHeight = 132;
  const bandHeight = "h-[96px]";

  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ["start 0.9", "end 0.3"],
  });
  const flow = useSpring(scrollYProgress, { stiffness: 55, damping: 18, mass: 0.6 });
  const lineProgress = useTransform(flow, [0, 1], [0, 1]);

  useMotionValueEvent(flow, "change", (value: number) => {
    const reached = REACH_THRESHOLDS.reduce(
      (acc, threshold, index) => (value >= threshold ? index + 1 : acc),
      0,
    );
    setActiveCount(reached);
  });

  return (
    <div className="relative mx-auto mt-12 hidden max-w-6xl lg:block">
      <ol
        role="list"
        aria-label="Software development process"
        className="relative grid grid-cols-4 gap-x-6"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 z-10"
          style={{ top: iconSlotHeight }}
        >
          <div ref={bandRef} className={`relative w-full ${bandHeight}`}>
            <svg
              viewBox="0 0 1200 130"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <path
                d={TIMELINE_PATH}
                fill="none"
                stroke="#26AE83"
                strokeWidth="2"
                strokeDasharray="7 9"
                strokeLinecap="round"
                opacity="0.7"
              />
              <motion.path
                d={TIMELINE_PATH}
                fill="none"
                stroke="#00875A"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ pathLength: reduce ? 1 : lineProgress }}
              />
            </svg>

            {CHECKPOINTS.map((point, index) => (
              <motion.div
                key={index}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: point.left, top: point.top }}
                initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                whileInView={
                  reduce
                    ? undefined
                    : {
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.4, ease: EASE },
                      }
                }
                viewport={{ once: true, margin: "-80px" }}
              >
                <motion.div
                  initial={reduce ? false : { rotate: -180 }}
                  whileInView={reduce ? undefined : { rotate: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <motion.div
                    key={index < activeCount ? "active" : "inactive"}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <Image
                      src={
                        index < activeCount
                          ? "/assets/JADE_Our_Process_SVGs/step-active.svg"
                          : "/assets/JADE_Our_Process_SVGs/step-inactive.svg"
                      }
                      alt=""
                      width={36}
                      height={36}
                      className="size-9 drop-shadow-sm"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {processSteps.map((step, index) => (
          <motion.li
            key={step.number}
            {...fade(reduce, index * 0.08)}
            className="relative flex flex-col"
          >
            <div
              className="relative flex items-center justify-center"
              style={{ height: iconSlotHeight }}
            >
              <Image
                src="/assets/JADE_Our_Process_SVGs/icon-bg.svg"
                alt=""
                width={124}
                height={124}
                aria-hidden="true"
                className="absolute size-[124px] object-contain"
              />
              {index === 3 && !reduce ? (
                <motion.div
                  animate={{ x: [0, 6, 0], y: [0, -3, 0] }}
                  transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                >
                  <Image
                    src={step.icon}
                    alt={step.alt}
                    width={104}
                    height={104}
                    className="relative size-[104px] object-contain"
                  />
                </motion.div>
              ) : (
                <Image
                  src={step.icon}
                  alt={step.alt}
                  width={104}
                  height={104}
                  className="relative size-[104px] object-contain"
                />
              )}
            </div>

            <div aria-hidden="true" className={bandHeight} />

            <StepContent step={step} align="center" />
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function TabletLayout({ reduce }: { reduce: boolean | null }) {
  return (
    <ol
      role="list"
      aria-label="Software development process"
      className="mx-auto mt-16 hidden max-w-4xl grid-cols-2 gap-x-10 gap-y-16 md:grid lg:hidden"
    >
      {processSteps.map((step, index) => (
        <motion.li
          key={step.number}
          {...fade(reduce, index * 0.08)}
          className="relative flex flex-col"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src="/assets/JADE_Our_Process_SVGs/icon-bg.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden="true"
                className="absolute inset-0 size-[80px] object-contain"
              />
              <Image
                src={step.icon}
                alt={step.alt}
                width={72}
                height={72}
                className="relative size-[72px] object-contain"
              />
            </div>
            <p className="text-[44px] leading-none font-extrabold tracking-tight text-[#D9F5EC]">
              {step.number}
            </p>
          </div>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-[#00875A]/25 to-transparent" />
          <StepContent step={step} align="left" />
        </motion.li>
      ))}
    </ol>
  );
}

function MobileLayout({ reduce }: { reduce: boolean | null }) {
  return (
    <ol
      role="list"
      aria-label="Software development process"
      className="relative mx-auto mt-14 max-w-md lg:hidden"
    >
      <svg
        viewBox="0 0 40 130"
        preserveAspectRatio="none"
        className="pointer-events-none absolute top-64 -bottom-8 left-[6px] w-8 opacity-[0.18]"
        aria-hidden="true"
      >
        <path
          d="M16 0 C2 16 30 32 16 48 C2 64 30 80 16 96 C2 112 26 122 16 130"
          fill="none"
          stroke="#00875A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {processSteps.map((step, index) => (
        <motion.li
          key={step.number}
          {...fade(reduce, index * 0.08)}
          className="relative"
        >
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(0,135,90,0.14)]">
            <Image
              src={step.icon}
              alt={step.alt}
              width={48}
              height={48}
              className="size-12 object-contain"
            />
          </div>

          <div className="relative z-10 mt-2.5 -ml-1">
            <Image
              src="/assets/JADE_Our_Process_SVGs/step-active.svg"
              alt=""
              width={32}
              height={32}
              className="size-8"
            />
          </div>

          <div className="mt-6 pl-[64px]">
            <StepContent step={step} align="left" />
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      id="solutions"
      aria-labelledby="process-heading"
      className="overflow-clip bg-white pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader reduce={reduce} />
        <DesktopLayout reduce={reduce} />
        <TabletLayout reduce={reduce} />
        <MobileLayout reduce={reduce} />
      </div>
    </section>
  );
}