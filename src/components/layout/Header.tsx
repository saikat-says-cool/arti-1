"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/artificialyze-logo.svg" alt="Artificialyze Logo" className="h-8 w-auto" />
          <span className="font-bold text-xl">Artificialyze</span>
        </Link>
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
          <Button>Book a Consultation</Button>
        </a>
      </div>
    </header>
  );
};

export default Header;