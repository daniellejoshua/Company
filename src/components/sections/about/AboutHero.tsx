import Image from "next/image";
import Link from "next/link";

const heroArtwork =
  "/assets/PRAXISJADE(GREEN)%20ASSETS/ABOUT/praxis-jade-crystal-p-hero-lighting-v2.svg";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-jade-off-white lg:min-h-[660px]">
      <div className="about-crystal-reveal pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute inset-y-0 right-[-5%] w-[70%]">
          <Image
            src={heroArtwork}
            alt=""
            fill
            priority
            sizes="70vw"
            className="object-contain object-right"
          />
          <div
            className="about-crystal-shine absolute left-[38%] top-[18%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.98)_0%,rgba(200,255,239,0.62)_16%,rgba(80,220,176,0.2)_38%,transparent_70%)] mix-blend-screen"
            aria-hidden="true"
          />
        </div>
      </div>
      <p className="about-impact-note absolute right-[5.5%] top-[55%] z-20 hidden border-l border-jade-deep/70 py-2 pl-5 font-serif text-xl italic leading-7 text-jade-deep xl:block">
        Ideas
        <br />
        Into
        <br />
        Impact
      </p>

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 px-5 pt-14 sm:px-8 sm:pt-16 lg:min-h-[660px] lg:px-12 lg:pt-0">
        <div className="max-w-[800px] self-center lg:self-start lg:py-[7.25rem]">
          <p className="about-copy-reveal mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-jade-primary">
            About Praxis Jade
          </p>
          <h1 className="text-[clamp(2.65rem,3.8vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            <span className="about-heading-line block xl:whitespace-nowrap">
              <span>Built by people who believe</span>
            </span>
            <span className="about-heading-line block xl:whitespace-nowrap">
              <span className="about-heading-delay">
                ideas should create <strong className="font-semibold text-jade-primary">real impact.</strong>
              </span>
            </span>
          </h1>
          <p className="about-copy-reveal mt-7 max-w-[620px] text-base leading-7 text-jade-charcoal sm:text-lg">
            We turn business ideas into practical software, from concept to launch.
          </p>
          <div className="about-copy-reveal about-actions-delay mt-7 flex flex-wrap gap-4">
            <Link
              href="mailto:praxijade@gmail.com"
              className="inline-flex h-12 items-center rounded-full bg-jade-deep px-7 text-sm font-semibold text-white transition-colors hover:bg-jade-primary"
            >
              Let&apos;s Work Together <span className="ml-3" aria-hidden="true">→</span>
            </Link>
            <Link
              href="#our-story"
              className="inline-flex h-12 items-center rounded-full border border-jade-primary px-12 text-sm font-semibold text-jade-deep transition-colors hover:bg-jade-soft/10"
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="about-crystal-reveal relative -mx-12 -mt-2 min-h-[330px] sm:-mx-8 sm:min-h-[470px] lg:hidden">
          <Image
            src={heroArtwork}
            alt="Abstract crystalline letter P"
            fill
            priority
            sizes="120vw"
            className="scale-110 object-contain object-bottom-right sm:scale-105"
          />
          <div
            className="about-crystal-shine absolute left-[38%] top-[18%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.98)_0%,rgba(200,255,239,0.62)_16%,rgba(80,220,176,0.2)_38%,transparent_70%)] mix-blend-screen"
            aria-hidden="true"
          />
          <p className="about-impact-note absolute right-[9%] top-[42%] hidden border-l border-jade-primary/50 py-3 pl-5 font-serif text-lg italic leading-6 text-jade-deep">
            Ideas
            <br />
            Into
            <br />
            Impact
          </p>
        </div>
      </div>
    </section>
  );
}
