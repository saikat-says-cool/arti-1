"use client";

import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Partners from "@/components/landing/Partners";
import Credibility from "@/components/landing/Credibility";
import Industries from "@/components/landing/Industries";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import SpotlightTestimonials from "@/components/landing/SpotlightTestimonials";
import Testimonials from "@/components/landing/Testimonials";
import SocialProofTweets from "@/components/landing/SocialProofTweets";
import HowItWorks from "@/components/landing/HowItWorks";
import Guarantee from "@/components/landing/Guarantee";
import Investment from "@/components/landing/Investment";
import SentivibePromotion from "@/components/landing/SentivibePromotion"; // New import
import FAQ from "@/components/landing/FAQ";

const Index = () => {
  const pageTitle = "Artificialyze | AI Automation That Acquires, Engages & Converts";
  const pageDescription = "Artificialyze builds fully managed AI systems that acquire, qualify, and convert 24/7. We don't add software; we replace effort, building your own AI layer that talks like your brand, closes like your best salesperson, and goes live in 3 days. Predictable pipelines, higher conversions, and satisfied customers—without increasing headcount.";
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
        <SpotlightTestimonials />
        <Testimonials />
        <SocialProofTweets />
        <HowItWorks />
        <Guarantee />
        <Investment />
        <SentivibePromotion /> {/* New component added here */}
        <FAQ />
      </Layout>
    </>
  );
};

export default Index;