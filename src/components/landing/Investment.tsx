"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Investment = () => {
  return (
    <motion.section
      id="investment"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Your Strategic Investment in Growth</h2>
        </div>
        <Card className="max-w-4xl mx-auto mt-12 bg-background/50 shadow-lg">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground">
              We believe in tailoring solutions that deliver maximum ROI for *your* unique business. Your investment with Artificialyze is custom-priced to your specific needs, designed to scale with *your* growth, ensuring every dollar you commit works hard for you.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};

export default Investment;