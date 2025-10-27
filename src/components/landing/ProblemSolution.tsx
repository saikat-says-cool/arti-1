"use client";

import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProblemSolution = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const problems = [
    "Reliance on manual outreach, appointment setting, and customer support incurs prohibitive costs and resource drain.",
    "High turnover in SDR and support roles leads to perpetual training cycles and inconsistent performance.",
    "Disjointed technology stacks result in operational inefficiencies and unpredictable growth trajectories.",
    "Achieving scalable revenue growth remains elusive without disproportionate increases in headcount.",
  ];
  const problemInsight = "Leading agencies and enterprises are hemorrhaging capital and strategic bandwidth managing disparate tools and antiquated manual workflows, rendering growth inherently unpredictable.";

  const solutionsSummary = [
    {
      title: "The Outreach Engine™",
      outcome: "Predictable client acquisition with unparalleled efficiency and reduced cost.",
      brief: "Leverage AI-driven intelligence to identify, engage, and secure high-value meetings with decision-makers, ensuring hyper-personalized outreach at scale.",
      link: "/outreach-engine",
    },
    {
      title: "AI Appointment Setter",
      outcome: "24/7 autonomous engagement and superior booking conversion rates.",
      brief: "Deploy an AI agent that intelligently qualifies and persuades prospects across all channels, seamlessly filling your calendar with high-intent appointments.",
      link: "/appointment-setter",
    },
    {
      title: "AI Customer Support & Sales Assistant",
      outcome: "Exponentially higher conversion, accelerated sales cycles, and elevated customer satisfaction.",
      brief: "Transform customer interactions with an AI assistant featuring dynamic UI, native CRM integration, and sales-optimized intelligence for instant, empathetic, and revenue-generating support.",
      link: "/customer-support-sales-assistant",
    },
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
          <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-muted/50 p-8 rounded-lg transition-transform duration-300">
            <h2 className="text-3xl font-bold text-foreground">The Strategic Imperative</h2>
            <p className="mt-4 text-muted-foreground">While your enterprise excels in client delivery, sustainable, predictable growth remains an elusive challenge.</p>
            <ul className="mt-6 space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-foreground mr-3 mt-1">✗</span>
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3 text-foreground/80">
              <Info className="h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <strong>Strategic Insight:</strong> {problemInsight}
              </p>
            </div>
          </motion.div>
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Artificialyze Solution — Autonomous AI Ecosystems</h2>
            <p className="mt-4 text-muted-foreground mb-8">Artificialyze architects and deploys fully managed, proprietary AI systems that seamlessly integrate across your outreach, appointment scheduling, and customer support functions—meticulously optimized for peak efficiency, unparalleled conversion rates, and elevated client satisfaction.</p>
            <div className="grid gap-8">
              {solutionsSummary.map((solution, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.02 }} className="bg-muted/50 p-6 rounded-lg transition-transform duration-300">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl font-bold text-foreground">{solution.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Achieved Outcome: {solution.outcome}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-base">{solution.brief}</p>
                    <Link to={solution.link} className="mt-4 inline-flex items-center text-foreground hover:underline hover:text-primary">
                      Explore Solution →
                    </Link>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Initiate Your 3-Day AI Launch →</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProblemSolution;