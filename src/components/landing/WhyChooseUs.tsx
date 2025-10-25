"use client";

import { Check, Info } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    { title: "Unified Growth Platform", description: "Replace multiple tools and SDRs with one cohesive AI system." },
    { title: "Fully Managed Service", description: "We operate as an extension of your team." },
    { title: "Scalable & Predictable Results", description: "Grow revenue without expanding payroll." },
    { title: "Authentic Personalization", description: "AI interactions feel human, persuasive, and on-brand." },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-12 md:py-20 bg-transparent overflow-hidden"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Why Artificialyze Matters</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We build fully managed AI systems that generate leads, book appointments, and boost sales—all running 24/7 so your team can focus on strategy, delivery, and scaling. Predictable pipelines, higher conversions, and satisfied customers—without increasing headcount.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div key={index} whileHover={{ x: 5 }} className="flex items-start gap-4">
              <motion.div 
                whileHover={{ scale: 1.2, rotate: -15 }}
                className="flex-shrink-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center" // Changed to primary accent
              >
                <Check className="h-5 w-5" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="mt-1 text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex items-start gap-3 text-foreground/80 dark:text-foreground/70 max-w-4xl mx-auto p-4 bg-muted/50 rounded-lg">
          <Info className="h-5 w-5 mt-1 flex-shrink-0" />
          <p className="text-sm">
            <strong>Insight:</strong> 71% of B2B buyers expect personalized interactions. AI-driven automation delivers at scale humans can’t match.
          </p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="max-w-3xl mx-auto mt-12 p-6 bg-background/50 rounded-lg border shadow-lg"
        >
          <blockquote className="text-center text-lg italic text-foreground">
            “With Artificialyze, our agency cut prospecting time by 70% and booked more pitches in 30 days than in the previous quarter.”
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;