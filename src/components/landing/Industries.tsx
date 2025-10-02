"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const Industries = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const mainIndustries = [
    { title: "B2B SaaS & Software", description: "From enterprise SaaS to mid-market startups, we fuel pipelines with leads sourced via LinkedIn, directories, and tech signals. Engagement budgets: $5,000–$100,000+." },
    { title: "Professional Services & Consulting", description: "IT, strategy, HR, marketing consultants—we target C-suite buyers with multi-channel personalized outreach, unlocking 3–5x billable hour recovery." },
    { title: "Financial Services & Wealth Management", description: "Independent advisors and boutique firms benefit from compliance-safe messaging, generating 5–10x ROI in pipeline growth." },
  ];
  const otherIndustries = [
    { title: "Real Estate & Property Services", description: "Smoothing feast-or-famine cycles with steady deal flow" },
    { title: "Recruitment & Staffing", description: "Multi-channel sourcing that books candidates and clients" },
    { title: "Healthcare & Medtech", description: "Driving elective care and device adoption through appointment setting" },
    { title: "Education & Training", description: "Filling enrollment pipelines with executives and professionals" },
    { title: "Legal Services", description: "Contextual, trust-driven outreach that warms prospects before the first call" },
    { title: "Manufacturing & Industrial", description: "Automated global B2B outreach at scale" },
    { title: "B2B E-Commerce & Wholesalers", description: "AI personalization that lands retail buyers" },
  ];

  return (
    <motion.section 
      id="industries"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 md:py-24 bg-transparent overflow-hidden"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {mainIndustries.map((industry, index) => (
            <motion.div key={index} whileHover={{ y: -8, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center">Other Industries We Empower:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {otherIndustries.map((industry, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} className="p-4 bg-background rounded-lg shadow-sm text-center">
                <p className="font-medium">{industry.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button>Book Your Consultation →</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Industries;