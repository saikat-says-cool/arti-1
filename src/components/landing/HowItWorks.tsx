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
  ShieldCheck,
  Inbox,
  GitCompareArrows,
  BarChart,
  Repeat,
} from "lucide-react";

const HowItWorks = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  const steps = [
    {
      title: "Ideal Customer Profiling",
      description: "Zero in on the right decision-makers.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block bg-primary text-primary-foreground p-4 rounded-lg">
              <Target className="h-8 w-8" />
            </div>
            <p className="font-bold mt-2">Your Offering</p>
            <Share2 className="h-12 w-12 text-muted-foreground mx-auto my-2 rotate-90" />
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <UserCog className="h-8 w-8 mx-auto text-primary" />
                <p className="text-sm font-semibold">CTOs</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto text-primary" />
                <p className="text-sm font-semibold">CEOs</p>
              </div>
              <div className="text-center">
                <UserCheck className="h-8 w-8 mx-auto text-primary" />
                <p className="text-sm font-semibold">CMOs</p>
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "Lead Generation & Enrichment",
      description: "Verified roles, emails, and firmographic data.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="flex items-center gap-6">
            <Search className="h-12 w-12 text-primary flex-shrink-0" />
            <Card>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="font-mono text-sm">Acme Corp.</span>
                  <MailCheck className="h-5 w-5 text-green-500" />
                </div>
                <div className="flex items-center gap-2">
                  <UserCog className="h-5 w-5 text-muted-foreground" />
                  <span className="font-mono text-sm">CTO</span>
                  <MailCheck className="h-5 w-5 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </Card>
      ),
    },
    {
      title: "AI Personalization",
      description: "Context-rich messaging crafted for each prospect.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center relative overflow-hidden">
          <Bot className="h-16 w-16 text-primary z-10" />
          <div className="absolute top-4 right-4 text-center">
            <Users className="h-8 w-8 mx-auto text-muted-foreground" />
            <p className="text-xs font-mono mt-1">Prospect A</p>
          </div>
          <div className="absolute bottom-4 left-4 text-center">
            <UserCog className="h-8 w-8 mx-auto text-muted-foreground" />
            <p className="text-xs font-mono mt-1">Prospect B</p>
          </div>
           <div className="absolute bottom-4 right-4 text-center">
            <UserCheck className="h-8 w-8 mx-auto text-muted-foreground" />
            <p className="text-xs font-mono mt-1">Prospect C</p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 border-dashed border-2 border-primary/50 rounded-full animate-spin-slow" />
          </div>
        </Card>
      ),
    },
    {
      title: "Email Sending & Deliverability",
      description: "Sequences, warmups, and inbox health handled.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="flex items-center gap-4 w-full">
            <MailCheck className="h-8 w-8 text-primary" />
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-3/4" />
            </div>
            <Inbox className="h-8 w-8 text-green-500" />
          </div>
        </Card>
      ),
    },
    {
      title: "Ongoing Optimization",
      description: "New leads, A/B testing, and performance improvements baked in.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <Repeat className="h-24 w-24 text-primary/20 animate-spin-slow" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <GitCompareArrows className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
              <BarChart className="h-8 w-8 text-primary -rotate-90" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <TrendingUp className="h-8 w-8 text-primary" />
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