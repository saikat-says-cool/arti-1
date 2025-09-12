import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PainSolution from "@/components/landing/PainSolution";
import Features from "@/components/landing/Features";
import Results from "@/components/landing/Results";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <PainSolution />
        <Features />
        <Results />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;