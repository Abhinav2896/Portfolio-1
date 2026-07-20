import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { AuroraCanvas } from "@/components/ui/AuroraCanvas";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nikhil | Generative AI Software Engineer",
  description: "Portfolio of Nikhil, a Generative AI Software Engineer specializing in LLMs, Machine Learning, and Intelligent Systems.",
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
