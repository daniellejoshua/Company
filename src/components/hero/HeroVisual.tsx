import Image from "next/image";

import { HeroAnnotation } from "@/components/hero/HeroAnnotation";

export function HeroVisual() {
  return (
    <div className="hero-visual relative mx-auto mt-8 w-[calc(100%+2rem)] max-w-[460px] self-center">
      <div className="hero-visual-glow absolute inset-[8%_-8%_8%_-8%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,248,242,0.95),rgba(255,255,255,0)_70%)]" />

      <Image
        src="/assets/hero/hero-shape.svg"
        alt=""
        width={600}
        height={500}
        aria-hidden="true"
        className="hero-shape hero-shape-art absolute right-[-20%] bottom-[-2%] z-0 h-auto w-[105%] max-w-none object-contain opacity-30"
      />

      <HeroAnnotation />

      <div
        className="hero-tablet-dots absolute top-[12%] right-[8%] z-10 hidden h-14 w-20 opacity-25 [background-image:radial-gradient(circle,#008F68_1.5px,transparent_1.5px)] [background-size:10px_10px]"
        aria-hidden="true"
      />

      <Image
        src="/assets/hero/DeviceMockup.png"
        alt="JADE business software dashboard displayed on a laptop and smartphone"
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
