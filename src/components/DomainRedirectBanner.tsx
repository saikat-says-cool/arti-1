"use client";

import React, { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { XCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Map of referrer hostnames to their associated brand names
const domainBrandMap: { [key: string]: string } = {
  "sentivibe.online": "SentiVibe",
  "sentivibe.info": "SentiVibe",
  "peekanalyst.xyz": "PeekAnalyst",
  "demovoice.xyz": "Demovoice",
};

const DomainRedirectBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [brandName, setBrandName] = useState<string | null>(null);

  useEffect(() => {
    const currentHostname = window.location.hostname;
    const referrer = document.referrer;

    // Only show the banner if the current host is artificialyze.com
    // and there's a referrer from one of the other brand domains.
    if (currentHostname === "artificialyze.com" && referrer) {
      try {
        const referrerUrl = new URL(referrer);
        const referrerHostname = referrerUrl.hostname;

        if (domainBrandMap[referrerHostname]) {
          setBrandName(domainBrandMap[referrerHostname]);
          setShowBanner(true);
        }
      } catch (error) {
        console.error("Error parsing referrer URL:", error);
        // If referrer parsing fails, don't show the banner to avoid incorrect messages.
      }
    }
  }, []);

  if (!showBanner || !brandName) {
    return null;
  }

  return (
    <div className="relative z-40"> {/* Ensure banner is above other content but below header */}
      <div className="container mx-auto px-4 md:px-6 py-3">
        <Alert className="bg-primary text-primary-foreground border-primary-foreground/20 flex items-center justify-between p-3 md:p-4 rounded-lg">
          <div className="flex items-center flex-grow">
            <XCircle className="h-5 w-5 mr-3 flex-shrink-0" />
            <AlertDescription className="text-sm md:text-base font-medium">
              You were looking for <span className="font-bold">{brandName}</span>. You've been redirected to Artificialyze.com, our main site. You're in the right place!
            </AlertDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowBanner(false)}
            className="ml-4 flex-shrink-0 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </Alert>
      </div>
    </div>
  );
};

export default DomainRedirectBanner;