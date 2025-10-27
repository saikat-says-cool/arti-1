"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  // Static black and white styling for minimalist theme
  const backgroundImage = `radial-gradient(125% 125% at 50% 0%, hsl(var(--background)) 50%, hsl(var(--primary)) 100%)`; // Changed end color to primary accent
  const border = `1px solid hsl(var(--foreground))`;
  const boxShadow = `0px 4px 24px hsl(var(--primary))`; // Changed shadow color to primary accent

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-background px-4 py-20 text-foreground"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-4xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          Pioneering AI Systems for Unrivaled Business Growth.
        </h1>
        <p className="my-6 max-w-3xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Artificialyze engineers bespoke AI ecosystems that autonomously drive client acquisition, optimize engagement, and elevate conversions. We empower elite agencies and enterprises to scale without constraint, transforming operational paradigms into predictable, high-yield revenue streams. We don't just add software; we replace effort, building your own AI layer that talks like your brand, closes like your best salesperson, and goes live in 3 days.
        </p>
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-background/10 px-6 py-3 text-foreground transition-colors hover:bg-background/50"
          >
            → Initiate Your 3-Day AI Launch
          </motion.button>
        </a>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;