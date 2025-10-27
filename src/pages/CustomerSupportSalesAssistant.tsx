"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/landing/ParticlesBackground";

const CustomerSupportSalesAssistant = () => {
  const pageTitle = "Artificialyze | AI Customer Support & Sales Assistant";
  const pageDescription = "Explore Artificialyze's AI Customer Support & Sales Assistant for higher conversion, sales, and customer satisfaction for e-commerce and SaaS brands.";
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Layout>
        <section className="relative py-12 md:py-20 bg-background overflow-hidden min-h-screen flex items-center justify-center">
          <ParticlesBackground />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              AI Customer Support & Sales Assistant
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Higher conversion, sales, and customer satisfaction.
            </motion.p>

            {/* Placeholder for detailed content - will be replaced with user-provided content */}
            <div className="bg-card p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-left space-y-6">
              <h2 className="text-2xl font-bold text-primary">Coming Soon: Detailed Information</h2>
              <p className="text-muted-foreground">
                This page will soon feature comprehensive details about the AI Customer Support & Sales Assistant, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Its dynamic UI engine for interactive, conversion-optimized visual experiences.</li>
                <li>Native website & CRM integration for personalized upsells and cross-sells.</li>
                <li>Omni-channel support for consistent, instant customer assistance.</li>
                <li>Sales-optimized AI to turn browsers into buyers.</li>
                <li>Real-time knowledge & emotional context for relevant and empathetic responses.</li>
                <li>Seamless live agent handoff for complex issues.</li>
                <li>Case studies and testimonials specific to customer support and sales.</li>
                <li>A detailed breakdown of its benefits for e-commerce brands, SaaS, and other businesses needing high-touch support.</li>
              </ul>
              <p className="text-muted-foreground">
                Please check back soon for the full experience!
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Your 3-Day Launch Call →
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CustomerSupportSalesAssistant;