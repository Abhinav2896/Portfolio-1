"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <GlassCard className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-glass-border group-hover:border-accent-cyan transition-colors duration-300">
                <Image 
                  src="/headshot.png" 
                  alt={profile.name} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-space font-bold tracking-tight">
                About Me
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-accent-cyan to-transparent" />
              <p className="text-lg text-foreground/80 leading-relaxed font-inter">
                {profile.about}
              </p>
              
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-accent-violet font-semibold">Education</h3>
                  <p className="font-medium">{profile.education.degree}</p>
                  <p className="text-sm text-foreground/60">{profile.education.institution}</p>
                  <p className="text-sm text-foreground/60">{profile.education.timeline} • {profile.education.notes}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-accent-cyan font-semibold">Location</h3>
                  <p className="font-medium">{profile.location}</p>
                </div>
              </div>
            </div>
            
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
