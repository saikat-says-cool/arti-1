"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const spotlightTestimonials = [
  {
    name: "Chris Heria",
    brand: "Heria Pro (USA)",
    quote: "Chris Heria’s fitness brand was struggling to scale client acquisition without burning through his team’s hours. We implemented a fully automated AI system that personalized and sent outreach campaigns 24/7. Within weeks, Chris started seeing qualified replies coming in consistently, giving him a steady stream of new clients while freeing up his team to focus on coaching and content.",
    keyPoints: ["Global brand", "High-volume client acquisition", "Results in weeks", "Automation replaces manual labor."],
  },
  {
    name: "Pilgrim",
    brand: "($350M+ DTC brand, USA)",
    quote: "Pilgrim, a rapidly growing DTC brand, needed a reliable pipeline for outreach without adding extra headcount. We built a custom AI-powered system to handle lead generation, enrichment, and outreach at scale. The result was a predictable and scalable flow of qualified leads, helping Pilgrim hit revenue goals faster while cutting down on time-intensive manual work.",
    keyPoints: ["Enterprise-level", "Automation at scale", "Predictable outcomes", "ROI-focused."],
  },
  {
    name: "Cee Bee Design Studio",
    brand: "(India)",
    quote: "Cee Bee Design Studio wanted to automate client acquisition but had limited budget and resources. We implemented an AI-powered appointment setting and outreach engine that ran continuously and delivered qualified leads within days. The system gave them a repeatable and cost-effective way to acquire high-value clients without increasing payroll.",
    keyPoints: ["Indian market", "Cost-sensitive", "Fast ROI", "Automation replaces SDR effort."],
  },
  {
    name: "Fashion 6th Avenue",
    brand: "(Kolkata, E-commerce)",
    quote: "Fashion 6th Avenue struggled with inconsistent outreach and pipeline management. We deployed a fully automated AI system to handle lead enrichment, outreach, and follow-ups. Within weeks, they were receiving consistent responses and qualified leads, freeing their team to focus on sales and product.",
    keyPoints: ["Local client", "E-commerce sector", "Automation reduces manual effort", "Predictable lead flow."],
  },
  {
    name: "Enterprise Consulting",
    brand: "(India)",
    quote: "Enterprise Consulting needed a high-volume, reliable lead acquisition system for B2B clients. We implemented AI-powered outreach campaigns that personalized messaging at scale and delivered qualified replies quickly. The result was a steady flow of high-value leads and more predictable business growth.",
    keyPoints: ["B2B-focused", "High-volume outreach", "AI personalization", "Predictable results."],
  },
  {
    name: "Zouk",
    brand: "(India, E-commerce brand)",
    quote: "Zouk wanted a scalable system to handle lead generation and client outreach for their growing e-commerce business. We built an AI automation engine that handled prospecting, follow-ups, and engagement, delivering measurable results in a short time. Zouk’s team could focus on closing deals while the system worked continuously in the background.",
    keyPoints: ["E-commerce", "Automation for scaling", "Measurable impact", "Frees internal team."],
  },
];

const SpotlightTestimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Spotlight Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how Artificialyze has transformed client acquisition for diverse brands and agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spotlightTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-background/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-primary">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.brand}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground italic">"{testimonial.quote}"</p>
                  <Separator className="my-4 bg-border" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Key Points:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {testimonial.keyPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SpotlightTestimonials;