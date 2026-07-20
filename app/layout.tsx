import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { AuroraCanvas } from "@/components/ui/AuroraCanvas";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://abhinav2896.github.io/Portfolio-1";
const SITE_DESCRIPTION =
  "Portfolio of Abhinav — Generative AI Software Engineer specializing in LLMs, Machine Learning, and Intelligent Systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abhinav | Generative AI Software Engineer",
    template: "%s | Abhinav",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Abhinav",
    "Generative AI",
    "Software Engineer",
    "LLM",
    "Machine Learning",
    "RAG",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Abhinav", url: "https://github.com/Abhinav2896" }],
  creator: "Abhinav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Abhinav | Generative AI Software Engineer",
    description: SITE_DESCRIPTION,
    siteName: "Abhinav Portfolio",
    images: [
      {
        url: "/headshot.png",
        width: 1200,
        height: 630,
        alt: "Abhinav — Generative AI Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav | Generative AI Software Engineer",
    description: SITE_DESCRIPTION,
    images: ["/headshot.png"],
    creator: "@Abhinav2896",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground relative min-h-screen font-sans antialiased overflow-x-hidden selection:bg-accent-violet/30 selection:text-white">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-glass-hover focus:border focus:border-glass-border"
        >
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <AuroraCanvas />
          <CursorGlow />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </MotionConfig>
      </body>
    </html>
  );
}
