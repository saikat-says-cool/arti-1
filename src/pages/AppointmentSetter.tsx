"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/landing/ParticlesBackground";

const AppointmentSetter = () => {
  const pageTitle = "Artificialyze | AI Appointment Setter";
  const pageDescription = "Learn about Artificialyze's AI Appointment Setter for 24/7 engagement and higher booking conversion for service-based businesses.";
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
              AI Appointment Setter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              24/7 engagement and higher booking conversion.
            </motion.p>

            {/* Placeholder for detailed content - will be replaced with user-provided content */}
            <div className="bg-card p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-left space-y-6">
              <h2 className="text-2xl font-bold text-primary">Coming Soon: Detailed Information</h2>
              <p className="text-muted-foreground">
                This page will soon feature comprehensive details about the AI Appointment Setter, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Its omni-channel presence to never miss a lead.</li>
                <li>How human-like, persuasive AI fills your calendar with qualified meetings.</li>
                <li>Dynamic scheduling that integrates effortlessly with existing systems.</li>
                <li>Seamless live agent handoff to maximize conversions.</li>
                <li>Case studies and testimonials specific to appointment setting.</li>
                <li>A detailed breakdown of its benefits for service-based businesses like marketing agencies, clinics, or consultancies.</li>
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

export default AppointmentSetter;