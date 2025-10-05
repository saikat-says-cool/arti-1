"use client";

import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4 md:px-6 text-center">
        <p className="font-bold">Artificialyze – AI Outreach Infrastructure for B2B Agencies</p>
        <p className="text-muted-foreground mt-2">
          📩 inquiries@artificialyze.com
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://x.com/Artificialyze" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaTwitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://www.instagram.com/artificialyze/?__pwa=1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaInstagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          © 2025 Artificialyze. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;