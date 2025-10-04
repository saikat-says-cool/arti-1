"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FinalCTA = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Build Your Growth Engine?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Book your free growth strategy call to see exactly how Artificialyze can generate a steady flow of ideal clients for your agency.
        </p>
        <div className="mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg">📅 Book Your Consultation →</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FinalCTA;