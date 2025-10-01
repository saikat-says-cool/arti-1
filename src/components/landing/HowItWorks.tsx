"use client";

import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const steps = [
    { title: "Ideal Customer Profiling", description: "Zero in on the right decision-makers" },
    { title: "Lead Generation & Enrichment", description: "Verified roles, emails, and firmographic data" },
    { title: "AI Personalization", description: "Context-rich messaging crafted for each prospect" },
    { title: "Email Sending & Deliverability", description: "Sequences, warmups, and inbox health handled" },
    { title: "Ongoing Optimization", description: "New leads, A/B testing, and performance improvements baked in" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        </div>
        <div className="mt-12 max-w-2xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-1 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <Button>Book a 15-Min Consultation</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;