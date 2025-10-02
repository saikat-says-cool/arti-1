"use client";

import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold mb-2">Artificialyze</h3>
            <p className="text-muted-foreground max-w-md">
              We are an AI automation agency helping B2B SaaS, Professional Services, and mid-market brands scale client acquisition with a fully automated AI outreach system—personalized, high-volume, and built to grow with you.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-2">Contact Details</h3>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <a href="mailto:inquiries@artificialyze.com" className="hover:text-foreground transition-colors">
                inquiries@artificialyze.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Artificialyze. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;