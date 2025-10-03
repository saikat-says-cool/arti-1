"use client";

import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Partners from "@/components/landing/Partners";
import Industries from "@/components/landing/Industries";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import FAQ from "@/components/landing/FAQ";
import StickyCTA from "@/components/landing/StickyCTA";

const Index = () => {
  const pageTitle = "Artificialyze | Predictable Client Acquisition for B2B Agencies";
  const pageDescription = "Stop the client feast-or-famine cycle. Artificialyze builds a predictable client acquisition engine for B2B marketing agencies using a fully managed, AI-powered outreach system.";
  const pageUrl = "https://www.artificialyze.com"; // Replace with your actual domain

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Artificialyze",
    "url": pageUrl,
    "logo": `${pageUrl}/favicon.svg`, // Replace with your logo URL
    "description": pageDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "inquiries@artificialyze.com",
      "contactType": "Sales"
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Layout>
        <Hero />
        <ProblemSolution />
        <Partners />
        <Industries />
        <WhyChooseUs />
        <HowItWorks />
        <FAQ />
        <StickyCTA />
      </Layout>
    </>
  );
};

export default Index;