"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const StickyCTA = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-4 z-50"
    >
      <div className="container mx-auto flex items-center justify-center md:justify-between">
        <p className="hidden md:block font-medium text-center md:text-left">
          Ready to Build Your Agency's Growth Engine?
        </p>
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
          <Button>📅 Book Your Consultation →</Button>
        </a>
      </div>
    </motion.div>
  );
};

export default StickyCTA;