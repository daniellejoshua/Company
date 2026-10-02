import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-[var(--section-gap)]">
        <Hero />
        <Partners />
        <Services />
        <Process />
        <Projects />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
