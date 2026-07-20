"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { SiGithub } from "react-icons/si";
import { FaPhoneAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeIn} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-base backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-sm font-medium text-foreground/80">Available for new opportunities</span>
        </motion.div>
        
        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-space font-bold tracking-tighter mb-6 leading-[1.1]">
          Hi, I&apos;m <span className="text-gradient">{profile.name}</span>.<br />
          <span className="text-foreground/90">{profile.title}</span>
        </motion.h1>
        
        <motion.p variants={fadeIn} className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto font-inter leading-relaxed">
          {profile.tagline}
        </motion.p>
        
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <MagneticButton variant="primary" asLink="#projects">
            View Projects
          </MagneticButton>
          <MagneticButton variant="glass" asLink="#contact">
            Contact Me
          </MagneticButton>
        </motion.div>
        
        <motion.div variants={fadeIn} className="flex items-center gap-6">
          <SocialLink href={profile.github} icon={<SiGithub className="w-6 h-6" />} label="GitHub" />
          <SocialLink href={profile.linkedin} icon={<FaLinkedin className="w-6 h-6" />} label="LinkedIn" />
          <SocialLink href={`mailto:${profile.email}`} icon={<FaEnvelope className="w-6 h-6" />} label="Email" />
          <SocialLink href={`tel:${profile.phone}`} icon={<FaPhoneAlt className="w-5 h-5" />} label="Phone" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="text-foreground/60 hover:text-accent-cyan transition-colors duration-300 transform hover:scale-110"
    >
      {icon}
    </a>
  );
}
