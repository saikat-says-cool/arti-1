import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Wrench, BarChart } from "lucide-react";

const reasons = [
  { icon: <Zap className="h-8 w-8 text-accent" />, title: "All-in-One Expertise", description: "We master every major automation platform (Make, Zapier, n8n, Voiceflow, Supabase, APIs), so you get the best tool for the job, every time." },
  { icon: <Wrench className="h-8 w-8 text-accent" />, title: "Custom Solutions", description: "Your business is unique. We build tailored automations designed specifically for your workflow, ensuring seamless integration and maximum impact." },
  { icon: <BarChart className="h-8 w-8 text-accent" />, title: "Revenue + Efficiency Focused", description: "We don't just build bots; we build business assets. Every system is designed to increase sales, reduce operational costs, or save you hundreds of hours." },
];

const WhyUs = () => {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Why Work With <span className="text-accent">Artificialyze?</span></h1>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {reasons.map((reason) => (
          <Card key={reason.title} className="bg-secondary/20 border-secondary/40 text-center">
            <CardHeader className="items-center">
              {reason.icon}
              <CardTitle className="mt-4">{reason.title}</CardTitle>
              <CardDescription className="mt-2">{reason.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;