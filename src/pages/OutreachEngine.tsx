"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/landing/ParticlesBackground";

const OutreachEngine = () => {
  const pageTitle = "Artificialyze | The Outreach Engine™";
  const pageDescription = "Discover how Artificialyze's Outreach Engine provides predictable client acquisition at lower cost and higher efficiency for B2B service-based businesses.";
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
              The Outreach Engine™
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Predictable client acquisition at lower cost and higher efficiency.
            </motion.p>

            {/* Placeholder for detailed content - will be replaced with user-provided content */}
            <div className="bg-card p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-left space-y-6">
              <h2 className="text-2xl font-bold text-primary">Coming Soon: Detailed Information</h2>
              <p className="text-muted-foreground">
                This page will soon feature comprehensive details about The Outreach Engine™, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>How it targets the right prospects with verified data and true personalization.</li>
                <li>The power of personalized multi-step campaigns for higher engagement.</li>
                <li>Automation at scale for consistent deliverability and response rates.</li>
                <li>Our ongoing optimization process for continuous pipeline growth.</li>
                <li>Case studies and testimonials specific to the Outreach Engine.</li>
                <li>A detailed breakdown of its benefits for B2B marketing agencies, consulting, professional services, and SaaS companies.</li>
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

export default OutreachEngine;