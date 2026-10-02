"use client";

import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { ContactDialog } from "@/components/contact/ContactDialog";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Brand() {
  return (
    <Link
      href="#home"
      className="flex shrink-0 items-center gap-1.5"
      aria-label="PRAXIS JADE home"
    >
      <Image
        src="/assets/PRAXISJADE(GREEN) ASSETS/praxis-jade-symbol-crystal.svg"
        alt=""
        width={48}
        height={48}
        className="size-9 object-contain sm:size-10"
        priority
      />
      <span className="text-xl font-michroma tracking-[-0.02em] text-jade-black leading-none">
        PRAXIS
      </span>
      <span className="text-xl font-michroma tracking-[-0.02em] text-jade-fresh leading-none ml-1">
        JADE
      </span>
    </Link>
  );
}

export function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);

  const openContact = () => {
    if (menuRef.current) menuRef.current.open = false;
    setContactOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 h-[72px] border-b border-jade-muted/30 bg-jade-off-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-jade-primary ${
                  index === 0
                    ? "text-jade-black after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-jade-primary"
                    : "text-jade-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={openContact}
            className="hidden h-11 cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-jade-deep to-jade-primary px-6 text-sm font-semibold text-jade-off-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-fresh lg:flex"
          >
            Let&apos;s Talk
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>

          <details ref={menuRef} className="group relative lg:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-jade-muted/40 text-jade-deep transition-colors hover:bg-jade-soft/10 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation menu</span>
              <Menu className="size-5" aria-hidden="true" />
            </summary>
            <nav
              className="absolute right-0 top-14 w-64 rounded-2xl border border-jade-muted/35 bg-jade-off-white p-3 shadow-xl shadow-jade-black/10"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-jade-charcoal transition-colors hover:bg-jade-soft/10 hover:text-jade-primary"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={openContact}
                className="mt-2 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-jade-deep to-jade-primary px-5 text-sm font-semibold text-jade-off-white"
              >
                Let&apos;s Talk
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </nav>
          </details>
        </div>
      </header>

      <ContactDialog
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
