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
  const pageTitle = "Artificialyze | AI Outreach for B2B Marketing Agencies";
  const pageDescription = "We help B2B marketing agencies scale client acquisition with a fully managed AI outreach system. Fill your pipeline with qualified clients, no SDRs required.";
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