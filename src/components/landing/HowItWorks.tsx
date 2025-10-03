"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Target,
  Bot,
  ArrowRight,
  Mail,
  Sparkles,
  CalendarDays,
  FileText,
  Linkedin,
  Briefcase,
  Building,
  CheckCircle,
  MailCheck,
} from "lucide-react";
import {
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  BarChart as RechartsBarChart,
} from "recharts";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const chartData = [
    { name: "Week 1", meetings: 2 },
    { name: "Week 2", meetings: 5 },
    { name: "Week 3", meetings: 8 },
    { name: "Week 4", meetings: 12 },
  ];

  const steps = [
    {
      title: "Ideal Client Profiling",
      description: "Zero in on decision-makers in your agency’s niche (SaaS founders, CMOs, e-com brands, etc.)",
    },
    {
      title: "Lead Generation & Enrichment",
      description: "Build verified, high-quality leads your agency can actually sell to",
    },
    {
      title: "AI Personalization",
      description: "Every email references real context (role, funding, company news) that sparks replies",
    },
    {
      title: "Sending & Deliverability",
      description: "Warm-up, cadence, inbox health, all handled",
    },
    {
      title: "Ongoing Optimization",
      description: "Refresh pipelines + keep meetings flowing consistently",
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
              <Button size="lg">👉 Book Your Free Consultation</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;