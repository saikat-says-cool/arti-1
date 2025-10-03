"use client";

import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  const steps = [
    {
      title: "Ideal Client Profiling",
      description: "We start with a deep dive into your ideal client profile, mapping out the industries, roles, and company signals that indicate a perfect fit for your agency.",
    },
    {
      title: "Lead Generation & Enrichment",
      description: "Our system sources and verifies thousands of contacts, enriching them with firmographic and technographic data to build a pristine, high-intent lead list.",
    },
    {
      title: "AI Personalization",
      description: "This is where the magic happens. Our AI analyzes each prospect to craft hyper-relevant opening lines and value propositions that feel 1-to-1 and demand a response.",
    },
    {
      title: "Sending & Deliverability",
      description: "We manage a dedicated, fully warmed-up sending infrastructure for your agency, ensuring pristine deliverability and inbox placement for all campaigns.",
    },
    {
      title: "Ongoing Optimization",
      description: "Your pipeline is a living asset. We continuously monitor performance, A/B test messaging, and refresh lead lists to ensure a consistent flow of qualified meetings.",
    },
  ];

  return (
    <motion.section 
      id="how-it-works"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 md:py-24 bg-transparent overflow-hidden"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">Our proven 5-step process is engineered to build your agency a powerful, self-sustaining client acquisition machine.</p>
        </div>
        <div className="mt-16 space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 max-w-3xl mx-auto"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="flex-shrink-0 h-12 w-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl"
              >
                {index + 1}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg">Start Building Your Pipeline → Book a Free Consultation</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;