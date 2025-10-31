"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import TypewriterEffect from "@/components/ui/TypewriterEffect"; // Import TypewriterEffect

const AppointmentSetter = () => {
  const pageTitle = "Artificialyze | Your AI Appointment Setter";
  const pageDescription = "Learn about Artificialyze's AI Appointment Setter for 24/7 engagement and higher booking conversion for service-based businesses.";
  const ctaLink = "https://cal.id/forms/b6aa9349-5d4b-413a-87d2-038a2e6fe457";

  const problems = [
    "Your human receptionists or SDRs can only respond during office hours, often missing crucial opportunities.",
    "Standard chatbots lack your brand's voice, feel robotic, and consistently fail to persuade your leads to book appointments.",
    "You're seeing leads drop off due to slow responses, poor qualification, or confusing scheduling options.",
  ];

  const outcomePoints = [
    "We qualify your inbound leads with flexible, client-prescribed rules, ensuring you only get the best.",
    "We persuade your prospects naturally to book appointments via chat, voice, or messaging apps, just like a human.",
    "Your handoff to live agents is seamless, fast, and fully trackable via your branded dashboard.",
    "We support dynamic calendar scheduling with your Google Calendar, Calendly, Cal.com, or any other system you use.",
  ];

  const buildProcess = [
    {
      day: "1",
      phase: "Your Infrastructure Setup",
      actions: "Our team configures your AI agent across your website, social media, messaging apps, and phone/WhatsApp channels.",
      outcome: "Your AI is fully integrated with your omnichannel presence.",
    },
    {
      day: "2",
      phase: "Your Client Onboarding Call",
      actions: "We conduct a brand customization session, set up your qualification rules, integrate your calendar, and create your team member dashboard.",
      outcome: "You own your dashboard, analytics, and a fully customized AI workflow.",
    },
    {
      day: "3",
      phase: "Your Activation & Calibration",
      actions: "We test your flows, live agent handoff, dynamic scheduling, and natural-language response tuning.",
      outcome: "Your AI Appointment Setter™ is live, booking appointments for you 24/7.",
    },
  ];

  const guaranteePoints = [
    "Your AI Appointment Setter™ will convert >85% of your qualified inbound traffic into booked appointments.",
    "If your performance falls below this threshold in the first 30 days, our team and we continue optimizing at no extra cost until your target is achieved.",
  ];

  const pricingComponents = [
    {
      component: "Your Monthly Subscription",
      range: "1,000–3,000 USD",
      purpose: "Your full AI Appointment Setter™, omnichannel integration, live agent dashboard, dynamic scheduling, and ongoing optimization.",
    },
  ];

  const onRampFlow = [
    "Book Your Launch Call → instant confirmation, so you know we're on it.",
    "Your Launch Call → a demo tailored for you, qualification rules setup, and a clear overview of our guarantee.",
    "Your Payment → your monthly subscription via Payoneer or your preferred method.",
    "Your AI Onboarding → a 3-day configuration, including your live agent dashboard setup.",
    "Your Activation → your AI Appointment Setter™ is live and booking for you 24/7.",
  ];

  const whyItConverts = [
    "Streamlined onboarding, seamless calendar booking, and a fully human-like AI salesperson eliminate drop-offs and maximize your appointment conversion.",
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
            <TypewriterEffect text="Your AI Appointment Setter" className="text-4xl md:text-6xl font-bold text-foreground mb-6" />
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              24/7 engagement and higher booking conversion, built for *your* business.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 1 – Your Pain: Missed Opportunities</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">We know service-based businesses like yours struggle to convert inbound leads efficiently:</p>
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
                      Our Essence: You're losing revenue and wasting inbound traffic because current appointment booking solutions are inefficient, impersonal, or limited in availability. Our AI Appointment Setter™ delivers human-like, persuasive, 24/7 lead qualification and booking, ensuring every inbound lead is engaged effectively for *your* business.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 2 – Your Quantifiable Outcome, Guaranteed</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">Our promise to you: Once live, your AI Appointment Setter™ will deliver:</p>
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
                      Proof for You: You can expect &gt;85% of your qualified inbound traffic to book appointments, turning visitors into high-intent leads around the clock for *your* business.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 3 – Your 3-Day Onboarding Process</CardTitle>
                    <p className="mt-2 text-lg text-muted-foreground">Your AI Appointment Setter™ – Our 3-Day Onboarding for You</p>
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
                      Our Ongoing Optimization for You: Continuous AI tuning, live agent analytics, and workflow refinements to maximize your conversions.
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Your Value: A complete, ready-to-run appointment booking system that acts as a world-class salesperson 24/7, all for *your* benefit.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 4 – Hybrid Risk-Reversal Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/50 p-8 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Step 4 – Our Hybrid Risk-Reversal Guarantee to You</CardTitle>
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
                      Your Benefit: You face zero risk — our AI system delivers measurable booking outcomes or our team and we continue optimizing for you, free.
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
                      Your ROI Logic: We replace/reduce your need for human receptionists or SDRs, operate 24/7, and drive higher conversion at a fraction of traditional labor costs, all for *your* bottom line.
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
                    <p className="mt-2 text-lg text-muted-foreground">Your Entry Point: All website and social CTAs direct you to a focused 15–30 min Launch Call via Cal.com.</p>
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
                      "Within 3 days of onboarding, *your business will have* a fully live AI Appointment Setter™ that qualifies leads, persuades prospects, books appointments, and handles live agent handoffs 24/7. If &gt;85% of your qualified inbound traffic does not book appointments, *we continue optimizing for you, free*, until it does."
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

export default AppointmentSetter;