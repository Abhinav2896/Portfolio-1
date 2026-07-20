"use client";

import { motion } from "framer-motion";

export function AuroraCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Deep base gradients */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Liquid Aurora Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen opacity-20 filter blur-[100px] bg-accent-cyan animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen opacity-10 filter blur-[120px] bg-accent-violet animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] rounded-full mix-blend-screen opacity-20 filter blur-[100px] bg-accent-cyan animate-blob" style={{ animationDelay: "4s" }} />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
    </div>
  );
}
