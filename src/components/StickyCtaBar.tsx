"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyCtaBar = () => {
  const ctaLink = "https://cal.id/forms/b6aa9349-5d4b-413a-87d2-038a2e6fe457";

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-t p-4 shadow-lg md:hidden" // Only show on mobile for now
    >
      <div className="container mx-auto flex justify-center">
        <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Book Your 3-Day Launch Call <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default StickyCtaBar;