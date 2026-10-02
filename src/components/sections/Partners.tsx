"use client";

import { useEffect } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

import { partners, type Partner } from "@/data/partners";

const carouselPartners = [...partners, ...partners];

function PartnerLogo({
  partner,
  duplicate = false,
}: {
  partner: Partner;
  duplicate?: boolean;
}) {
  const logo = partner.logo ? (
    <Image
      src={partner.logo}
      alt={partner.alt}
      width={140}
      height={48}
      className="max-h-12 w-auto max-w-[140px] object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
    />
  ) : (
    <span className="max-w-[150px] text-center text-xs leading-4 font-semibold text-jade-charcoal sm:text-sm">
      {partner.name}
    </span>
  );

  const className =
    "group flex h-12 items-center justify-center opacity-70 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jade-primary";

  return partner.url && !duplicate ? (
    <Link href={partner.url} className={className} aria-label={partner.name}>
      {logo}
    </Link>
  ) : (
    <div className={className}>{logo}</div>
  );
}

export function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
      loop: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.7,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const autoScroll = emblaApi.plugins().autoScroll;
    const syncMotionPreference = () => {
      if (reducedMotion.matches) {
        autoScroll.stop();
      } else {
        autoScroll.play();
      }
    };

    syncMotionPreference();
    reducedMotion.addEventListener("change", syncMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", syncMotionPreference);
    };
  }, [emblaApi]);

  return (
    <section
      aria-labelledby="partners-heading"
      className="bg-jade-soft/10"
    >
      <div className="mx-auto max-w-7xl px-5 pt-5 pb-5 sm:px-8 sm:pt-6 sm:pb-6">
        <div className="text-center">
          <h2
            id="partners-heading"
            className="text-xs font-bold tracking-[0.12em] text-jade-dark uppercase"
          >
            Trusted by businesses like yours
          </h2>
          <p className="mt-2 text-[13px] text-jade-charcoal">
            We partner with businesses across different industries.
          </p>
        </div>

        <div className="mt-5">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-6 flex touch-pan-y">
              {carouselPartners.map((partner, index) => {
                const duplicate = index >= partners.length;

                return (
                <div
                  key={`${partner.name}-${duplicate ? "duplicate" : "original"}`}
                  className="min-w-0 flex-[0_0_50%] pl-6 sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%]"
                  aria-hidden={duplicate || undefined}
                >
                  <PartnerLogo partner={partner} duplicate={duplicate} />
                </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
