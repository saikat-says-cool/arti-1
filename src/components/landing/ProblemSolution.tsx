"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProblemSolution = () => {
  const ctaLink = "https://cal.id/forms/b6aa9349-5d4b-413a-87d2-038a2e6fe457";
  const problems = [
    "You're burning through precious time and resources on manual outreach, appointment setting, and customer support.",
    "High turnover in SDR and support roles means constant training, inconsistent results, and a drain on your energy.",
    "Your tech stack feels fragmented, leading to inefficiencies and unpredictable growth that keeps you up at night.",
    "Scaling your revenue feels like an uphill battle, always requiring more headcount, more stress, and more compromise.",
  ];
  const problemInsight = "I know the frustration. You're a leader, but you're constantly managing disparate tools and antiquated manual workflows, making predictable growth feel like a distant dream.";

  const solutionsSummary = [
    {
      title: "The Outreach Engine™",
      outcome: "Imagine predictable client acquisition with unparalleled efficiency and drastically reduced costs.",
      brief: "We'll build your AI-driven intelligence to identify, engage, and secure high-value meetings with decision-makers, ensuring hyper-personalized outreach at scale, so you can focus on closing.",
      link: "/outreach-engine",
    },
    {
      title: "AI Appointment Setter",
      outcome: "Experience 24/7 autonomous engagement and superior booking conversion rates, effortlessly.",
      brief: "We'll deploy an AI agent that intelligently qualifies and persuades prospects across all channels, seamlessly filling your calendar with high-intent appointments, so you never miss an opportunity.",
      link: "/appointment-setter",
    },
    {
      title: "AI Customer Support & Sales Assistant",
      outcome: "Achieve exponentially higher conversion, accelerated sales cycles, and elevated customer satisfaction, automatically.",
      brief: "We'll transform your customer interactions with an AI assistant featuring dynamic UI, native CRM integration, and sales-optimized intelligence for instant, empathetic, and revenue-generating support, freeing your team.",
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
      <div className="container mx-auto px-4 md:px-6">
        {/* Changed grid layout to always be single column */}
        <div className="grid grid-cols-1 gap-12 items-start"> 
          <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-muted/50 p-8 rounded-lg transition-transform duration-300">
            <h2 className="text-3xl font-bold text-foreground">Your Strategic Imperative: Why Growth Feels Hard</h2>
            <p className="mt-4 text-muted-foreground">You're brilliant at client delivery, but I know that sustainable, predictable growth often feels like an elusive challenge. Let's be honest about what's holding you back:</p>
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
                <strong>My Insight:</strong> {problemInsight}
              </p>
            </div>
          </motion.div>
          {/* Added margin-top for spacing between stacked sections */}
          <div className="mt-12 md:mt-0"> 
            <h2 className="text-3xl font-bold text-foreground mb-6">My Solution for You — Autonomous AI Ecosystems</h2>
            <p className="mt-4 text-muted-foreground mb-8">
              At Artificialyze, I don't just offer tools. My team and I architect and deploy fully managed, proprietary AI systems tailored *for you*. We replace effort, not add software, building your own AI layer that talks like your brand, closes like your best salesperson, and goes live in just 3 days.
            </p>
            <div className="grid gap-8">
              {solutionsSummary.map((solution, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.02 }} className="bg-muted/50 p-6 rounded-lg transition-transform duration-300">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl font-bold text-foreground">{solution.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Your Outcome: {solution.outcome}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-base">{solution.brief}</p>
                    <Link to={solution.link} className="mt-4 inline-flex items-center text-foreground hover:underline hover:text-primary">
                      Discover Your Solution →
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
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Let's Build Your AI Future →</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProblemSolution;