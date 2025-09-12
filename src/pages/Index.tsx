import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/landing/Hero";
import PainSolution from "@/components/landing/PainSolution";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatYouGet from "@/components/landing/WhatYouGet";
import Results from "@/components/landing/Results";
import FinalCTA from "@/components/landing/FinalCTA";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <PainSolution />
      <Features />
      <HowItWorks />
      <WhatYouGet />
      <Results />
      <FinalCTA />
    </PageLayout>
  );
};

export default Index;