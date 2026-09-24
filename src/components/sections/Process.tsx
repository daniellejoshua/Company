"use client";

import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  Layers,
  Play,
  UsersRound,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

import {
  processSteps,
  type ProcessFeature,
  type ProcessStep,
} from "@/data/process";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const benefits: Benefit[] = [
  {
    title: "Clear Collaboration",
    description: "You're involved in every important step.",
    icon: UsersRound,
  },
  {
    title: "Structured Process",
    description: "From planning to deployment, everything is streamlined.",
    icon: Layers,
  },
  {
    title: "Transparent Updates",
    description: "You'll always know what's happening.",
    icon: Zap,
  },
  {
    title: "Long-Term Partnership",
    description: "We continue to support your growth.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

function ProjectCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#contact"
      className={`h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#002F2B] to-[#008F68] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,77,64,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,77,64,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008F68] ${className}`}
    >
      Start Your Project
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

function ProcessCtas({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <ProjectCta className="inline-flex" />
      <Link
        href="#process-flow"
        className="group inline-flex h-12 items-center gap-3 rounded-full text-sm font-medium text-[#145C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00875A]"
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-[#EAF8F3] text-[#00875A] transition-transform duration-200 group-hover:scale-105">
          <Play
            className="ml-0.5 size-4 fill-current"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </span>
        See How It Works
      </Link>
    </div>
  );
}

function BenefitRow({
  benefit,
  index,
  reduce,
}: {
  benefit: Benefit;
  index: number;
  reduce: boolean | null;
}) {
  const Icon = benefit.icon;
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: 0.08 + index * 0.07, ease: EASE }}
      className="flex items-center gap-3"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#E8F8F2] text-[#00875A]">
        <Icon className="size-[18px]" strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-[15px] leading-tight font-semibold text-[#111827]">
          {benefit.title}
        </span>
        <span className="mt-1 block text-[13px] leading-snug text-[#667085]">
          {benefit.description}
        </span>
      </span>
    </motion.li>
  );
}

function ProcessIntro({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="max-w-[520px]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00875A]">
          Our Process
        </p>
        <h2
          id="process-heading"
          className="mt-3 text-[clamp(2.375rem,3.5vw,3.5rem)] leading-[1.06] font-extrabold tracking-[-0.035em] text-[#111827]"
        >
          <span className="block">From Your Idea</span>
          <span className="block">
            to <span className="text-[#00875A]">Reality.</span>
          </span>
        </h2>
        <p className="mt-4 hidden max-w-md text-[15px] leading-relaxed text-[#667085] sm:block sm:text-base">
          We make software development easy,
          <span className="sm:block"> with a clear process from start to finish.</span>
        </p>
      </motion.div>

      <ul
        role="list"
        aria-label="Our process benefits"
        className="mt-[clamp(20px,3vh,30px)] hidden gap-[clamp(10px,1.4vh,15px)] sm:grid sm:grid-cols-2 lg:grid-cols-1"
      >
        {benefits.map((benefit, index) => (
          <BenefitRow
            key={benefit.title}
            benefit={benefit}
            index={index}
            reduce={reduce}
          />
        ))}
      </ul>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, delay: 0.38, ease: EASE }}
        className="mt-[clamp(20px,3vh,30px)] hidden lg:block"
      >
        <ProcessCtas />
      </motion.div>
    </div>
  );
}

function FeaturePill({ feature }: { feature: ProcessFeature }) {
  const Icon = feature.icon;
  return (
    <li className="flex h-7 items-center gap-1.5 rounded-[9px] bg-[#EFFAF6] px-2.5 text-[#003F35]">
      <Icon
        className="size-3.5 shrink-0 text-[#00875A]"
        strokeWidth={2}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-[11.5px] leading-none font-medium">
        {feature.label}
      </span>
    </li>
  );
}

function buildFlowPath(
  nodes: { x: number; y: number }[],
  offset: { x: number; y: number },
) {
  const parts = [`M ${nodes[0].x + offset.x} ${nodes[0].y + offset.y}`];
  for (let index = 0; index < nodes.length - 1; index += 1) {
    const start = nodes[index];
    const end = nodes[index + 1];
    const deltaY = end.y - start.y;
    const bend = (index % 2 === 0 ? -1 : 1) * 6;
    parts.push(
      `C ${start.x + offset.x + bend} ${start.y + offset.y + deltaY * 0.33}, ${end.x + offset.x + bend} ${end.y + offset.y - deltaY * 0.33}, ${end.x + offset.x} ${end.y + offset.y}`,
    );
  }
  return parts.join(" ");
}

function buildSegments(
  nodes: { x: number; y: number }[],
  offset: { x: number; y: number },
) {
  const segments: string[] = [];
  for (let index = 0; index < nodes.length - 1; index += 1) {
    const start = nodes[index];
    const end = nodes[index + 1];
    const deltaY = end.y - start.y;
    const bend = (index % 2 === 0 ? -1 : 1) * 6;
    segments.push(
      `M ${start.x + offset.x} ${start.y + offset.y} C ${start.x + offset.x + bend} ${start.y + offset.y + deltaY * 0.33}, ${end.x + offset.x + bend} ${end.y + offset.y - deltaY * 0.33}, ${end.x + offset.x} ${end.y + offset.y}`,
    );
  }
  return segments;
}

