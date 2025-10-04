"use client";

import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      day: "1",
      title: "Day 1 – Infrastructure Setup",
      description: "We build your automation architecture inside Make—AI modules for data collection, personalization, and outreach ready to run.",
    },
    {
      day: "2",
      title: "Day 2 – Client Onboarding Call",
      description: "Together we connect Make, Instantly, OpenAI, Perplexity, ScrapeNinja, and Google accounts—all under your ownership for full control.",
    },
    {
      day: "3",
      title: "Day 3 – Activation & Calibration",
      description: "We test deliverability and launch your first personalized campaign. Most clients see qualified replies within two weeks.",
    },
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
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">Our proven 3-Day Build Process launches your self-sustaining client-acquisition machine.</p>
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
                className="flex-shrink-0 h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-4xl mb-4"
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
        <p className="text-center mt-12 text-muted-foreground">Ongoing Optimization keeps your engine tuned for maximum response rates.</p>
      </div>
    </motion.section>
  );
};

export default HowItWorks;