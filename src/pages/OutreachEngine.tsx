"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const OutreachEngine = () => {
  const pageTitle = "Artificialyze | The Outreach Engine™";
  const pageDescription = "Discover how Artificialyze's Outreach Engine provides predictable client acquisition at lower cost and higher efficiency for B2B service-based businesses.";
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  const problems = [
    "SDRs rely on outdated databases, missing career changes or updated contact info.",
    "Manual outreach is slow; high personalization reduces speed, high automation reduces warmth.",
    "Tools and processes are fragmented, forcing agencies to juggle multiple systems.",
  ];

  const outcomePoints = [
    "Generates leads from fresh, verified data across LinkedIn, Crunchbase, Tracxn, and other sources.",
    "Crafts deeply personalized outreach using AI trained to extract relevant prospect insights.",
    "Initiates multi-channel campaigns tailored to the client’s needs.",
  ];

  const buildProcess = [
    {
      day: "1",
      phase: "Infrastructure Setup",
      actions: "Build Make-based automation; configure AI modules for lead generation, enrichment, and personalization",
      outcome: "Fully structured framework ready for onboarding",
    },
    {
      day: "2",
      phase: "Client Onboarding Call",
      actions: "Guided session (~2 hrs) connecting Make, Instantly, ScrapeNinja, OpenAI, Perplexity, Google Workspace",
      outcome: "Client owns all assets; AI flows customized",
    },
    {
      day: "3",
      phase: "Activation & Calibration",
      actions: "Test campaign flows, verify deliverability, run pilot outreach, refine AI prompts",
      outcome: "Outreach Engine™ live and sending validated, personalized campaigns",
    },
  ];

  const guaranteePoints = [
    "The Outreach Engine™ goes live within 3 days of onboarding, or the setup fee is refunded.",
    "If clients do not receive at least seven qualified positive replies within 30 days, we continue optimizing free until achieved.",
  ];

  const pricingComponents = [
    {
      component: "Setup Fee",
      range: "1,600–3,200 USD",
      purpose: "One-time 3-day build mirroring agency project fees",
    },
    {
      component: "Monthly Management & Optimization",
      range: "1,900–2,900 USD",
      purpose: "Ongoing care, AI tuning, and deliverability monitoring — roughly half the cost of a human SDR team but equal pipeline performance",
    },
    {
      component: "Optional Performance Bonus",
      range: "Variable per qualified demo / closed client",
      purpose: "Aligns incentives and fosters partnership mentality",
    },
  ];

  const onRampFlow = [
    "Book Launch Call → instant confirmation",
    "Launch Call → fit check, demo, guarantee overview",
    "Post-Call Payment → Payoneer link for setup fee",
    "Payment Confirmation → 3-day build timeline & tool checklist",
    "Day 2 Onboarding → walkthrough and connections",
    "Activation & Guarantee Start → Outreach Engine™ live; 30-day performance clock begins",
  ];

  const whyItConverts = [
    "Two clicks from interest to live AI campaign.",
    "Confidence built through conversation.",
    "No billing friction.",
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Layout>
        <section className="relative py-12 md:py-20 bg-background overflow-hidden">
          {/* <ParticlesBackground /> Removed */}
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
                    <p className="mt-2 text-lg text-muted-foreground">Agency owners waste time, effort, and payroll dollars trying to run SDR-led outreach campaigns:</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <ul className="space-y-3 text-muted-foreground">
                      {problems.map((problem, index) => (
                        <li key={index} className="flex items-start">
                          <X className="h-5 w-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-lg font-semibold text-foreground">
                      Essence: Agencies are leaving leads and revenue on the table because they cannot achieve both speed and personalization at scale.
                    </p>
                    <p className="mt-2 text-lg text-muted-foreground">
                      Solution: The Outreach Engine™ removes this trade-off, delivering continuous, hands-free client acquisition with fresh, accurate data and AI-driven personalization.
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
                    <p className="mt-2 text-lg text-muted-foreground">Outcome: Within 3 days of onboarding, clients receive a live Outreach Engine™ that:</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <ul className="space-y-3 text-muted-foreground">
                      {outcomePoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-lg text-muted-foreground">
                      Proof of outcome: Most clients see first qualified replies within 7–14 days, demonstrating speed, precision, and predictability.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 3 – Productized Scope (The IKEA Box) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/50 p-8 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Step 3 – Productized Scope (The IKEA Box)</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">Outreach Engine™ – 3-Day Build Process</p>
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
                      Ongoing Optimization: Weekly data refreshes, AI prompt tuning, and deliverability monitoring to maintain high conversion rates.
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Value: A repeatable, three-phase build that transforms a technical automation into a tangible, high-performing client acquisition system.
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
                    <p className="mt-6 text-lg text-muted-foreground">
                      Conditions: Assumes completion of onboarding tasks, active sending domains, and a minimum first-month campaign volume of 2,000 emails.
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Benefit: The client’s downside is zero; we shoulder the performance risk until results are provable.
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
                      ROI Logic: Replaces an $8k USD/month SDR team or unstable ad budget with a smarter, faster, 24/7 system at roughly half the cost.
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
                    <p className="mt-2 text-lg text-muted-foreground">Entry Point: Website and email CTAs direct prospects to a 15–30 min Launch Call via Cal.com.</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <h3 className="text-xl font-bold text-foreground mb-3">Flow:</h3>
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
                      "Within 3 days of onboarding, you’ll own a fully automated Outreach Engine™ that runs your agency’s prospecting 24/7 using fresh, verified data and AI-driven personalization. If it isn’t live on time, you don’t pay the setup fee. If you don’t see at least seven qualified positive replies within 30 days, we continue optimizing for free until you do."
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

export default OutreachEngine;