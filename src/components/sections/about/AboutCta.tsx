import Image from "next/image";
import Link from "next/link";

const heroArtwork =
  "/assets/PRAXISJADE(GREEN)%20ASSETS/ABOUT/praxis-jade-crystal-p-hero-lighting-v2.svg";

export default function AboutCta() {
  return (
    <section className="bg-white px-4 pb-5 sm:px-6 lg:px-8">
      <div className="relative mx-auto min-h-[300px] max-w-[1370px] overflow-hidden rounded-xl bg-jade-black text-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(12,19,21,1)_42%,rgba(7,81,63,0.78)_100%)]" />
        <div className="relative z-10 max-w-[720px] px-7 py-12 sm:px-12 lg:px-16 lg:py-14">
          <h2 className="text-balance text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Good software starts
            <br />
            with a <span className="text-jade-fresh">conversation.</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-jade-muted">
            Tell us where you are now and where you&apos;d like your business to go.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-7">
            <Link
              href="mailto:praxijade@gmail.com"
              className="inline-flex h-12 items-center rounded-full bg-jade-primary px-8 text-sm font-semibold text-white hover:bg-jade-fresh"
            >
              Let&apos;s Talk <span className="ml-3" aria-hidden="true">→</span>
            </Link>
            <Link href="/#work" className="text-sm font-semibold text-white hover:text-jade-soft">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/60 text-[10px]" aria-hidden="true">→</span>
              View Our Work
            </Link>
          </div>
        </div>

        <p className="absolute right-[7%] top-12 z-10 hidden font-serif text-sm italic leading-5 text-white/75 lg:block">
          Ideas
          <br />
          Into
          <br />
          Impact
        </p>
        <div className="pointer-events-none absolute -bottom-[90%] -right-[6%] h-[180%] w-[55%] opacity-95">
          <Image
            src={heroArtwork}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain object-bottom-right"
          />
        </div>
      </div>
    </section>
  );
}
