import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CallToAction() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-jade-off-white px-5 pt-5 pb-5 sm:px-8 sm:pt-6 sm:pb-6"
    >
      <div className="relative mx-auto min-h-[500px] max-w-7xl overflow-hidden rounded-[16px] bg-jade-black sm:min-h-[460px] md:h-[340px] md:min-h-0">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_72%_45%,rgba(18,145,105,0.18)_0%,rgba(8,90,68,0.10)_30%,rgba(5,40,33,0.04)_50%,transparent_72%)]"
          aria-hidden="true"
        />

        <div className="relative z-30 flex max-w-[820px] flex-col justify-center px-6 py-8 sm:px-8 md:h-full md:w-[64%] md:px-10 md:py-7 lg:px-11">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-jade-fresh">
            Ready to build?
          </p>
          <h2
            id="cta-heading"
            className="mt-2.5 text-[2rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-jade-off-white md:text-[clamp(2rem,2.7vw,2.5rem)]"
          >
            Let&apos;s Create Something
            <span className="block text-jade-fresh">Amazing Together.</span>
          </h2>
          <p className="mt-3 max-w-[620px] text-[13px] leading-[1.65] text-jade-muted md:text-sm md:leading-[1.6]">
            Whether you need a business system, MLM platform, POS, eCommerce,
            or a custom app — we&apos;re here to bring your ideas to life.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <a
              href="mailto:praxijade@gmail.com?subject=Start%20a%20Project%20with%20PRAXIS%20JADE"
              className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full bg-jade-primary px-5 text-[13px] font-semibold text-jade-off-white transition-colors duration-200 hover:bg-jade-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-fresh"
            >
              Start Your Project
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
            <Link
              href="#contact"
              className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full border border-jade-off-white/65 bg-transparent px-5 text-[13px] font-semibold text-jade-off-white transition-colors duration-200 hover:bg-jade-off-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-fresh"
            >
              <MessageCircle className="size-3.5" strokeWidth={1.7} aria-hidden="true" />
              Chat with Us
            </Link>
          </div>
        </div>

        <div
          className="relative h-[220px] md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[38%]"
          aria-hidden="true"
        >
          <Image
            src="/assets/PRAXISJADE(GREEN) ASSETS/praxis-jade-band-left.svg"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 767px) 440px, (max-width: 1199px) 560px, 640px"
            className="absolute right-[-18%] bottom-[-68%] z-[5] h-auto w-[142%] max-w-none opacity-55 [mask-image:linear-gradient(to_right,transparent_0%,transparent_35%,#000_78%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_35%,#000_78%)] sm:right-[-8%] md:right-[12%] md:bottom-[-58%] md:w-[132%] md:min-w-[560px] lg:min-w-[620px]"
          />

          <Image
            src="/assets/PRAXISJADE(GREEN) ASSETS/praxis-jade-band-left.svg"
            alt=""
            width={1254}
            height={1254}
            sizes="620px"
            className="absolute right-[4%] bottom-[-74%] z-[6] hidden h-auto w-[124%] min-w-[580px] max-w-none opacity-35 [mask-image:linear-gradient(to_right,transparent_0%,transparent_40%,#000_82%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_40%,#000_82%)] md:block"
          />

          <Image
            src="/assets/PRAXISJADE(GREEN) ASSETS/praxis-jade-band-right.svg"
            alt=""
            width={1254}
            height={1254}
            sizes="650px"
            className="absolute right-[-2%] bottom-[-72%] z-[8] hidden h-auto w-[132%] min-w-[620px] max-w-none opacity-40 [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.2)_34%,#000_76%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.2)_34%,#000_76%)] md:block"
          />

          <Image
            src="/assets/PRAXISJADE(GREEN) ASSETS/praxis-jade-p-crystal.svg"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 767px) 340px, (max-width: 1199px) 430px, 450px"
            className="absolute right-[2%] bottom-[-30%] z-10 h-auto w-[96%] max-w-none opacity-[0.96] sm:right-[8%] sm:w-[90%] md:right-[18%] md:bottom-[-21%] md:w-[92%] md:min-w-[410px] lg:min-w-[440px]"
          />

          <Image
            src="/assets/PRAXISJADE(GREEN) ASSETS/praxis-jade-band-right.svg"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 767px) 470px, (max-width: 1199px) 650px, 730px"
            className="absolute right-[-28%] bottom-[-82%] z-20 h-auto w-[150%] max-w-none opacity-90 [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.22)_28%,#000_68%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.22)_28%,#000_68%)] sm:right-[-22%] md:right-[-25%] md:bottom-[-92%] md:w-[150%] md:min-w-[650px] lg:min-w-[720px]"
          />

          <div className="absolute top-[9%] right-[8%] z-40 rotate-[-3deg] text-jade-muted md:top-[12%] md:right-[15%]">
            <p className="font-handwritten text-[15px] leading-[0.95] sm:text-base md:text-[17px] xl:text-lg">
              Your
              <br />
              Vision
              <br />
              Our Code
            </p>
            <svg
              viewBox="0 0 68 38"
              className="mt-0.5 ml-1 h-7 w-14"
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
