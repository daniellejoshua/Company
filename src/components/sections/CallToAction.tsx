import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CallToAction() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-white px-5 pt-12 pb-5 sm:px-8 sm:pt-16 sm:pb-6"
    >
      <div className="relative mx-auto min-h-[410px] max-w-7xl overflow-hidden rounded-[24px] border border-[#DDEFE8] bg-[linear-gradient(120deg,#F4FCF9_0%,#ECF9F4_52%,#E2F5EE_100%)] shadow-[0_18px_55px_rgba(0,63,53,0.08)] md:min-h-[320px]">
        <div className="relative z-30 max-w-[760px] px-6 pt-8 sm:px-9 sm:pt-10 md:w-[61%] md:px-10 md:py-8 lg:px-12 lg:py-9">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#00875A]">
            Ready to build?
          </p>
          <h2
            id="cta-heading"
            className="mt-3 text-[clamp(2rem,3.4vw,3rem)] leading-[1.08] font-extrabold tracking-[-0.04em] text-[#111827]"
          >
            Let&apos;s Create Something Amazing Together.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5F6F6B] sm:text-base sm:leading-7">
            Whether you need a business system, MLM platform, POS, eCommerce,
            or a custom app — we&apos;re here to bring your ideas to life.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:praxijade@gmail.com?subject=Start%20a%20Project%20with%20PRAXIS%20JADE"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#002F2B] to-[#008F68] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,77,64,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,77,64,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008F68]"
            >
              Start Your Project
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#317669] bg-white/70 px-6 text-sm font-semibold text-[#173F39] transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008F68]"
            >
              <MessageCircle className="size-4" strokeWidth={1.8} aria-hidden="true" />
              Chat with Us
            </Link>
          </div>
        </div>

        <div
          className="relative h-[220px] md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[40%]"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 200 200"
            className="absolute -top-14 right-[22%] z-0 w-[240px] opacity-90 sm:w-[260px]"
          >
            <path d="M-30 70 L120 -30 L150 90 L10 150 Z" fill="#DCF6EC" opacity="0.9" />
            <path d="M10 80 L150 -20 L175 110 L30 160 Z" fill="#C4EDDB" opacity="0.65" />
            <path d="M60 120 L170 40 L150 140 L80 170 Z" fill="#A7E2C8" opacity="0.45" />
          </svg>
          <svg
            viewBox="0 0 200 200"
            className="absolute right-[-0.5rem] bottom-[-3.5rem] z-0 w-[250px] sm:w-[270px]"
          >
            <path d="M-10 120 L90 40 L120 130 L30 170 Z" fill="#A9E6CE" opacity="0.85" />
            <path d="M30 110 L130 50 L150 120 L70 150 Z" fill="#82D7BA" opacity="0.6" />
            <path d="M50 130 L160 60 L185 150 L90 180 Z" fill="#5CC4A4" opacity="0.42" />
          </svg>
          <svg
            viewBox="0 0 200 200"
            className="absolute top-[38%] right-[-3rem] z-0 hidden w-[220px] lg:block"
          >
            <path d="M40 110 L150 40 L180 130 L90 170 Z" fill="#C4EDDB" opacity="0.55" />
            <path d="M70 125 L160 75 L185 145 L115 180 Z" fill="#A7E2C8" opacity="0.38" />
          </svg>

          <div className="absolute inset-0 z-0 bg-[#DDF7ED] opacity-40 [clip-path:polygon(24%_100%,100%_0,100%_100%)]" />
          <div className="absolute inset-y-0 right-0 z-0 w-[76%] bg-[#E9FAF4] opacity-35 [clip-path:polygon(0_100%,100%_20%,100%_100%)]" />

          <Image
            src="/assets/jade_cta_origami_depth_svgs/jade_cta_upper_origami_depth.svg"
            alt=""
            width={480}
            height={460}
            className="absolute top-[4%] right-[30%] z-20 w-[180px] origin-top scale-y-[1.38] drop-shadow-[0_12px_20px_rgba(0,77,64,0.12)] sm:right-[28%] sm:w-[200px] md:top-[19%] md:right-[36%] md:w-[230px] md:scale-y-[1.68]"
          />
          <Image
            src="/assets/jade_cta_origami_depth_svgs/jade_cta_lower_origami_depth.svg"
            alt=""
            width={400}
            height={250}
            className="absolute right-[-2%] bottom-[-3%] z-10 w-[220px] drop-shadow-[0_12px_20px_rgba(0,63,53,0.13)] sm:w-[240px] md:right-[10%] md:w-[clamp(210px,18vw,270px)]"
          />

          <div className="absolute top-[8%] right-[3%] z-40 rotate-[-3deg] text-[#234D45] md:top-[12%] md:right-[2%]">
            <p className="font-handwritten text-[17px] leading-[0.95] sm:text-[19px] md:text-xl xl:text-[22px]">
              Your
              <br />
              Vision
              <br />
              Our Code
            </p>
            <svg
              viewBox="0 0 68 38"
              className="mt-1 ml-1 h-9 w-16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62 4C59 20 43 30 18 29"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M24 23L17 29L24 34"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
