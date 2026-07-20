"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { GlassCard } from "@/components/ui/GlassCard";
import { FaAward } from "react-icons/fa";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tight text-center mb-16">
          Certifications & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <GlassCard glowOnHover className="h-full p-8 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-glass-hover border border-glass-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent-cyan/50 transition-all duration-500">
                  <FaAward className="w-8 h-8 text-accent-cyan group-hover:text-accent-violet transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-space font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{cert.category}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                  {cert.details}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
