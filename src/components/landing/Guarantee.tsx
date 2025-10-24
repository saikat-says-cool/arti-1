"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Guarantee = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-background/50 p-8 rounded-lg border shadow-lg">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" /> {/* Changed to primary accent */}
          <h2 className="text-3xl md:text-4xl font-bold">Our Guarantee</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <strong>Live in 3 days or full refund. 7 qualified replies in 30 days or we work free until you do.</strong>
          </p>
          <p className="mt-6 text-sm text-muted-foreground/80">
            (Guarantee assumes onboarding completion and ≈ 2,000 emails sent in the first month.)
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Guarantee;