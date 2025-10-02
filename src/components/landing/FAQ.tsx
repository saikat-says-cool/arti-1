"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const FAQ = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const faqs = [
    {
      question: "How much time does this take from me?",
      answer: "Barely any. You focus on closing deals-we handle everything else.",
    },
    {
      question: "Is this compliant?",
      answer: "Absolutely. GDPR, CCPA, and India-approved workflows are baked in.",
    },
    {
      question: "Who do you target?",
      answer: "Mid-market companies (1–500 employees) in B2B SaaS, services, and other outreach-heavy industries.",
    },
    {
      question: "How fast are results?",
      answer: "Expect qualified leads appearing in 2–4 weeks, with your pipeline compounding month after month.",
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 md:py-24 bg-transparent overflow-hidden"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
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

export default FAQ;