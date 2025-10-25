"use client";

import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProblemSolution = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const problems = [
    "Manual outreach, appointment setting, and customer support drain time and resources",
    "SDRs and support staff burn out, turnover is high, and training is costly",
    "Tools stack grows expensive, yet outcomes remain unpredictable",
    "Scaling revenue feels impossible without adding headcount",
  ];
  const problemInsight = "Agencies and service businesses waste hundreds of hours and thousands of dollars juggling tools and manual workflows, leaving growth unpredictable.";

  const solutions = [
    {
      title: "The Outreach Engine™",
      outcome: "Predictable client acquisition at lower cost and higher efficiency",
      description: [
        { title: "Target the Right Prospects", text: "Secure meetings with decision-makers through verified data and true personalization." },
        { title: "Personalized Multi-Step Campaigns", text: "Drive higher engagement with AI-crafted messages that resonate personally." },
        { title: "Automation at Scale", text: "Achieve consistent deliverability and response rates with automated multi-channel campaigns." },
        { title: "Ongoing Optimization", text: "Ensure continuous pipeline growth through constant optimization and fresh strategies." },
      ],
      idealFor: "B2B marketing agencies, consulting, professional services, and SaaS companies.",
    },
    {
      title: "AI Appointment Setter",
      outcome: "24/7 engagement and higher booking conversion",
      description: [
        { title: "Omni-Channel Presence", text: "Never miss a lead with AI engaging prospects across all your communication channels." },
        { title: "Human-Like, Persuasive AI", text: "Fill your calendar with qualified meetings as AI expertly guides prospects to booking." },
        { title: "Dynamic Scheduling", text: "Streamline scheduling effortlessly by integrating with your existing calendar systems." },
        { title: "Seamless Live Agent Handoff", text: "Maximize conversions with smooth transitions between AI and human agents." },
      ],
      idealFor: "Service-based businesses like marketing agencies, clinics, or consultancies, especially with inbound queries.",
    },
    {
      title: "AI Customer Support & Sales Assistant",
      outcome: "Higher conversion, sales, and customer satisfaction",
      description: [
        { title: "Dynamic UI Engine", text: "Boost sales and engagement with interactive, conversion-optimized visual experiences." },
        { title: "Native Website & CRM Integration", text: "Increase average order value and customer loyalty through personalized upsells and cross-sells." },
        { title: "Omni-Channel Support", text: "Provide consistent, instant support wherever your customers are." },
        { title: "Sales-Optimized AI", text: "Turn browsers into buyers by preventing abandonment and guiding them to purchase." },
        { title: "Real-Time Knowledge & Emotional Context", text: "Deliver highly relevant and empathetic responses that adapt to real-time customer needs." },
        { title: "Live Agent Handoff", text: "Ensure customer satisfaction with efficient human intervention when complex issues arise." },
      ],
      idealFor: "E-commerce brands, SaaS, and other businesses needing high-touch, conversion-oriented support.",
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
            <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
            <p className="mt-4 text-muted-foreground">Your business delivers results for clients, but growth still runs in stop-start cycles.</p>
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
                <strong>Insight:</strong> {problemInsight}
              </p>
            </div>
          </motion.div>
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Solution — AI Systems That Work for You</h2>
            <p className="mt-4 text-muted-foreground mb-8">Artificialyze designs and manages done-for-you AI systems that operate across outreach, appointments, and customer support—optimizing for efficiency, conversions, and satisfaction.</p>
            <div className="grid gap-8">
              {solutions.map((solution, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.02 }} className="bg-muted/50 p-6 rounded-lg transition-transform duration-300">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl font-bold text-primary">{solution.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Outcome: {solution.outcome}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="mt-4 space-y-3">
                      {solution.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-3 mt-1 flex-shrink-0">✓</span>
                          <div>
                            <h4 className="font-bold">{item.title}</h4>
                            <p className="text-muted-foreground text-sm">{item.text}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Ideal For:</span> {solution.idealFor}
                    </p>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Your 3-Day Launch Call →</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProblemSolution;