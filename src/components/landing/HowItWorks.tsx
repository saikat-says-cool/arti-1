"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Target,
  Bot,
  TrendingUp,
  UserCog,
  ArrowRight,
  Mail,
  Sparkles,
  CalendarDays,
  LineChart,
  FileText,
  Linkedin,
  Briefcase,
  Building,
  CheckCircle,
  BarChart,
  MailCheck,
} from "lucide-react";
import {
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  BarChart as RechartsBarChart,
} from "recharts";
import VectorBackground from "./VectorBackground";

const HowItWorks = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const chartData = [
    { name: "Week 1", meetings: 2 },
    { name: "Week 2", meetings: 5 },
    { name: "Week 3", meetings: 8 },
    { name: "Week 4", meetings: 12 },
  ];

  const steps = [
    {
      title: "Ideal Customer Profiling",
      description: "We go deep to define and locate your perfect customer.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Target className="h-16 w-16 text-primary flex-shrink-0 mb-4 md:mb-0" />
            <Card className="p-4 shadow-lg w-full max-w-sm">
              <CardHeader className="flex-row items-center gap-4 pb-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Jane Doe, VP Marketing</CardTitle>
                  <p className="text-sm text-muted-foreground">B2B SaaS Startup</p>
                </div>
              </CardHeader>
              <CardContent className="text-sm space-y-2 pt-4">
                <p className="font-semibold">Pain Points:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Low quality MQLs</li>
                  <li>High SDR turnover</li>
                  <li>Scaling outreach is expensive</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Card>
      ),
    },
    {
      title: "Lead Generation & Enrichment",
      description: "We build a high-quality list of verified decision-makers.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="flex items-center gap-2 md:gap-4">
            <Card className="p-2 md:p-4 w-40 text-center">
              <FileText className="h-8 w-8 mx-auto text-primary" />
              <p className="text-xs md:text-sm font-semibold mt-2">Lead List (CSV)</p>
              <p className="text-xs text-muted-foreground">Name, Company</p>
            </Card>
            <ArrowRight className="h-8 w-8 text-muted-foreground flex-shrink-0" />
            <Card className="p-2 md:p-4 w-48">
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                Enriched Profile <CheckCircle className="h-4 w-4 text-green-500" />
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> VP of Marketing</li>
                <li className="flex items-center gap-2"><Building className="h-4 w-4" /> Innovate Inc.</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> jane.d@innovate.com</li>
                <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> /in/janedoe</li>
              </ul>
            </Card>
          </div>
        </Card>
      ),
    },
    {
      title: "AI Personalization",
      description: "Our AI crafts hyper-personalized messages that get replies.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center relative">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Card className="p-4 w-full max-w-xs shadow-md">
              <p className="text-xs text-muted-foreground font-mono">
                Subject: Quick Question<br/><br/>
                Hi {"{firstName}"},<br/><br/>
                I saw you work at {"{companyName}"} and wanted to reach out...
              </p>
            </Card>
            <div className="flex md:flex-col items-center gap-2 my-2 md:my-0 md:mx-4">
              <Bot className="h-6 w-6 text-primary" />
              <ArrowRight className="h-8 w-8 text-muted-foreground" />
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <Card className="p-4 w-full max-w-xs shadow-lg bg-primary/10 border-primary">
              <p className="text-xs text-foreground font-mono">
                Subject: Congrats on the funding, Jane!<br/><br/>
                Hi Jane,<br/><br/>
                Saw the news about Innovate Inc.'s Series A - congrats! The focus on AI-driven analytics is impressive...
              </p>
            </Card>
          </div>
        </Card>
      ),
    },
    {
      title: "Automated Sending & Delivery",
      description: "We manage the entire outreach process to ensure inbox placement.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <div className="w-full max-w-md text-center">
            <CalendarDays className="h-12 w-12 text-primary mx-auto" />
            <h4 className="font-bold mt-2 mb-4">Multi-Step Campaign Sequence</h4>
            <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
              <span>Day 1</span>
              <span>Day 3</span>
              <span>Day 7</span>
              <span>Day 12</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full mt-2 relative">
              <div className="absolute h-2 w-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-primary rounded-full" style={{left: '0%'}} />
              <div className="absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-primary rounded-full" style={{left: '25%'}} />
              <div className="absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-primary rounded-full" style={{left: '60%'}} />
              <div className="absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-primary rounded-full" style={{left: '95%'}} />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
              <MailCheck className="h-5 w-5" /> 95%+ Deliverability
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "Ongoing Optimization",
      description: "We constantly analyze and improve campaigns for peak performance.",
      graphic: (
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex items-center justify-center">
          <Card className="w-full max-w-md p-4 shadow-lg">
            <h4 className="font-bold mb-4">Campaign Performance</h4>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={chartData}>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="meetings" fill="hsl(var(--primary))" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                <div className="p-2 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">Open Rate</p>
                    <p className="text-lg font-bold text-green-600">72% ↑</p>
                </div>
                 <div className="p-2 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">Positive Replies</p>
                    <p className="text-lg font-bold text-green-600">8% ↑</p>
                </div>
            </div>
          </Card>
        </Card>
      ),
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-transparent">
      <VectorBackground />
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
              <div className="min-h-[350px]">{step.graphic}</div>
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