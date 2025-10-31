"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "How much time will my team actually spend?",
      answer: "Our commitment to you is simple: your team saves valuable time. Our team and we handle all post-onboarding management, so you can focus on what you do best.",
    },
    {
      question: "How is Artificialyze different from other AI solutions I've seen?",
      answer: "Unlike generic tools, Artificialyze delivers fully managed, outcome-driven AI systems built specifically for *your* outreach, appointments, and support. We ensure efficiency, conversions, and satisfaction, all while *you* retain full ownership and control. We don't just add software; we replace effort.",
    },
    {
      question: "Which Artificialyze solution is right for my business?",
      answer: "That's a great question, and it's personal to *your* needs. Let's discover the perfect AI system for *your* business through a personalized 3-day launch call. Or, if you prefer, you can explore deep-dive demos for each solution first.",
    },
    {
      question: "When will I see measurable results?",
      answer: "You'll see your first measurable outcomes within weeks. We offer specific guarantees for each system: qualified replies within 2 weeks for your Outreach Engine, a 30%+ lift in booked meetings for your Appointment Setter, and so on. Your success is our priority.",
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
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Your Questions, Our Answers.</h2>
          <p className="mt-4 text-lg text-muted-foreground">We know you have questions, and we're here to provide clear, direct answers about how Artificialyze can transform *your* business.</p>
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