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
import { Helmet } from "react-helmet-async";

const Index = () => {
  const pageUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>ThynkNext | AI Appointment Setter for Real Estate</title>
        <meta name="description" content="Stop missing leads. ThynkNext's AI Appointment Engine books 30-50% more appointments for real estate agencies by answering calls and chats 24/7. Book your free demo today!" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="ThynkNext | AI Appointment Setter for Real Estate" />
        <meta property="og:description" content="Stop missing leads. ThynkNext's AI Appointment Engine books 30-50% more appointments for real estate agencies." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content="ThynkNext | AI Appointment Setter for Real Estate" />
        <meta property="twitter:description" content="Stop missing leads. ThynkNext's AI Appointment Engine books 30-50% more appointments for real estate agencies." />
      </Helmet>
      <div className="bg-white">
        <Header />
        <main>
          <Hero />
          <PainSolution />
          <SocialProof />
          <HowItWorks />
          <Offer />
          <Pricing />
          <About />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;