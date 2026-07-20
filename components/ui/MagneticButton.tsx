"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "glass";
  asLink?: string;
}

export function MagneticButton({ children, className, variant = "glass", asLink, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-medium transition-all duration-300 z-10";
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-white",
    secondary: "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5",
    glass: "bg-glass-base border border-glass-border backdrop-blur-md text-foreground hover:bg-glass-hover hover:border-glass-borderHover shadow-[0_0_15px_-3px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.2)]"
  };

  const content = (
    <motion.span 
      style={{ x, y }} 
      className="relative z-10 flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (asLink) {
    return (
      <motion.a
        href={asLink}
        target={asLink.startsWith("http") ? "_blank" : undefined}
        rel={asLink.startsWith("http") ? "noopener noreferrer" : undefined}
        ref={ref as any}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={cn(baseStyles, variants[variant], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {variant === "primary" && (
          <div className="absolute inset-0 bg-gradient-accent opacity-0 transition-opacity duration-300 hover:opacity-10" />
        )}
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-accent opacity-0 transition-opacity duration-300 hover:opacity-10" />
      )}
      {content}
    </motion.button>
  );
}
