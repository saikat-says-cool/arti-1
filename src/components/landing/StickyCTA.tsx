"use client";

import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-4 z-50">
      <div className="container mx-auto flex items-center justify-center md:justify-between">
        <p className="hidden md:block font-medium text-center md:text-left">
          Ready to build a predictable client pipeline for your agency?
        </p>
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
          <Button>Book Your Free Growth Call</Button>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;