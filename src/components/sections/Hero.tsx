import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { HeroVisual } from "@/components/hero/HeroVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-clip bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_43%,#E8F8F2_0%,rgba(232,248,242,0.5)_25%,#FFFFFF_61%)]" />

      <div className="hero-layout mx-auto max-w-7xl px-5 pt-8 pb-10 min-[360px]:px-6">
        <div className="hero-copy relative z-10 mx-auto max-w-[480px]">
          <p className="hero-reveal whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.08em] text-[#008F68] md:text-xs md:tracking-[0.12em]">
            Ideas · Technology · Real Solutions
          </p>

          <h1
            id="hero-heading"
            className="hero-heading hero-reveal hero-delay-1 mt-4 text-[2rem] leading-[1.1] font-extrabold tracking-[-0.045em] text-[#17212B] min-[360px]:text-4xl min-[430px]:text-[2.375rem]"
          >
            <span className="md:hidden">
              Custom Software
              <br />
              Built for <span className="text-[#008F68]">Your</span>
              <br />
              <span className="text-[#008F68]">Business.</span>
            </span>
            <span className="hero-title-tablet hidden">
              Custom Software
              <br />
              Built for <span className="text-[#008F68]">Your</span>
              <br />
              <span className="text-[#008F68]">Business.</span>
            </span>
            <span className="hero-title-desktop hidden">
              Custom Software
              <br />
              Built for <span className="text-[#008F68]">Your</span>
              <br />
              <span className="text-[#008F68]">Business</span>
            </span>
          </h1>

          <p className="hero-description hero-reveal hero-delay-2 mt-5 max-w-[390px] text-sm leading-[1.65] font-normal text-[#64748B]">
            <span className="md:hidden">
              We design and develop tailored software solutions to help
              businesses work smarter, scale faster, and grow with confidence.
            </span>
            <span className="hidden md:inline">
              We design and develop tailored software solutions — from business
              systems, MLM platforms, POS, eCommerce, to mobile, desktop, and
              web applications.
            </span>
          </p>

          <div className="hero-actions hero-reveal hero-delay-3 mt-7 flex flex-col gap-3">
            <Link
              href="#contact"
              className="hero-primary-cta flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#002F2B] to-[#008F68] px-7 text-sm font-bold text-white shadow-[0_10px_30px_rgba(0,77,64,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(0,77,64,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008F68]"
            >
              Start Your Project
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="#work"
              className="hero-secondary-cta flex h-[50px] w-full items-center justify-center rounded-full border border-[#008F68] bg-white px-7 text-sm font-bold text-[#17212B] transition-colors duration-200 hover:bg-[#E8F8F2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008F68]"
            >
              See Our Work
            </Link>
          </div>
        </div>

        <HeroVisual />

        <div className="hero-tablet-tagline hidden items-center justify-center gap-4 text-center text-[11px] font-bold tracking-[0.18em] text-[#64748B] uppercase">
          <span className="h-px w-8 bg-[#94A3B8]" aria-hidden="true" />
          <span>Software that grows with you</span>
          <span className="h-px w-8 bg-[#94A3B8]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
