"use client";

import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const problems = [
    "Client churn but no predictable replacement pipeline",
    "SDRs burning hours researching instead of booking meetings",
    "Tool stacks growing costs with no reliable ROI",
    "Scaling outreach feels impossible without more headcount",
  ];
  const solutions = [
    { emoji: "🔍", title: "Target Exactly the Right Prospects", description: "Tap into a verified stream of decision-makers enriched with every data point needed for true personalization." },
    { emoji: "💌", title: "Send Messages That Actually Get Replies", description: "Context-aware emails referencing real updates, campaigns, and pain points—crafted by AI." },
    { emoji: "⚙️", title: "Automate Outreach at Scale", description: "Multi-step sequences and follow-ups delivered from a fully warmed-up infrastructure to land in the primary inbox." },
    { emoji: "📈", title: "Constant Optimization", description: "Lists refreshed, angles A/B tested, cadences tweaked—your pipeline stays alive and improving." },
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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg transition-transform duration-300">
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">The Problem</h2>
            <p className="mt-4 text-muted-foreground">You win results for clients, but your own growth still runs in stop-start cycles.</p>
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
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">The Solution — Artificialyze for Agencies</h2>
            <p className="mt-4 text-muted-foreground">Artificialyze builds and manages your done-for-you outreach infrastructure that runs 24/7. We handle every stage of prospecting so you can focus on closing and delivery.</p>
            <ul className="mt-6 space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-2xl mr-3 -mt-1 flex-shrink-0">{solution.emoji}</span>
                  <div>
                    <h3 className="font-bold">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
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