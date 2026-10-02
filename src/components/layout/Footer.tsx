import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { services } from "@/data/services";

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#solutions" },
  { label: "Our Work", href: "#work" },
];

const linkClassName =
  "group inline-flex w-fit items-center py-1 text-sm text-jade-muted transition-colors duration-200 hover:text-jade-off-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jade-soft";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-[72px] overflow-hidden bg-jade-black text-jade-off-white"
    >
      <Image
        src="/assets/hero/hero-shape.svg"
        alt=""
        width={620}
        height={620}
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-48 w-[clamp(340px,42vw,620px)] opacity-[0.07]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="grid grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-[minmax(0,1.35fr)_minmax(180px,0.7fr)_minmax(160px,0.6fr)_minmax(250px,0.9fr)] lg:gap-x-10">
          <div className="col-span-2 max-w-md md:col-span-3 lg:col-span-1">
            <Link
              href="#home"
              aria-label="PRAXIS JADE home"
              className="inline-flex items-center gap-2 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jade-soft"
            >
              <Image
                src="/assets/PRAXISJADE(GREEN) ASSETS/praxis-jade-symbol-crystal.svg"
                alt=""
                width={48}
                height={48}
                className="size-11 object-contain"
              />
              <span className="text-[28px] font-michroma tracking-[-0.02em] leading-none">
                PRAXIS
              </span>
              <span className="text-[28px] font-michroma tracking-[-0.02em] text-jade-soft leading-none ml-1">
                JADE
              </span>
            </Link>

            <p className="mt-3 text-[10px] font-poppins uppercase tracking-[0.4em] text-jade-soft">
              IDEAS INTO IMPACT
            </p>
            <p className="mt-5 max-w-[52ch] text-sm leading-7 text-jade-muted">
              We build custom software around the way your business actually
              works, from operational systems to web and mobile applications.
            </p>
          </div>

          <nav
            aria-labelledby="footer-solutions-heading"
            className="col-span-2 md:col-span-1"
          >
            <h2
              id="footer-solutions-heading"
              className="text-sm font-semibold tracking-tight text-jade-off-white"
            >
              Solutions
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 md:block" role="list">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href="#services" className={linkClassName}>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company-heading">
            <h2
              id="footer-company-heading"
              className="text-sm font-semibold tracking-tight text-jade-off-white"
            >
              Company
            </h2>
            <ul className="mt-3" role="list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClassName}>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section
            aria-labelledby="footer-contact-heading"
            className="min-w-0"
          >
            <h2
              id="footer-contact-heading"
              className="text-sm font-semibold tracking-tight text-jade-off-white"
            >
              Contact
            </h2>
            <address className="mt-3 flex flex-wrap gap-x-4 gap-y-3 text-[13px] not-italic text-jade-muted sm:text-sm">
              <a
                href="mailto:praxijade@gmail.com"
                className={`${linkClassName} gap-2.5 py-0`}
              >
                <Mail className="size-4 shrink-0 text-jade-soft" aria-hidden="true" />
                <span className="break-all">praxijade@gmail.com</span>
              </a>
              <a
                href="tel:+639083124734"
                className={`${linkClassName} gap-2.5 py-0`}
              >
                <Phone className="size-4 shrink-0 text-jade-soft" aria-hidden="true" />
                +63 908 312 4734
              </a>
              <p className="flex basis-full items-start gap-2.5 leading-6">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-jade-soft"
                  aria-hidden="true"
                />
                <span>Libtong, Meycauayan, Bulacan</span>
              </p>
            </address>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-jade-muted/20 pt-5 text-xs text-jade-muted sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PRAXIS JADE. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal information">
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
