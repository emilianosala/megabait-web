import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import AnimationObserver from "@/components/AnimationObserver/AnimationObserver";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://megabait.ai"),
  title: "Megabait — IA aplicada para profesionales",
  description:
    "Automatizá lo operativo. Recuperá tu tiempo. Tomá mejores decisiones.",
  openGraph: {
    title: "Megabait — IA aplicada para profesionales",
    description:
      "Automatizá lo operativo. Recuperá tu tiempo. Tomá mejores decisiones.",
    images: ["/images/logo_uso_general.png"],
  },
  icons: {
    icon: "/favicon_morado.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${pressStart2P.variable}`}
    >
      <body>
        <AnimationObserver />
        {children}
      </body>
    </html>
  );
}
