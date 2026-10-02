import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="hero-visual relative mx-auto mt-8 w-[calc(100%+2rem)] max-w-[460px] self-center">
      <div className="hero-visual-glow absolute inset-[8%_-8%_8%_-8%] z-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(80,166,135,0.22),rgba(250,251,250,0)_70%)]" />

      <Image
        src="/assets/PRAXISJADE(GREEN) ASSETS/praxis-jade-hero-green.svg"
        alt=""
        width={1672}
        height={941}
        aria-hidden="true"
        sizes="(max-width: 767px) 640px, (max-width: 1199px) 70vw, 800px"
        className="hero-shape hero-shape-art pointer-events-none absolute top-[56%] right-[-20%] z-[1] h-auto w-[145%] max-w-none -translate-y-1/2 opacity-90 md:top-[34%] md:right-[-35%] md:w-[220%] md:opacity-95"
      />

      <Image
        src="/assets/PRAXISJADE(GREEN) ASSETS/Jade dashboard on laptop and smartphone.png"
        alt="PRAXIS JADE business software dashboard displayed on a laptop and smartphone"
        width={1620}
        height={971}
        priority
        sizes="(max-width: 767px) 460px, (max-width: 900px) 640px, (max-width: 1199px) 66vw, 760px"
        className="hero-device hero-reveal hero-delay-3 relative z-10 mx-auto h-auto w-full object-contain drop-shadow-[0_24px_32px_rgba(21,46,39,0.15)]"
      />

      <div className="relative z-20 mt-4 flex items-center justify-center gap-3 px-4 text-center text-[10px] font-bold tracking-[0.14em] text-jade-charcoal uppercase md:hidden">
        <span className="h-px w-4 bg-jade-muted" aria-hidden="true" />
        <span>Software that grows with you</span>
        <span className="h-px w-4 bg-jade-muted" aria-hidden="true" />
      </div>
    </div>
  );
}
