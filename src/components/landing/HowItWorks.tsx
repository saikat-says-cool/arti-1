"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      day: "1",
      title: "Day 1 – Foundational AI Architecture",
      description: "Establish a resilient, high-performance infrastructure for autonomous outreach, precision appointment setting, and intelligent support systems, building your proprietary AI layer.",
    },
    {
      day: "2",
      title: "Day 2 – Bespoke AI Integration",
      description: "Seamlessly integrate your existing enterprise tools into a unified, proprietary AI ecosystem, ensuring complete control and data synergy, and customizing your AI to talk like your brand.",
    },
    {
      day: "3",
      title: "Day 3 – Autonomous System Activation",
      description: "Achieve full operational readiness with confidence, anticipating measurable, high-impact results within an accelerated timeframe, with your AI system live and converting.",
    },
  ];

  const deliverables = [
    "Acquire a sophisticated automation scenario that intelligently orchestrates data, advanced AI, and multi-channel communication platforms.",
    "Attain elite email deliverability through a meticulously warmed and rigorously verified mail infrastructure.",
    "Leverage proprietary AI prompts, precisely engineered for your agency's niche, to maximize engagement and conversion efficacy.",
    "Execute hyper-personalized outreach campaigns, powered by advanced data enrichment and predictive AI insights.",
    "Sustain peak operational performance with an intuitive, real-time analytics dashboard for continuous, data-driven optimization.",
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
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">The 3-Day AI Deployment Protocol</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Launch your bespoke AI ecosystems in an unprecedented three days—fully managed, meticulously engineered, and demonstrably impactful. We orchestrate the entire deployment with our enterprise-grade AI engineering layer, forging a cohesive, surgically precise infrastructure for mass-personalized, autonomous outbound and inbound engagement. We don't add software; we replace effort, building your own AI layer that talks like your brand, closes like your best salesperson, and goes live in 3 days.
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
        <p className="text-center mt-12 text-muted-foreground">Continuous Optimization: Weekly algorithmic updates, advanced prompt engineering, and real-time performance monitoring to ensure maximal ROI.</p>
        
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="bg-background/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">🎁 Your Autonomous AI Assets Post-Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">Upon conclusion of Day 3, your enterprise will command a fully operational, custom-engineered AI ecosystem, residing securely within your own accounts:</p>
              <ul className="space-y-3">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center mt-6 font-semibold">Every component of your AI infrastructure is exclusively yours—ensuring absolute ownership, transparency, and strategic control.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;