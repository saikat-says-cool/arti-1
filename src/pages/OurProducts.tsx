"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FlaskConical, Lightbulb } from "lucide-react";
import SentivibePromotion from "@/components/landing/SentivibePromotion"; // Reusing the SentiVibe promotion component

const OurProducts = () => {
  const pageTitle = "Artificialyze | Our Products";
  const pageDescription = "Explore Artificialyze's flagship product, SentiVibe, and discover our innovative research products like PeekAnalyst and Demovoice.";
  const sentivibeLink = "https://sentivibe.online";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Layout>
        <section className="relative py-12 md:py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              At Artificialyze, we're constantly innovating to bring you cutting-edge AI solutions. Discover our flagship product and what's brewing in our research labs.
            </motion.p>

            {/* SentiVibe - Flagship Product */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                SentiVibe: Your Flagship Audience Intelligence Platform
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                SentiVibe is our premier product, designed to revolutionize how you understand and engage with your audience. It transforms raw data into actionable insights, empowering you to create content that truly resonates.
              </p>
              <a href={sentivibeLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Experience SentiVibe Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <div className="mt-12">
                <SentivibePromotion /> {/* Reusing the detailed promotion component */}
              </div>
            </motion.div>

            {/* Products in Research */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Products Currently in Research
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                Innovation is at our core. Here's a sneak peek at the groundbreaking AI solutions we're developing to shape the future of business automation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="bg-card/50 p-6 shadow-lg flex flex-col items-center text-center">
                  <CardHeader className="pb-4">
                    <FlaskConical className="h-12 w-12 text-accent mx-auto mb-4" />
                    <CardTitle className="text-2xl font-bold text-foreground">PeekAnalyst</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-base">
                      PeekAnalyst is an AI-powered competitive intelligence platform designed to give you an unfair advantage. It autonomously monitors competitor strategies, market trends, and emerging opportunities, delivering real-time, actionable insights directly to your dashboard. Imagine knowing your rivals' next move before they even make it.
                    </p>
                    <ul className="list-disc list-inside text-left text-sm text-muted-foreground mt-4 space-y-1">
                      <li>Real-time competitor monitoring</li>
                      <li>Predictive market trend analysis</li>
                      <li>Automated opportunity identification</li>
                      <li>Customizable intelligence reports</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 p-6 shadow-lg flex flex-col items-center text-center">
                  <CardHeader className="pb-4">
                    <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                    <CardTitle className="text-2xl font-bold text-foreground">Demovoice</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-base">
                      Demovoice is an advanced AI voice synthesis and emotional intelligence engine. It allows businesses to create hyper-realistic, emotionally nuanced voiceovers for marketing, customer service, and interactive experiences. Beyond just text-to-speech, Demovoice understands context and intent, delivering vocal performances that truly connect with your audience.
                    </p>
                    <ul className="list-disc list-inside text-left text-sm text-muted-foreground mt-4 space-y-1">
                      <li>Emotionally intelligent voice synthesis</li>
                      <li>Context-aware vocal delivery</li>
                      <li>Multi-language and accent support</li>
                      <li>Seamless integration with existing platforms</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default OurProducts;