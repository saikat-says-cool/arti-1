"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Bot,
  MailCheck,
  TrendingUp,
  Share2,
  UserCog,
  UserCheck,
  Search,
  Table,
  ArrowRight,
  Mail,
  Sparkles,
  CalendarDays,
  LineChart,
  FileText,
  MailPlus,
} from "lucide-react";

const HowItWorks = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  const steps = [
    {
      title: "Ideal Customer Profiling",
      description: "Zero in on the right decision-makers.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="flex items-center gap-4">
            <Target className="h-12 w-12 text-primary flex-shrink-0" />
            <Card className="p-4">
              <h4 className="font-bold text-sm mb-2">Persona: VP of Marketing</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li className="flex items-center gap-2"><UserCog className="h-4 w-4" /> Industry: B2B SaaS</li>
                <li className="flex items-center gap-2"><Users className="h-4 w-4" /> Company Size: 50-200</li>
                <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4" /> Goal: Increase MQLs</li>
              </ul>
            </Card>
          </div>
        </Card>
      ),
    },
    {
      title: "Lead Generation & Enrichment",
      description: "Verified roles, emails, and firmographic data.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="flex items-center gap-3 text-center">
            <div className="flex flex-col items-center gap-2">
              <Table className="h-10 w-10 text-primary" />
              <p className="text-xs font-semibold">Raw Lead List</p>
            </div>
            <ArrowRight className="h-8 w-8 text-muted-foreground" />
            <div className="flex flex-col items-center gap-2">
              <MailPlus className="h-10 w-10 text-green-500" />
              <p className="text-xs font-semibold">Enriched & Verified</p>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "AI Personalization",
      description: "Context-rich messaging crafted for each prospect.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center relative">
           <div className="flex items-center gap-2">
            <Card className="p-3 w-40">
                <p className="text-xs text-muted-foreground">"Hi {"{firstName}"}, love {"{companyName}"}..."</p>
            </Card>
            <div className="flex flex-col items-center">
                <Bot className="h-6 w-6 text-primary" />
                <ArrowRight className="h-8 w-8 text-muted-foreground" />
                <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <Card className="p-3 w-40 bg-primary/10 border-primary">
                <p className="text-xs text-foreground">"Hi Jane, saw your recent funding round at Innovate Inc..."</p>
            </Card>
           </div>
        </Card>
      ),
    },
    {
      title: "Email Sending & Deliverability",
      description: "Sequences, warmups, and inbox health handled.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="flex items-center gap-6">
            <CalendarDays className="h-12 w-12 text-primary" />
            <div className="space-y-2">
                <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-muted-foreground" /> <span className="text-sm font-mono">Day 1: Intro</span></div>
                <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-muted-foreground" /> <span className="text-sm font-mono">Day 3: Follow-up</span></div>
                <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-muted-foreground" /> <span className="text-sm font-mono">Day 7: Case Study</span></div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "Ongoing Optimization",
      description: "New leads, A/B testing, and performance improvements baked in.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="flex items-center gap-4">
            <LineChart className="h-12 w-12 text-green-500" />
            <div className="space-y-2">
                <p className="font-bold text-green-600 dark:text-green-400">Open Rate: 72% <span className="text-xs">↑</span></p>
                <p className="font-bold text-green-600 dark:text-green-400">Meetings Booked: 12 <span className="text-xs">↑</span></p>
            </div>
          </div>
        </Card>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        </div>
        <div className="mt-16 space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div
                className={`flex items-start gap-6 ${
                  index % 2 === 1 ? "md:order-last" : ""
                }`}
              >
                <div className="flex-shrink-0 h-12 w-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="min-h-[250px]">{step.graphic}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Book a 15-Min Consultation</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;