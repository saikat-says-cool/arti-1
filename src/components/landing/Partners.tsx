"use client";

import { motion } from "framer-motion";

const Partners = () => {
  const logos = [
    { name: "Google AI" },
    { name: "OpenAI" },
    { name: "Meta AI" },
    { name: "Anthropic" },
    { name: "Perplexity AI" },
    { name: "xAI" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">The Power Behind Your Artificialyze Systems</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I want you to feel confident in the foundation of your AI. We build on the world’s most advanced AI ecosystems, ensuring the solutions we create for *you* are robust, cutting-edge, and designed to drive *your* results.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-8 md:gap-x-12">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;