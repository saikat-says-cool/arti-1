"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const WhyChooseUs = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const reasons = [
    { title: "All-in-One Outreach Infrastructure", description: "Replace multiple tools + SDR headcount" },
    { title: "Done-For-You Delivery", description: "While you close deals, we keep your pipeline full" },
    { title: "Deep AI Personalization", description: "Real conversations, not templates that get ignored" },
    { title: "Scales As You Grow", description: "Predictable results without ballooning costs" },
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Why Companies Choose Artificialyze</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="mt-1 text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <Button>Book Your Free 15-Min Consultation</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;