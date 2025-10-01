"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
          AI-Powered Outreach That Builds Your Pipeline With Qualified Leads—No SDRs Required
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          We help B2B SaaS, Professional Services, and mid-market brands scale client acquisition with a fully automated AI outreach system—personalized, high-volume, and built to grow with you.
        </p>
        <div className="mt-8">
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Book Your Free 15-Min Consultation</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;