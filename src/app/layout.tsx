import type { Metadata } from "next";
import { Caveat, Michroma, Plus_Jakarta_Sans, Poppins } from "next/font/google";
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
  weight: ["300", "400", "500"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "PRAXIS JADE | Custom Software Solutions",
  description:
    "PRAXIS JADE designs and develops custom business systems, mobile apps, desktop apps, and web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} ${poppins.variable} ${michroma.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <Script id="reset-scroll-on-refresh" strategy="beforeInteractive">
          {`(() => {
            const navigation = performance.getEntriesByType("navigation")[0];
            const isReload = navigation?.type === "reload" || performance.navigation?.type === 1;
            if (!isReload) return;
            if ("scrollRestoration" in history) history.scrollRestoration = "manual";
            if (location.hash) history.replaceState(null, "", location.pathname + location.search);
            const root = document.documentElement;
            const previousScrollBehavior = root.style.scrollBehavior;
            root.style.scrollBehavior = "auto";
            const reset = () => scrollTo(0, 0);
            reset();
            addEventListener("pageshow", () => {
              reset();
              requestAnimationFrame(() => {
                root.style.scrollBehavior = previousScrollBehavior;
                history.scrollRestoration = "auto";
              });
            }, { once: true });
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
