"use client";

import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      day: "1",
      title: "Day 1 – Infrastructure Setup",
      description: "Build AI modules, integrations, and workflows for outreach, appointments, and support.",
    },
    {
      day: "2",
      title: "Day 2 – Client Onboarding Call",
      description: "Connect accounts, calendars, websites, CRMs, and tools. You retain full ownership.",
    },
    {
      day: "3",
      title: "Day 3 – Activation & Calibration",
      description: "Test flows, optimize prompts, and launch. First measurable outcomes within weeks.",
    },
  ];

  const deliverables = [
    "Make automation scenario connecting data, AI prompts, and sending tools",
    "Integrated Instantly mail setup with warmed, verified domains",
    "AI prompt library pre‑tuned for your agency niche",
    "Enrichment & personalization modules using ScrapeNinja + Perplexity",
    "Dashboard and monitoring sheet for ongoing optimization",
  ];

  return (
    <motion.section 
      id="how-it-works"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="relative py-12 md:py-20 bg-transparent overflow-hidden"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">The 3-Day Build Process</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Launch your AI systems in just three days—fully managed and measurable. We orchestrate the entire system with our enterprise-level AI engineering layer, creating a cohesive, surgically-engineered infrastructure for mass-personalized outbound automation.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="flex-shrink-0 h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-4xl mb-4" // Changed to primary accent
              >
                {step.day}
              </motion.div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 text-lg text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-12 text-muted-foreground">Ongoing Optimization: Weekly updates, prompt tuning, and monitoring to maximize performance.</p>
        
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="bg-background/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">🎁 What You’ll Own After 3 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">By the end of Day 3, your agency controls a fully configured Outreach Engine running inside your own accounts:</p>
              <ul className="space-y-3">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /> {/* Changed to primary accent */}
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center mt-6 font-semibold">Everything lives in your workspace—you retain full ownership and visibility.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;