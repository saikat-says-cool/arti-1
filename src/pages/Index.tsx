import Hero from "@/components/landing/Hero";
import HomeWhyUs from "@/components/landing/HomeWhyUs";
import TrustedBy from "@/components/landing/TrustedBy";
import Partners from "@/components/landing/Partners";
import HomeCTA from "@/components/landing/HomeCTA";
import { Helmet } from "react-helmet-async";
import HomeServices from "@/components/landing/HomeServices";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Artificialyze - AI Automation Agency</title>
        <meta name="description" content="We build custom AI systems that save you time and grow your revenue. AI-powered customer support, automated client outreach, and workflow automation." />
      </Helmet>
      <Hero />
      <HomeWhyUs />
      <HomeServices />
      <TrustedBy />
      <Partners />
      <HomeCTA />
    </>
  );
};

export default Index;