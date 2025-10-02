"use client";

import { motion } from "framer-motion";

const Partners = () => {
  const logos = [
    { src: "/logos/google.svg", alt: "Google AI" },
    { src: "/logos/openai.svg", alt: "OpenAI" },
    { src: "/logos/meta.svg", alt: "Meta AI" },
    { src: "/logos/anthropic.svg", alt: "Anthropic" },
    { src: "/logos/perplexity.svg", alt: "Perplexity AI" },
    { src: "/logos/xai.svg", alt: "xAI" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Partnering For You</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Leveraging the world's most advanced AI models to drive your results.
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
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;