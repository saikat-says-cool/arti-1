"use client";

import Layout from "@/components/layout/Layout";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Partners from "@/components/landing/Partners";
import Industries from "@/components/landing/Industries";
import HowItWorks from "@/components/landing/HowItWorks";
import CaseResults from "@/components/landing/CaseResults";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import FAQ from "@/components/landing/FAQ";
import StickyCTA from "@/components/landing/StickyCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProblemSolution />
      <Partners />
      <Industries />
      <HowItWorks />
      <CaseResults />
      <WhyChooseUs />
      <FAQ />
      <StickyCTA />
    </Layout>
  );
};

export default Index;