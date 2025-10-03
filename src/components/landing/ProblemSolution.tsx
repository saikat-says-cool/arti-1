"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const problems = [
    "Client churn but no predictable replacement pipeline",
    "SDRs spending hours researching instead of booking meetings",
    "Ballooning SaaS + tool costs with no reliable ROI",
    "Scaling outreach feels impossible without more headcount",
  ];
  const solutions = [
    "Tap into a verified stream of ideal decision-makers, enriched with the data needed for true personalization.",
    "Deploy hyper-personalized messages at scale, referencing context that proves you've done your homework and earns a reply.",
    "Automate multi-step campaigns and follow-ups from a fully warmed-up infrastructure, ensuring your messages land in the primary inbox.",
    "Benefit from continuous, data-driven optimization. We constantly refine lists, A/B test copy, and tweak campaigns for peak performance.",
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 md:py-24 bg-transparent overflow-hidden"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg transition-transform duration-300">
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">The Problem</h2>
            <p className="mt-4 text-muted-foreground">Sound familiar? Your agency is great at getting results for clients, but your own growth is stuck in a cycle of inconsistency.</p>
            <ul className="mt-6 space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg transition-transform duration-300">
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">Artificialyze for Agencies</h2>
            <p className="mt-4 text-muted-foreground">Artificialyze is your dedicated growth partner, delivering a done-for-you outreach infrastructure that runs 24/7. We handle the entire prospecting lifecycle so you can focus on what you do best: closing deals and serving clients.</p>
            <ul className="mt-6 space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Discover Your Growth Potential → Book a Consultation</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProblemSolution;