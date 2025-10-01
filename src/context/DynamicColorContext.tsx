"use client";

import React, { createContext, useContext, useEffect } from 'react';
import { useMotionValue, animate, MotionValue } from 'framer-motion';

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

interface DynamicColorContextType {
  color: MotionValue<string>;
}

const DynamicColorContext = createContext<DynamicColorContextType | null>(null);

export const DynamicColorProvider = ({ children }: { children: React.ReactNode }) => {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <DynamicColorContext.Provider value={{ color }}>
      {children}
    </DynamicColorContext.Provider>
  );
};

export const useDynamicColor = () => {
  const context = useContext(DynamicColorContext);
  if (!context) {
    throw new Error('useDynamicColor must be used within a DynamicColorProvider');
  }
  return context;
};