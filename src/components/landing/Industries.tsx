"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VectorBackground from "./VectorBackground";

const Industries = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const mainIndustries = [
    { title: "B2B SaaS & Software", description: "From enterprise SaaS to mid-market startups, we fuel pipelines with leads sourced via LinkedIn, directories, and tech signals. Engagement budgets: $5,000–$100,000+." },
    { title: "Professional Services & Consulting", description: "IT, strategy, HR, marketing consultants-we target C-suite buyers with multi-channel personalized outreach, unlocking 3–5x billable hour recovery." },
    { title: "Financial Services & Wealth Management", description: "Independent advisors and boutique firms benefit from compliance-safe messaging, generating 5–10x ROI in pipeline growth." },
  ];
  const otherIndustries = [
    "Real Estate & Property Services", "Recruitment & Staffing", "Healthcare & Medtech",
    "Education & Training", "Legal Services", "Manufacturing & Industrial", "B2B E-Commerce & Wholesalers"
  ];

  return (
    <section className="relative py-16 md:py-24 bg-transparent">
      <VectorBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {mainIndustries.map((industry, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center">Other Industries We Empower:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
            {otherIndustries.map((industry, index) => (
              <div key={index} className="p-4 bg-background rounded-lg shadow-sm">
                <p className="font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <Button>Book Your Consultation →</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;