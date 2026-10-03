import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import AboutCta from "@/components/sections/about/AboutCta";
import AboutHero from "@/components/sections/about/AboutHero";
import Beliefs from "@/components/sections/about/Beliefs";
import HowWeWork from "@/components/sections/about/HowWeWork";
import JadeMeaning from "@/components/sections/about/JadeMeaning";
import OurStory from "@/components/sections/about/OurStory";

export const metadata: Metadata = {
  title: "About | Praxis Jade",
  description:
    "Meet Praxis Jade, a multidisciplinary software team building tailored business systems and digital products.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-jade-off-white text-jade-black">
      <Header />
      <AboutHero />
      <OurStory />
      <JadeMeaning />
      <Beliefs />
      <HowWeWork />
      <AboutCta />
      <Footer />
    </main>
  );
}
