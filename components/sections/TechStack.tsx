"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/skills";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainer, scaleIn } from "@/lib/motion";

export function TechStack() {
  return (
    <section id="stack" className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tight text-center mb-16">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: catIdx * 0.1 }}
              className="relative"
            >
              {/* Category Backdrop Blob */}
              <div className="absolute inset-0 bg-accent-violet/5 rounded-3xl blur-2xl" />
              
              <GlassCard className="p-6 h-full border-glass-borderHover/30">
                <h3 className="text-xl font-space font-semibold mb-6 text-center text-foreground/90">{category.title}</h3>
                
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-3"
                >
                  {category.skills.map((skill, skillIdx) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skillIdx}
                        variants={scaleIn}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="group relative flex items-center justify-center p-3 rounded-xl border border-glass-border bg-glass-base hover:border-accent-cyan/50 hover:bg-glass-hover transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]"
                      >
                        {Icon ? (
                          <>
                            <Icon className="w-6 h-6 text-foreground/70 group-hover:text-accent-cyan transition-colors" />
                            {/* Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-2 py-1 bg-background border border-glass-border rounded text-xs whitespace-nowrap z-20">
                              {skill.name}
                            </div>
                          </>
                        ) : (
                          <span className="text-sm font-medium text-foreground/80 group-hover:text-accent-violet transition-colors">
                            {skill.name}
                          </span>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
