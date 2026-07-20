"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { profile } from "@/data/profile";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 md:px-0 transition-all duration-300`}
    >
      <div 
        className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 w-full max-w-4xl mx-auto
          ${scrolled 
            ? "bg-background/40 backdrop-blur-xl border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
            : "bg-transparent border-transparent"
          }`}
      >
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-glass-border group-hover:border-accent-cyan transition-colors">
            {/* Fallback avatar if headshot doesn't load immediately */}
            <div className="absolute inset-0 bg-gradient-accent opacity-20" />
            <Image src="/headshot.png" alt={profile.name} fill className="object-cover" />
          </div>
          <span className="font-space font-bold text-lg tracking-tight">{profile.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm text-foreground/70 hover:text-foreground hover:text-shadow-sm transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          href="#contact"
          className="hidden md:block text-sm font-medium px-4 py-2 rounded-full border border-glass-border hover:bg-glass-hover hover:border-glass-borderHover transition-all"
        >
          Contact Me
        </Link>
        
        {/* Mobile menu button could go here */}
      </div>
    </motion.nav>
  );
}
