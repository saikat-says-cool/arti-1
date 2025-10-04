"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "How much time will my team spend?",
      answer: "Virtually none—we manage everything post-onboarding.",
    },
    {
      question: "How is this different from other lead-gen offers?",
      answer: "It’s a permanent system, not a campaign; you own the assets.",
    },
    {
      question: "Who do you target?",
      answer: "Decision-makers that match your ideal client profile, verified and enriched by AI.",
    },
    {
      question: "How soon do results appear?",
      answer: "System live in 3 days; first qualified replies within 7–14 days.",
    },
  ];

  return (
    <motion.section 
      id="faq"
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
      </div>
    </motion.section>
  );
};

export default FAQ;