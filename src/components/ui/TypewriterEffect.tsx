"use client";

import React from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  className = "",
  delay = 0,
  speed = 0.05, // seconds per character
}) => {
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className={`text-4xl md:text-6xl font-bold text-foreground mb-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={characterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TypewriterEffect;