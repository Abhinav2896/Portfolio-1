"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorGlow() {
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorX = useSpring(0, { stiffness: 50, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
      
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX - 200); // 400px width / 2
        cursorY.set(e.clientY - 200); // 400px height / 2
      };
      
      window.addEventListener("mousemove", moveCursor);
      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    }
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen"
      style={{
        opacity: 0.15
      }}
    >
      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full bg-gradient-radial from-accent-cyan via-accent-violet to-transparent blur-3xl"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </motion.div>
  );
}
