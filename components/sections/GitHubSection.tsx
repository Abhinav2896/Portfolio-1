"use client";

import { motion } from "framer-motion";
import { githubStats } from "@/data/github";
import { GlassCard } from "@/components/ui/GlassCard";
import { SiGithub } from "react-icons/si";

export function GitHubSection() {
  const totalBytes = githubStats.languages.reduce((acc, curr) => acc + curr.bytes, 0);

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-accent-cyan font-space">
                <SiGithub className="w-6 h-6" />
                <h3 className="text-2xl font-bold tracking-tight">Open Source</h3>
              </div>
              <p className="text-foreground/80 font-inter">
                Active on GitHub since 2023 with a focus on original work.
              </p>
              <div className="inline-block mt-4 px-4 py-2 rounded-full border border-glass-border bg-glass-base text-lg font-space font-medium shadow-sm">
                {githubStats.totalRepos} Repositories
              </div>
            </div>

            <div className="flex-1 w-full max-w-sm">
              <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-4 text-center md:text-left font-semibold">Language Breakdown</h4>
              <div className="h-4 w-full rounded-full overflow-hidden flex mb-6 shadow-inner bg-background/50">
                {githubStats.languages.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(lang.bytes / totalBytes) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                    className="h-full hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ backgroundColor: lang.color }}
                    title={`${lang.name}: ${Math.round((lang.bytes / totalBytes) * 100)}%`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
                {githubStats.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                    {lang.name}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
}