function ProcessStage({
  step,
  index,
  reduce,
  started,
  onMeasure,
}: {
  step: ProcessStep;
  index: number;
  reduce: boolean | null;
  started: boolean;
  onMeasure: (element: HTMLDivElement | null) => void;
}) {
  const hasDrift = index === 3;
  const delay = 0.1 + index * 0.6;
  const revealed = reduce || started;

  return (
    <li className="relative grid min-h-[148px] grid-cols-[96px_minmax(0,1fr)] items-start gap-3 sm:min-h-[136px] sm:grid-cols-[108px_minmax(0,1fr)] sm:gap-4 lg:h-[clamp(118px,14.2vh,140px)] lg:min-h-0 lg:grid-cols-[clamp(92px,8vw,108px)_minmax(0,1fr)] lg:gap-[clamp(16px,1.5vw,24px)]">
      <div className="relative z-10 h-full">
        <div
          ref={onMeasure}
          className="relative mx-auto mt-1 size-[clamp(66px,8vh,90px)] sm:size-[clamp(72px,9vh,94px)] lg:size-[clamp(76px,9vh,98px)]"
        >
          <motion.div
            aria-hidden="true"
            initial={reduce ? false : { opacity: 0, scale: 1 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1 }
                : revealed
                  ? { opacity: 1, scale: [1, 1.05, 1] }
                  : { opacity: 0, scale: 1 }
            }
            transition={{ duration: 0.5, delay, ease: EASE }}
            className="pointer-events-none absolute inset-0 [filter:drop-shadow(0_12px_16px_rgba(0,87,74,0.16))]"
          >
            <svg viewBox="0 0 160 160" className="absolute inset-0 h-full w-full">
              <path d="M22 66 L124 13 L126 116 L30 156 Z" fill="#E1F8F0" opacity="0.92" />
              <path d="M38 80 L136 27 L140 120 L52 148 Z" fill="#CDEFE2" opacity="0.68" />
              <path d="M66 118 L144 58 L130 132 L78 148 Z" fill="#AFE8D6" opacity="0.52" />
            </svg>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14, scale: 1, x: 0 }}
            animate={
              reduce
                ? { opacity: 1, y: 0, scale: 1, x: hasDrift ? 5 : 0 }
                : revealed
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: [1, 1.05, 1],
                      x: hasDrift ? 5 : 0,
                    }
                  : { opacity: 0, y: 14, scale: 1, x: 0 }
            }
            transition={{
              opacity: { duration: 0.5, delay, ease: EASE },
              y: { duration: 0.5, delay, ease: EASE },
              scale: { duration: 0.55, delay, ease: EASE },
              x: {
                duration: hasDrift ? 0.4 : 0,
                delay: hasDrift ? 2.4 : 0,
                ease: EASE,
              },
            }}
            className="absolute inset-0"
          >
            <Image
              src={step.icon}
              alt={step.alt}
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1024px) 100px, 95px"
              className="object-contain"
            />
            <svg
              viewBox="0 0 160 160"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_2px_5px_rgba(0,87,74,0.22)]"
            >
              <g
                fill="none"
                stroke="#00875A"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {step.outline.map((d, pathIndex) => (
                  <motion.path
                    key={`aura-${pathIndex}`}
                    d={d}
                    strokeWidth={6}
                    strokeOpacity={0.1}
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: revealed ? 1 : 0 }}
                    transition={{
                      duration: reduce ? 0 : 0.35,
                      delay: reduce ? 0 : 0.26 + index * 0.6,
                      ease: EASE,
                    }}
                  />
                ))}
                {step.outline.map((d, pathIndex) => (
                  <motion.path
                    key={`line-${pathIndex}`}
                    d={d}
                    strokeWidth={2.5}
                    strokeOpacity={0.82}
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: revealed ? 1 : 0 }}
                    transition={{
                      duration: reduce ? 0 : 0.35,
                      delay: reduce ? 0 : 0.26 + index * 0.6,
                      ease: EASE,
                    }}
                  />
                ))}
              </g>
            </svg>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={
          reduce
            ? { opacity: 1, y: 0 }
            : revealed
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 14 }
        }
        transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : delay, ease: EASE }}
        className="relative z-10 min-w-0 pt-0.5"
      >
        <span className="block text-[32px] leading-[0.9] font-semibold tracking-tight text-[#D9F1E9] lg:text-[clamp(30px,3.8vh,36px)]">
          {step.number}
        </span>
        <h3 className="mt-1 text-[19px] leading-tight font-bold tracking-tight text-[#111827] lg:text-[clamp(19px,2.2vh,22px)]">
          {step.title}
        </h3>
        <p className="mt-1 max-w-xl text-[13px] leading-[1.45] text-[#667085] lg:text-[clamp(12.5px,1.5vh,14px)]">
          {step.description}
        </p>
        <ul
          role="list"
          aria-label={`${step.title} features`}
          className="mt-2 flex flex-wrap gap-1.5 lg:flex-nowrap"
        >
          {step.features.map((feature) => (
            <FeaturePill key={feature.label} feature={feature} />
          ))}
        </ul>
      </motion.div>
    </li>
  );
}

