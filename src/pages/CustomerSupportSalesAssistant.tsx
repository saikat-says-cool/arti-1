"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import TypewriterEffect from "@/components/ui/TypewriterEffect"; // Import TypewriterEffect

const CustomerSupportSalesAssistant = () => {
  const pageTitle = "Artificialyze | AI Customer Support & Sales Assistant";
  const pageDescription = "Explore Artificialyze's AI Customer Support & Sales Assistant for higher conversion, sales, and customer satisfaction for e-commerce and SaaS brands.";
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  const measurableResults = [
    "Increased conversion rates by 30%+",
    "Engaged 80%+ of inbound visitors",
    "Reduced support payroll by replacing 2–3 human agents",
  ];

  const buildProcess = [
    {
      day: "1",
      phase: "Infrastructure Setup",
      actions: "Build dynamic UI engine, integrate omnichannel (website, WhatsApp, social messaging), configure CRM & e-commerce connections.",
      outcome: "System ready for onboarding; fully native integration.",
    },
    {
      day: "2",
      phase: "Client Onboarding Call",
      actions: "Guided session (~2h). Client adds team members to dashboard, reviews AI persona, sets qualification rules, defines handoff preferences.",
      outcome: "Client-owned dashboard and team access; AI tailored to brand voice and sales strategy.",
    },
    {
      day: "3",
      phase: "Activation & Calibration",
      actions: "Test all channels, review dynamic carousels, enable cross-sell/upsell flows, verify live agent handoff, run pilot interactions.",
      outcome: "AI Customer Support & Sales Assistant™ live, fully optimized, and converting visitors.",
    },
  ];

  const guaranteePoints = [
    "AI system live within 3 days of onboarding, or setup fee refunded.",
    "Achieve at least 30% measurable lift in conversions/engagement within 30 days, or we continue optimizing for free until results are achieved.",
  ];

  const pricingComponents = [
    {
      component: "Monthly Subscription",
      range: "$1,000 – $5,000",
      purpose: "Fully managed, 24/7 AI Customer Support & Sales Assistant™; replaces 2–3 support staff and increases conversions.",
    },
    {
      component: "Optional Performance Bonus",
      range: "Variable per additional conversion",
      purpose: "Encourages shared upside; aligns AI success with client revenue.",
    },
  ];

  const onRampFlow = [
    "Book Launch Call → instant confirmation",
    "Launch Call → fit check, AI demo, guarantee overview",
    "Post-Call Payment → personalized Payoneer link for subscription",
    "Payment Confirmation & Welcome Email → 3-day build timeline, team setup guide, Day 2 onboarding slot link",
    "Day 2 Onboarding Call → dashboard walkthrough, AI customization",
    "Activation & Guarantee Start → system live, 30-day performance clock begins",
  ];

  const whyItConverts = [
    "Two clicks from interest to launch call",
    "Builds confidence through conversation, not proposals",
    "Seamless billing via Payoneer, fits directly into the 3-day timeline",
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Layout>
        <section className="relative py-12 md:py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <TypewriterEffect text="AI Customer Support & Sales Assistant" className="text-4xl md:text-6xl font-bold text-foreground mb-6" /> {/* Integrated TypewriterEffect */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Higher conversion, sales, and customer satisfaction.
            </motion.p>

            <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
              {/* Step 1 – Bleeding‑Neck Pain */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/50 p-8 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Step 1 – Bleeding‑Neck Pain</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">E‑commerce brands are burning payroll and missing revenue. 24/7 customer support teams are expensive, slow, and inconsistent. Standard chatbots answer FAQs but fail to convert visitors into paying customers.</p>
                    <p className="mt-2 text-lg text-muted-foreground">Your support system is either transactional or robotic, leaving sales opportunities on the table. SaaS brands face similar challenges: inbound queries go unanswered, leads slip away, and conversion drops.</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <p className="mt-6 text-lg font-semibold text-foreground">
                      Essence: Your brand loses money every hour a visitor goes unengaged. The AI Customer Support & Sales Assistant™ removes the trade-off between human-like support and sales conversions — working 24/7, perfectly on-brand, and always optimized for engagement and revenue.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 2 – Quantifiable Time‑Bound Outcome */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/50 p-8 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Step 2 – Quantifiable Time‑Bound Outcome</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">Within 3 days of onboarding, your AI-powered assistant is live — engaging visitors, answering queries, and converting prospects automatically.</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <p className="text-lg text-muted-foreground mb-3">Most clients see measurable results within 2–4 weeks:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      {measurableResults.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-lg font-semibold text-foreground">
                      Promise: Speed, human-like interactions, and measurable revenue impact — all automated.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 3 – Productized Scope (The 3-Day Build) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/50 p-8 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Step 3 – Productized Scope (The 3-Day Build)</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm font-semibold text-foreground border-b pb-2 mb-4">
                      <div>Day</div>
                      <div>Phase</div>
                      <div>Key Actions</div>
                      <div>Tangible Outcome</div>
                    </div>
                    {buildProcess.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 border-b last:border-b-0 text-muted-foreground">
                        <div className="font-bold text-foreground">{item.day}</div>
                        <div>{item.phase}</div>
                        <div>{item.actions}</div>
                        <div>{item.outcome}</div>
                      </div>
                    ))}
                    <p className="mt-6 text-lg text-muted-foreground">
                      Ongoing Optimization: Weekly analytics refresh, prompt tuning, dynamic UI adjustments, conversion tracking.
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Value: A repeatable, 3-step process transforms a complex technical system into a tangible, revenue-generating product.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 4 – Hybrid Risk‑Reversal Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/50 p-8 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Step 4 – Hybrid Risk‑Reversal Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left">
                    <ul className="space-y-3 text-muted-foreground">
                      {guaranteePoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-lg font-semibold text-foreground">
                      Meaning: The client’s downside is zero; you assume full responsibility for measurable ROI.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 5 – Pricing Anchored to Upside */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/50 p-8 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Step 5 – Pricing Anchored to Upside</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-semibold text-foreground border-b pb-2 mb-4">
                      <div>Component</div>
                      <div>Range (USD)</div>
                      <div>Purpose / Positioning</div>
                    </div>
                    {pricingComponents.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b last:border-b-0 text-muted-foreground">
                        <div className="font-bold text-foreground">{item.component}</div>
                        <div>{item.range}</div>
                        <div>{item.purpose}</div>
                      </div>
                    ))}
                    <p className="mt-6 text-lg font-semibold text-foreground">
                      ROI Logic: Replace a full human support team + missed sales opportunities with a single automated system that works 24/7, fully on-brand, and boosts conversions by 30%+.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 6 – Zero‑Friction On‑Ramp */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/50 p-8 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Step 6 – Zero‑Friction On‑Ramp</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">Entry Point: All website and social media CTAs direct prospects to a Cal.com Launch Call (15–30 minutes).</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <h3 className="text-xl font-bold text-foreground mb-3">Flow Overview:</h3>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      {onRampFlow.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Why It Converts:</h3>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      {whyItConverts.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Complete Promise */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Card className="bg-card/50 p-8 shadow-lg">
                  <CardContent>
                    <p className="text-xl md:text-2xl font-bold text-foreground">
                      “Within 3 days of onboarding, you’ll own a fully automated AI Customer Support & Sales Assistant™ that engages visitors, qualifies leads, and converts traffic into revenue 24 / 7. If it isn’t live on time, you don’t pay the setup fee. If it doesn’t achieve at least 30% measurable lift in conversions within 30 days, we continue optimizing for free until it does.”
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
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