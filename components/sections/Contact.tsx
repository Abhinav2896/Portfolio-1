"use client";

import { profile } from "@/data/profile";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <GlassCard className="p-12 md:p-16 border-t-accent-cyan/30">
          <h2 className="text-4xl md:text-6xl font-space font-bold tracking-tight mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto">
            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <MagneticButton variant="primary" asLink={`mailto:${profile.email}`} className="w-full sm:w-auto px-8">
              Say Hello
            </MagneticButton>
          </div>

          <div className="pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent-cyan transition-colors p-2">
                <SiGithub className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent-cyan transition-colors p-2">
                <FaLinkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={`mailto:${profile.email}`} className="text-foreground/50 hover:text-accent-cyan transition-colors p-2">
                <FaEnvelope className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            
            <p className="text-sm text-foreground/40 font-mono">
              Designed & Built by {profile.name}
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
