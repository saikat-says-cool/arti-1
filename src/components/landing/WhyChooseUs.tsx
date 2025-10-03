"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const reasons = [
    { title: "A Unified Growth Platform", description: "Consolidate your expensive, disjointed sales tools and eliminate the need for a costly internal SDR team." },
    { title: "Fully Managed Service", description: "We operate as an extension of your team, managing the entire outreach process from strategy to execution. You just take the meetings." },
    { title: "Authentic Personalization at Scale", description: "Our AI goes beyond mail-merge fields, crafting context-aware messages that resonate with your ideal clients and start genuine conversations." },
    { title: "Scalable & Predictable Results", description: "Grow your client base and revenue without exponentially increasing your overhead. Our system is built to scale with your ambition." },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 md:py-24 bg-transparent overflow-hidden"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Why This Matters for Agencies</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Breaking free from the feast-or-famine cycle is the key to sustainable agency growth. When your team is buried in client work, prospecting stops, and the pipeline dries up. We build the system that keeps your growth engine running, no matter how busy you get.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div key={index} whileHover={{ x: 5 }} className="flex items-start gap-4">
              <motion.div 
                whileHover={{ scale: 1.2, rotate: -15 }}
                className="flex-shrink-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center"
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