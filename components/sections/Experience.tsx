"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tight text-center mb-16">
          Experience
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-glass-borderHover before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-glass-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-background transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>
              
              <GlassCard glowOnHover className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <h3 className="text-xl font-bold font-space">{exp.role}</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-glass-hover text-accent-violet shrink-0 border border-glass-border">
                    {exp.timeline}
                  </span>
                </div>
                
                <h4 className="text-lg text-foreground/80 mb-4">{exp.company} <span className="text-sm text-foreground/50 ml-2">• {exp.location}</span></h4>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-foreground/70 flex items-start">
                      <span className="text-accent-cyan mr-2 mt-1 shrink-0">▹</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
