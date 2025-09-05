import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PainSolution } from "@/components/landing/PainSolution";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Offer } from "@/components/landing/Offer";
import { Pricing } from "@/components/landing/Pricing";
import { SocialProof } from "@/components/landing/SocialProof";
import { About } from "@/components/landing/About";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <PainSolution />
        <HowItWorks />
        <Offer />
        <Pricing />
        <SocialProof />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;