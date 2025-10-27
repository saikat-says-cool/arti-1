"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/landing/ParticlesBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const AppointmentSetter = () => {
  const pageTitle = "Artificialyze | AI Appointment Setter";
  const pageDescription = "Learn about Artificialyze's AI Appointment Setter for 24/7 engagement and higher booking conversion for service-based businesses.";
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  const problems = [
    "Human receptionists or SDRs can only respond during office hours and often miss opportunities.",
    "Standard chatbots lack brand voice, are robotic, and fail to persuade leads to book appointments.",
    "Leads drop off due to slow responses, poor qualification, or unclear scheduling options.",
  ];

  const outcomePoints = [
    "Qualifies inbound leads with flexible, client-prescribed rules.",
    "Persuades prospects naturally to book appointments via chat, voice, or messaging apps.",
    "Handoff to live agents is seamless, fast, and fully trackable via a branded dashboard.",
    "Supports dynamic calendar scheduling with Google Calendar, Calendly, Cal.com, or any other system.",
  ];

  const buildProcess = [
    {
      day: "1",
      phase: "Infrastructure Setup",
      actions: "Configure AI agent across website, social media, messaging apps, and phone/WhatsApp channels",
      outcome: "AI fully integrated with omnichannel presence",
    },
    {
      day: "2",
      phase: "Client Onboarding Call",
      actions: "Brand customization, qualification rule setup, calendar integration, team member dashboard creation",
      outcome: "Client owns dashboard, analytics, and fully customized AI workflow",
    },
    {
      day: "3",
      phase: "Activation & Calibration",
      actions: "Test flows, live agent handoff, dynamic scheduling, natural-language response tuning",
      outcome: "AI Appointment Setter™ live, booking appointments 24/7",
    },
  ];

  const guaranteePoints = [
    "AI Appointment Setter™ will convert >85% of qualified inbound traffic into booked appointments.",
    "If performance falls below this threshold in the first 30 days, we continue optimizing at no extra cost until the target is achieved.",
  ];

  const pricingComponents = [
    {
      component: "Monthly Subscription",
      range: "1,000–3,000 USD",
      purpose: "Full AI Appointment Setter™, omnichannel integration, live agent dashboard, dynamic scheduling, and ongoing optimization",
    },
  ];

  const onRampFlow = [
    "Book Launch Call → instant confirmation",
    "Launch Call → demo, qualification rules setup, guarantee overview",
    "Payment → monthly subscription via Payoneer or client-preferred method",
    "AI Onboarding → 3-day configuration, live agent dashboard setup",
    "Activation → AI Appointment Setter™ live and booking 24/7",
  ];

  const whyItConverts = [
    "Streamlined onboarding, seamless calendar booking, and a fully human-like AI salesperson eliminate drop-offs and maximize appointment conversion.",
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Layout>
        <section className="relative py-12 md:py-20 bg-background overflow-hidden">
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 1 – Bleeding‑Neck Pain</CardTitle> {/* Changed to text-foreground */}
                    <p className="mt-2 text-lg text-muted-foreground">Service-based businesses struggle to convert inbound leads efficiently:</p>
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
                      Essence: Businesses are losing revenue and wasting inbound traffic because current appointment booking solutions are inefficient, impersonal, or limited in availability.
                    </p>
                    <p className="mt-2 text-lg text-muted-foreground">
                      Solution: The AI Appointment Setter™ delivers human-like, persuasive, 24/7 lead qualification and booking, ensuring every inbound lead is engaged effectively.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 2 – Quantifiable Time‑Bound Outcome</CardTitle> {/* Changed to text-foreground */}
                    <p className="mt-2 text-lg text-muted-foreground">Outcome: Once live, the AI Appointment Setter™:</p>
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
                      Proof of outcome: Businesses can expect &gt;85% of qualified inbound traffic to book appointments, turning visitors into high-intent leads around the clock.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 3 – Productized Scope (The IKEA Box)</CardTitle> {/* Changed to text-foreground */}
                    <p className="mt-2 text-lg text-muted-foreground">AI Appointment Setter™ – 3-Day Onboarding</p>
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
                      Ongoing Optimization: Continuous AI tuning, live agent analytics, and workflow refinements to maximize conversions.
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Value: A complete, ready-to-run appointment booking system that acts as a world-class salesperson 24/7.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 4 – Hybrid Risk-Reversal Guarantee</CardTitle> {/* Changed to text-foreground */}
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
                      Benefit: Clients face zero risk — the AI system delivers measurable booking outcomes or optimization continues free.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 5 – Pricing Anchored to Upside</CardTitle> {/* Changed to text-foreground */}
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
                      ROI Logic: Replaces/reduces the need for human receptionists or SDRs, operates 24/7, and drives higher conversion at a fraction of traditional labor costs.
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
                    <CardTitle className="text-3xl font-bold text-foreground">Step 6 – Zero‑Friction On‑Ramp</CardTitle> {/* Changed to text-foreground */}
                    <p className="mt-2 text-lg text-muted-foreground">Entry Point: All website and social CTAs direct prospects to a 15–30 min Launch Call via Cal.com.</p>
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
                      "Within 3 days of onboarding, your business will have a fully live AI Appointment Setter™ that qualifies leads, persuades prospects, books appointments, and handles live agent handoffs 24/7. If &gt;85% of qualified inbound traffic does not book appointments, we continue optimizing for free until it does."
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