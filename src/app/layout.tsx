import type { Metadata } from "next";
import { Caveat, Montserrat, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "PRAXIS JADE | Custom Software Solutions",
  description:
    "PRAXIS JADE designs and develops custom business systems, mobile apps, desktop apps, and web applications.",
  icons: {
    icon: {
      url: "/assets/PRAXISJADE(GREEN) ASSETS/praxis-jade-symbol-crystal.svg",
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} ${poppins.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <Script id="reset-scroll-on-refresh" strategy="beforeInteractive">
          {`(() => {
            const navigation = performance.getEntriesByType("navigation")[0];
            const isReload = navigation?.type === "reload" || performance.navigation?.type === 1;
            if (!isReload) return;
            if ("scrollRestoration" in history) history.scrollRestoration = "manual";
            if (location.hash) history.replaceState(null, "", location.pathname + location.search);
            const reset = () => scrollTo({ top: 0, left: 0, behavior: "instant" });
            const finishReset = () => {
              reset();
              requestAnimationFrame(() => {
                reset();
                setTimeout(() => {
                  reset();
                  history.scrollRestoration = "auto";
                }, 100);
              });
            };
            reset();
            addEventListener("pageshow", finishReset, { once: true });
            addEventListener("load", finishReset, { once: true });
            if (document.readyState === "complete") finishReset();
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
