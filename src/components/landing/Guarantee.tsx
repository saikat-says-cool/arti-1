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
          <h2 className="text-3xl md:text-4xl font-bold">Our Unified Guarantee to You</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <strong>We stand by our promise: 3-day launch + measurable results, or our team and we continue working for you, free.</strong>
          </p>
          <ul className="mt-6 text-left space-y-2 max-w-md mx-auto text-muted-foreground">
            <li><strong className="text-foreground">Your Outreach Engine:</strong> Expect your first qualified replies within 2 weeks.</li>
            <li><strong className="text-foreground">Your Appointment Setter:</strong> Anticipate a 30%+ lift in your booked meetings.</li>
            <li><strong className="text-foreground">Your Customer Support & Sales Assistant:</strong> See a measurable increase in your conversion or retention.</li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground/80">
            (Our guarantee assumes your onboarding completion and required traffic/volume. We'll discuss this transparently.)
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Guarantee;