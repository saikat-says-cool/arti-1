"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import TypewriterEffect from "@/components/ui/TypewriterEffect"; // Import TypewriterEffect

const OutreachEngine = () => {
  const pageTitle = "Artificialyze | Your Outreach Engine™";
  const pageDescription = "Discover how Artificialyze's Outreach Engine provides predictable client acquisition at lower cost and higher efficiency for B2B service-based businesses.";
  const ctaLink = "https://cal.id/forms/b6aa9349-5d4b-413a-87d2-038a2e6fe457";

  const problems = [
    "Your SDRs are relying on outdated databases, missing crucial career changes or updated contact info.",
    "Manual outreach is slow; you're forced to choose between high personalization (slow) or high automation (cold).",
    "Your tools and processes are fragmented, forcing your team to juggle multiple, inefficient systems.",
  ];

  const outcomePoints = [
    "We generate your leads from fresh, verified data across LinkedIn, Crunchbase, Tracxn, and other sources, ensuring accuracy.",
    "We craft deeply personalized outreach for you, using AI trained to extract relevant prospect insights that truly resonate.",
    "We initiate multi-channel campaigns tailored precisely to your client acquisition needs, maximizing your reach and impact.",
  ];

  const buildProcess = [
    {
      day: "1",
      phase: "Your Infrastructure Setup",
      actions: "Our team builds your Make-based automation; we configure your AI modules for lead generation, enrichment, and personalization.",
      outcome: "You get a fully structured framework ready for your onboarding.",
    },
    {
      day: "2",
      phase: "Your Client Onboarding Call",
      actions: "We conduct a guided session (~2 hrs) where we connect your Make, Instantly, ScrapeNinja, OpenAI, Perplexity, and Google Workspace accounts.",
      outcome: "You own all assets; your AI flows are fully customized to your brand.",
    },
    {
      day: "3",
      phase: "Your Activation & Calibration",
      actions: "We test your campaign flows, verify deliverability, run pilot outreach, and refine your AI prompts.",
      outcome: "Your Outreach Engine™ is live and sending validated, personalized campaigns for you.",
    },
  ];

  const guaranteePoints = [
    "Your Outreach Engine™ goes live within 3 days of onboarding, or your setup fee is refunded.",
    "If you do not receive at least seven qualified positive replies within 30 days, our team and we continue optimizing for you, free, until achieved.",
  ];

  const pricingComponents = [
    {
      component: "Your Setup Fee",
      range: "1,600–3,200 USD",
      purpose: "A one-time 3-day build mirroring agency project fees, delivering your custom AI system.",
    },
    {
      component: "Your Monthly Management & Optimization",
      range: "1,900–2,900 USD",
      purpose: "Ongoing care, AI tuning, and deliverability monitoring — roughly half the cost of a human SDR team but delivering equal or superior pipeline performance for you.",
    },
    {
      component: "Your Optional Performance Bonus",
      range: "Variable per qualified demo / closed client",
      purpose: "This aligns our incentives and fosters a true partnership mentality for your success.",
    },
  ];

  const onRampFlow = [
    "Book Your Launch Call → instant confirmation, so you know we're ready.",
    "Your Launch Call → a fit check, a demo tailored for you, and a clear overview of our guarantee.",
    "Your Post-Call Payment → a personalized Payoneer link for your setup fee.",
    "Your Payment Confirmation → your 3-day build timeline & a simple tool checklist.",
    "Your Day 2 Onboarding → a walkthrough and connections, made easy for you.",
    "Your Activation & Guarantee Start → your Outreach Engine™ is live; your 30-day performance clock begins.",
  ];

  const whyItConverts = [
    "Just two clicks from your initial interest to a live AI campaign working for you.",
    "Confidence built through genuine conversation, not empty proposals.",
    "Zero billing friction, designed to fit seamlessly into your 3-day timeline.",
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
            <TypewriterEffect text="Your Outreach Engine™" className="text-4xl md:text-6xl font-bold text-foreground mb-6" />
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Predictable client acquisition at lower cost and higher efficiency, built just for *you*.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 1 – Your Pain: The Outreach Grind</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">We know you, as an agency owner, are wasting precious time, effort, and payroll dollars trying to run SDR-led outreach campaigns:</p>
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
                      Our Essence: You're leaving leads and revenue on the table because you can't achieve both speed and personalization at scale. Our Outreach Engine™ removes this trade-off, delivering continuous, hands-free client acquisition with fresh, accurate data and AI-driven personalization, all working for *your* growth.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 2 – Your Quantifiable Outcome, Fast</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">Our promise to you: Within 3 days of onboarding, you'll receive a live Outreach Engine™ that:</p>
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
                      Proof for You: Most of our clients see their first qualified replies within 7–14 days, demonstrating speed, precision, and predictability for *your* pipeline.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 3 – Your 3-Day Build Process</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">Your Outreach Engine™ – Our 3-Day Build Process for You</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm font-semibold text-foreground border-b pb-2 mb-4">
                      <div>Day</div>
                      <div>Phase</div>
                      <div>Key Actions</div>
                      <div>Your Tangible Outcome</div>
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
                      Our Ongoing Optimization for You: Weekly data refreshes, AI prompt tuning, and deliverability monitoring to maintain your high conversion rates.
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Your Value: A repeatable, three-phase build that transforms a technical automation into a tangible, high-performing client acquisition system, all for *your* benefit.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 4 – Our Hybrid Risk‑Reversal Guarantee to You</CardTitle>
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
                      Our Conditions: This assumes your completion of onboarding tasks, active sending domains, and a minimum first-month campaign volume of 2,000 emails. We'll ensure you're set up for success.
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Your Benefit: Your downside is zero; our team and we shoulder the performance risk until your results are provable.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 5 – Your Pricing, Anchored to Your Upside</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-semibold text-foreground border-b pb-2 mb-4">
                      <div>Component</div>
                      <div>Range (USD)</div>
                      <div>Purpose / Positioning for You</div>
                    </div>
                    {pricingComponents.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b last:border-b-0 text-muted-foreground">
                        <div className="font-bold text-foreground">{item.component}</div>
                        <div>{item.range}</div>
                        <div>{item.purpose}</div>
                      </div>
                    ))}
                    <p className="mt-6 text-lg font-semibold text-foreground">
                      Your ROI Logic: We replace an $8k USD/month SDR team or unstable ad budget with a smarter, faster, 24/7 system at roughly half the cost, delivering a superior pipeline for *your* agency.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 6 – Your Zero‑Friction On‑Ramp</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">Your Entry Point: All website and email CTAs direct you to a focused 15–30 min Launch Call via Cal.com.</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <h3 className="text-xl font-bold text-foreground mb-3">Your Flow:</h3>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      {onRampFlow.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Why It Converts for You:</h3>
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
                      "Within 3 days of onboarding, *you’ll own* a fully automated Outreach Engine™ that runs *your* agency’s prospecting 24/7 using fresh, verified data and AI-driven personalization. If it isn’t live on time, *you don’t pay* the setup fee. If *you don’t see* at least seven qualified positive replies within 30 days, *we continue optimizing for you, free*, until you do."
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