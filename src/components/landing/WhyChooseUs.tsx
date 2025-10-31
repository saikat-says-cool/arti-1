"use client";

import { Check, Info } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    { title: "Your Unified AI Growth Ecosystem", description: "I'll help you consolidate disparate tools and roles into a singular, intelligent AI platform, drastically reducing your operational overhead and complexity. We don't add software; we replace effort." },
    { title: "My Fully Managed AI Orchestration", description: "Liberate your high-value team from operational burdens. My team meticulously manages and optimizes your advanced AI systems, ensuring peak performance and brand-aligned conversion 24/7, so you don't have to." },
    { title: "Predictable & Exponential Scalability for You", description: "Achieve consistent, scalable revenue growth and market penetration without the traditional constraints of increasing human capital. We build your own AI layer that closes like your best salesperson." },
    { title: "Hyper-Authentic AI Personalization, Your Way", description: "Forge deeper client relationships through AI interactions that are indistinguishable from human-level empathy and strategic insight, driving superior engagement that feels genuinely personal to your clients." },
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
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Artificialyze? It's About Your Unfair Advantage.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I've seen what it takes to truly scale. My team and I architect and deploy fully autonomous AI ecosystems that transcend conventional client acquisition, engagement, and conversion methodologies. These systems operate 24/7, empowering your strategic teams to focus exclusively on innovation and expansion, ensuring predictable pipelines, unprecedented conversion rates, and enduring client satisfaction—all without the burden of escalating headcount.
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
        <div className="mt-8 flex items-start gap-3 text-foreground/80 dark:text-foreground/70 max-w-4xl mx-auto p-4 bg-muted/50 rounded-lg">
          <Info className="h-5 w-5 mt-1 flex-shrink-0" />
          <p className="text-sm">
            <strong>My Critical Insight for You:</strong> Industry data confirms 71% of B2B decision-makers demand hyper-personalized interactions. My AI-driven automation delivers this at a scale and precision unachievable by human teams, giving *you* the edge.
          </p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="max-w-3xl mx-auto mt-12 p-6 bg-background/50 rounded-lg border shadow-lg"
        >
          <blockquote className="text-center text-lg italic text-foreground">
            “Implementing Artificialyze allowed our agency to compress prospecting cycles by 70%, securing more high-value pitches in a single month than in the entire preceding quarter. It's truly transformative.”
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;