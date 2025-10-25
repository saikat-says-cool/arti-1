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
      answer: "Your team saves valuable time as we handle all post-onboarding management.",
    },
    {
      question: "How is this different from other AI solutions?",
      answer: "Unlike others, Artificialyze delivers fully managed, outcome-driven AI systems for outreach, appointments, and support, ensuring efficiency, conversions, and satisfaction, all while you retain full ownership.",
    },
    {
      question: "Which offer is right for my business?",
      answer: "Discover the perfect AI system for your business through a personalized 3-day launch call, or explore deep-dive demos for each solution.",
    },
    {
      question: "When will results be measurable?",
      answer: "First measurable outcomes within weeks, with specific guarantees for each system (e.g., qualified replies within 2 weeks for Outreach Engine, 30%+ lift in booked meetings for Appointment Setter).",
    },
  ];

  return (
    <motion.section 
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-12 md:py-20 bg-transparent overflow-hidden"
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