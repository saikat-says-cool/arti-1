"use client";

import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Partners from "@/components/landing/Partners";
import Credibility from "@/components/landing/Credibility";
import Industries from "@/components/landing/Industries";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testimonials from "@/components/landing/Testimonials";
import HowItWorks from "@/components/landing/HowItWorks";
import Guarantee from "@/components/landing/Guarantee";
import Investment from "@/components/landing/Investment";
import FAQ from "@/components/landing/FAQ";
import StickyCTA from "@/components/landing/StickyCTA";

const Index = () => {
  const pageTitle = "Artificialyze | AI Outreach Infrastructure for B2B Agencies";
  const pageDescription = "We partner with B2B marketing agencies to build a predictable client-acquisition engine with a fully-managed AI outreach system. Book your free growth strategy call.";
  const pageUrl = "https://www.artificialyze.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Artificialyze",
    "url": pageUrl,
    "logo": `${pageUrl}/favicon.svg`,
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
        <Credibility />
        <Industries />
        <WhyChooseUs />
        <Testimonials />
        <HowItWorks />
        <Guarantee />
        <Investment />
        <FAQ />
        <StickyCTA />
      </Layout>
    </>
  );
};

export default Index;