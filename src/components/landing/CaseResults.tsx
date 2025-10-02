"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const CaseResults = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const results = [
    { title: "Fashion 6th Avenue", description: "3200% sales increase in 30 days" },
    { title: "Heria Pro", description: "End-to-end AI trainer demo scaled seamlessly" },
    { title: "Pilgrim", description: "AI-driven product visuals boosted client engagement" },
  ];

  return (
    <motion.section 
      id="case-results"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 md:py-24 bg-transparent overflow-hidden"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Proof / Case Results</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {results.map((result, index) => (
            <motion.div key={index} whileHover={{ y: -8, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{result.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button>Get Similar Results → Book Your Consultation</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CaseResults;