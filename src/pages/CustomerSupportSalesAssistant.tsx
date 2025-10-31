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
  const pageTitle = "Artificialyze | Your AI Customer Support & Sales Assistant";
  const pageDescription = "Explore Artificialyze's AI Customer Support & Sales Assistant for higher conversion, sales, and customer satisfaction for e-commerce and SaaS brands.";
  const ctaLink = "https://cal.id/forms/b6aa9349-5d4b-413a-87d2-038a2e6fe457";

  const measurableResults = [
    "You'll see increased conversion rates by 30%+",
    "We'll engage 80%+ of your inbound visitors",
    "You'll reduce your support payroll by replacing 2–3 human agents",
  ];

  const buildProcess = [
    {
      day: "1",
      phase: "Your Infrastructure Setup",
      actions: "Our team builds your dynamic UI engine, integrates omnichannel (website, WhatsApp, social messaging), and configures your CRM & e-commerce connections.",
      outcome: "Your system is ready for onboarding; fully native integration.",
    },
    {
      day: "2",
      phase: "Your Client Onboarding Call",
      actions: "We conduct a guided session (~2h) where you add team members to your dashboard, review your AI persona, set qualification rules, and define handoff preferences.",
      outcome: "You get a client-owned dashboard and team access; your AI is tailored to your brand voice and sales strategy.",
    },
    {
      day: "3",
      phase: "Your Activation & Calibration",
      actions: "We test all your channels, review dynamic carousels, enable cross-sell/upsell flows, verify live agent handoff, and run pilot interactions.",
      outcome: "Your AI Customer Support & Sales Assistant™ is live, fully optimized, and converting your visitors.",
    },
  ];

  const guaranteePoints = [
    "Your AI system is live within 3 days of onboarding, or your setup fee is refunded.",
    "You'll achieve at least 30% measurable lift in conversions/engagement within 30 days, or our team and we continue optimizing for you, free, until results are achieved.",
  ];

  const pricingComponents = [
    {
      component: "Your Monthly Subscription",
      range: "$1,000 – $5,000",
      purpose: "Your fully managed, 24/7 AI Customer Support & Sales Assistant™; replaces 2–3 support staff and increases your conversions.",
    },
    {
      component: "Your Optional Performance Bonus",
      range: "Variable per additional conversion",
      purpose: "This aligns our incentives and fosters a true partnership mentality for your success.",
    },
  ];

  const onRampFlow = [
    "Book Your Launch Call → instant confirmation, so you know we're ready.",
    "Your Launch Call → a fit check, an AI demo tailored for you, and a clear guarantee overview.",
    "Your Post-Call Payment → a personalized Payoneer link for your subscription.",
    "Your Payment Confirmation & Welcome Email → your 3-day build timeline, team setup guide, and Day 2 onboarding slot link.",
    "Your Day 2 Onboarding Call → a dashboard walkthrough and AI customization, made easy for you.",
    "Your Activation & Guarantee Start → your system is live, and your 30-day performance clock begins.",
  ];

  const whyItConverts = [
    "Just two clicks from your interest to your launch call.",
    "Confidence built through genuine conversation, not empty proposals.",
    "Seamless billing via Payoneer, designed to fit directly into your 3-day timeline.",
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
            <TypewriterEffect text="Your AI Customer Support & Sales Assistant" className="text-4xl md:text-6xl font-bold text-foreground mb-6" />
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Higher conversion, sales, and customer satisfaction, built for *your* e-commerce or SaaS brand.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 1 – Your Pain: Burning Payroll, Missing Revenue</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">We know e‑commerce brands like yours are burning payroll and missing revenue. Your 24/7 customer support teams are expensive, slow, and inconsistent. Standard chatbots answer FAQs but fail to convert your visitors into paying customers.</p>
                    <p className="mt-2 text-lg text-muted-foreground">Your support system is either transactional or robotic, leaving sales opportunities on the table. SaaS brands face similar challenges: your inbound queries go unanswered, your leads slip away, and your conversion drops.</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <p className="mt-6 text-lg font-semibold text-foreground">
                      Our Essence: Your brand loses money every hour a visitor goes unengaged. Our AI Customer Support & Sales Assistant™ removes the trade-off between human-like support and sales conversions — working 24/7, perfectly on-brand, and always optimized for *your* engagement and revenue. We don’t sell chatbots. We build AI systems that acquire, qualify, and convert — 24/7. We replace effort, not add software.
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
                    <p className="mt-2 text-lg text-muted-foreground">Our promise to you: Within 3 days of onboarding, your AI-powered assistant is live — engaging your visitors, answering your queries, and converting your prospects automatically.</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <p className="text-lg text-muted-foreground mb-3">Most of our clients see measurable results within 2–4 weeks:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      {measurableResults.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-lg font-semibold text-foreground">
                      Our Promise to You: Speed, human-like interactions, and measurable revenue impact — all automated for *your* business.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 3 – Your 3-Day Build Process</CardTitle>
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
                      Our Ongoing Optimization for You: Weekly analytics refresh, prompt tuning, dynamic UI adjustments, and conversion tracking to ensure *your* continuous success.
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Your Value: A repeatable, 3-step process transforms a complex technical system into a tangible, revenue-generating product, all for *your* benefit.
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
                    <p className="mt-6 text-lg font-semibold text-foreground">
                      Our Meaning for You: Your downside is zero; our team and we assume full responsibility for *your* measurable ROI.
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
                      Your ROI Logic: We replace your full human support team + missed sales opportunities with a single automated system that works 24/7, fully on-brand, and boosts your conversions by 30%+.
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
                    <p className="mt-2 text-lg text-muted-foreground">Your Entry Point: All website and social media CTAs direct you to a focused 15–30 min Launch Call via Cal.com.</p>
                  </CardHeader>
                  <CardContent className="text-left">
                    <h3 className="text-xl font-bold text-foreground mb-3">Your Flow Overview:</h3>
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
                      "Within 3 days of onboarding, *you’ll own* a fully automated AI Customer Support & Sales Assistant™ that engages your visitors, qualifies your leads, and converts your traffic into revenue 24 / 7. If it isn’t live on time, *you don’t pay* the setup fee. If it doesn’t achieve at least 30% measurable lift in conversions within 30 days, *we continue optimizing for you, free*, until it does."
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