import Image from "next/image";

import { HeroAnnotation } from "@/components/hero/HeroAnnotation";

export function HeroVisual() {
  return (
    <div className="hero-visual relative mx-auto mt-8 w-[calc(100%+2rem)] max-w-[460px] self-center">
      <div className="hero-visual-glow absolute inset-[8%_-8%_8%_-8%] z-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,248,242,0.95),rgba(255,255,255,0)_70%)]" />

      <svg
        viewBox="0 0 800 620"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute -top-[8%] -left-[18%] z-0 h-[108%] w-[130%] drop-shadow-[0_18px_30px_rgba(0,87,74,0.08)]"
      >
        <path
          d="M38 244 L620 26 L714 472 L116 612 Z"
          fill="#E1F8F0"
          opacity="0.88"
        />
        <path
          d="M126 138 L772 226 L672 572 L48 504 Z"
          fill="#CDEFE2"
          opacity="0.62"
        />
        <path
          d="M328 108 L782 318 L630 602 L178 512 Z"
          fill="#AFE8D6"
          opacity="0.42"
        />
      </svg>

      <div
        className="hero-shape pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      >
        <Image
          src="/assets/jade_hero_svgs/hero_origami_upper.svg"
          alt=""
          width={320}
          height={370}
          sizes="(max-width: 767px) 210px, (max-width: 1199px) 260px, 320px"
          className="absolute -top-[5%] right-[2%] h-auto w-[48%] drop-shadow-[0_18px_28px_rgba(0,78,61,0.13)] sm:right-[12%] sm:w-[44%] lg:-top-[2%] lg:right-[16%] lg:w-[43%]"
        />
        <Image
          src="/assets/jade_hero_svgs/hero_origami_lower.svg"
          alt=""
          width={430}
          height={340}
          sizes="(max-width: 767px) 260px, (max-width: 1199px) 350px, 430px"
          className="absolute right-[-8%] bottom-[1%] h-auto w-[63%] drop-shadow-[0_20px_30px_rgba(0,63,53,0.14)] sm:w-[59%] lg:right-[-4%] lg:bottom-[2%] lg:w-[58%]"
        />
        <Image
          src="/assets/jade_hero_svgs/hero_origami_accent.svg"
          alt=""
          width={220}
          height={280}
          sizes="(max-width: 767px) 130px, (max-width: 1199px) 170px, 220px"
          className="absolute bottom-[9%] left-[6%] h-auto w-[29%] opacity-90 drop-shadow-[0_14px_24px_rgba(0,77,64,0.12)] sm:left-[9%] sm:w-[26%] lg:bottom-[12%] lg:left-[12%] lg:w-[25%]"
        />
      </div>

      <HeroAnnotation />

      <div
        className="hero-tablet-dots absolute top-[12%] right-[8%] z-10 hidden h-14 w-20 opacity-25 [background-image:radial-gradient(circle,#008F68_1.5px,transparent_1.5px)] [background-size:10px_10px]"
        aria-hidden="true"
      />

      <Image
        src="/assets/hero/DeviceMockup.png"
        alt="PRAXIS JADE business software dashboard displayed on a laptop and smartphone"
        width={1536}
        height={1024}
        priority
        sizes="(max-width: 767px) 460px, (max-width: 900px) 640px, (max-width: 1199px) 66vw, 760px"
        className="hero-device hero-reveal hero-delay-3 relative z-10 mx-auto h-auto w-full object-contain"
      />

      <div className="relative z-20 mt-4 flex items-center justify-center gap-3 px-4 text-center text-[10px] font-bold tracking-[0.14em] text-[#64748B] uppercase md:hidden">
        <span className="h-px w-4 bg-[#94A3B8]" aria-hidden="true" />
        <span>Software that grows with you</span>
        <span className="h-px w-4 bg-[#94A3B8]" aria-hidden="true" />
      </div>
    </div>
  );
}
