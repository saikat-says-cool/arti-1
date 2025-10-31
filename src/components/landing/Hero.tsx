"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const ctaLink = "https://cal.id/forms/b6aa9349-5d4b-413a-87d2-038a2e6fe457";

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
          Tired of the Growth Grind? Let's Build Your Autonomous AI Future.
        </h1>
        <p className="my-6 max-w-3xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          We founded Artificialyze because we saw too many brilliant agencies and enterprises trapped in manual cycles. You deserve predictable growth, not endless effort. Our team and we engineer bespoke AI ecosystems that don't just add another tool; they replace the grind, becoming your 24/7 acquisition, engagement, and conversion engine.
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
            → Let's Talk: Your 3-Day AI Launch
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