function ProcessTimeline({ reduce }: { reduce: boolean | null }) {
  const timelineRef = useRef<HTMLOListElement | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [layout, setLayout] = useState<{
    width: number;
    height: number;
    path: string;
    segments: string[];
  } | null>(null);

  const started = useInView(timelineRef, { once: true, amount: 0.25 });

  const measure = useCallback(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const timelineRect = timeline.getBoundingClientRect();
    const nodes = nodeRefs.current.map((node) => {
      if (!node) return null;
      const rect = node.getBoundingClientRect();
      return {
        x: rect.left - timelineRect.left + rect.width / 2,
        y: rect.top - timelineRect.top + rect.height / 2,
      };
    });
    if (nodes.some((node) => node === null)) return;
    const width = timeline.clientWidth;
    const height = timeline.clientHeight;
    if (!width || !height) return;
    const offset = { x: 0, y: 0 };
    setLayout({
      width,
      height,
      path: buildFlowPath(nodes as { x: number; y: number }[], offset),
      segments: buildSegments(nodes as { x: number; y: number }[], offset),
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    const timeline = timelineRef.current;
    if (!timeline) return;
    let timeout: ReturnType<typeof setTimeout>;
    const observer = new ResizeObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(measure, 30);
    });
    observer.observe(timeline);
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [measure]);

  return (
    <ol
      id="process-flow"
      ref={timelineRef}
      role="list"
      aria-label="Software development process"
      className="relative flex flex-col gap-[clamp(6px,1.1vh,12px)]"
    >
      {layout && (
        <svg
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d={layout.path}
            fill="none"
            stroke="#BFE9D8"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          {layout.segments.map((segment, index) => (
            <g key={segment}>
              <motion.path
                d={segment}
                fill="none"
                stroke="#00875A"
                strokeWidth="8"
                strokeLinecap="round"
                strokeOpacity="0.14"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: reduce || started ? 1 : 0 }}
                transition={{
                  duration: reduce ? 0 : 0.45,
                  delay: reduce ? 0 : 0.45 + index * 0.6,
                  ease: EASE,
                }}
              />
              <motion.path
                d={segment}
                fill="none"
                stroke="#00875A"
                strokeWidth="2"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: reduce || started ? 1 : 0 }}
                transition={{
                  duration: reduce ? 0 : 0.45,
                  delay: reduce ? 0 : 0.45 + index * 0.6,
                  ease: EASE,
                }}
              />
            </g>
          ))}
          {!reduce && (
            <>
              <motion.circle
                r="5.5"
                fill="#00875A"
                opacity="0.18"
                style={{
                  offsetPath: `path("${layout.path}")`,
                }}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: started ? "100%" : "0%" }}
                transition={{ duration: 2.3, delay: 0.15, ease: "linear" }}
              />
              <motion.circle
                r="2.2"
                fill="#10B981"
                style={{
                  offsetPath: `path("${layout.path}")`,
                }}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: started ? "100%" : "0%" }}
                transition={{ duration: 2.3, delay: 0.15, ease: "linear" }}
              />
            </>
          )}
        </svg>
      )}

      {processSteps.map((step, index) => (
        <ProcessStage
          key={step.number}
          step={step}
          index={index}
          reduce={reduce}
          started={started}
          onMeasure={(element) => {
            nodeRefs.current[index] = element;
          }}
        />
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
      className="relative isolate bg-white lg:h-[calc(100svh-72px)] lg:min-h-[696px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <span className="absolute top-0 left-0 h-28 w-44 bg-[#BDEBDB] opacity-[0.16] [clip-path:polygon(0_0,100%_0,55%_55%,0_100%)]" />
        <span className="absolute top-0 left-8 h-20 w-40 bg-[#D9F5EC] opacity-20 [clip-path:polygon(25%_0,100%_0,100%_55%,50%_100%,0_55%)]" />
        <span className="absolute bottom-0 left-0 h-48 w-60 bg-[#BDEBDB] opacity-[0.12] [clip-path:polygon(0_0,100%_100%,0_100%)]" />
        <span className="absolute bottom-0 left-0 h-28 w-80 bg-[#D9F5EC] opacity-[0.16] [clip-path:polygon(0_10%,100%_100%,0_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1520px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:h-full lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-center lg:gap-[clamp(28px,4vw,56px)] lg:px-12 lg:py-[clamp(24px,4vh,48px)]">
        <ProcessIntro reduce={reduce} />

        <div className="min-w-0 lg:border-l lg:border-[#E5EDEB] lg:pl-[clamp(28px,3vw,48px)]">
          <ProcessTimeline reduce={reduce} />
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.25, ease: EASE }}
            className="mt-8 lg:hidden"
          >
            <ProcessCtas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
