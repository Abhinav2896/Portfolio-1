"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function GlassCard({ children, className, glowOnHover = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      className={cn(
        "relative rounded-2xl border border-glass-border bg-glass-base backdrop-blur-xl transition-all duration-300",
        glowOnHover && "hover:border-glass-borderHover hover:bg-glass-hover hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-glass pointer-events-none opacity-50" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
