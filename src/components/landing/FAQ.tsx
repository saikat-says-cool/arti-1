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
      question: "How much time will my team need to spend on this?",
      answer: "Minimal time is required from you. After a brief onboarding and strategy session, we handle everything. Your only job is to show up to the qualified meetings we book for you.",
    },
    {
      question: "Is this different from other “lead gen” offers?",
      answer: "Vastly different. We're not a lead list broker. We build and manage a complete, long-term growth asset for your agency, focusing on sustainable results, brand safety, and genuine personalization.",
    },
    {
      question: "Who exactly do you target for us?",
      answer: "We collaborate with you to define a precise Ideal Client Profile. This typically includes Founders, C-suite executives, and VPs at companies that are a perfect match for your agency's services. Every contact is verified.",
    },
    {
      question: "How soon do results come in?",
      answer: "While every campaign is unique, most of our agency partners begin seeing qualified replies and booked meetings within the first 2-4 weeks. The system is designed to build momentum and compound results over time.",
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