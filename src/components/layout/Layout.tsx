import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ParticlesBackground from "../utils/ParticlesBackground";
import SEO from "../utils/SEO";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Artificialyze",
  "url": "https://artificialyze.com",
  "logo": "https://artificialyze.com/artificialyze-logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "saikat@artificialyze.com",
    "contactType": "customer service"
  }
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <SEO schema={organizationSchema} />
      <ParticlesBackground />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};