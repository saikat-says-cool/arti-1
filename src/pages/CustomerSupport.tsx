import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";

const benefits = [
  "Instant, accurate responses across multiple channels",
  "Track orders, manage returns, and assist refunds",
  "Personalized upsells and product guidance",
  "Reduce support team workload without sacrificing quality"
];

const CustomerSupport = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered Customer Support - Artificialyze</title>
        <meta name="description" content="24/7 AI Support That Converts Visitors Into Happy Customers. For E-Commerce & D2C Brands." />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter h-48 md:h-40">
          24/7 AI Support That Converts Visitors Into 
          <span className="text-accent">
            <TypeAnimation
              sequence={[' Happy Customers', 2000, ' Loyal Fans', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Never let a customer inquiry slip through the cracks. Our AI handles FAQs, order tracking, returns, and even product recommendations—instantly and automatically. Provide a seamless customer experience while increasing conversions and reducing support costs.
        </p>
        <p className="mt-4 font-bold text-muted-foreground">For E-Commerce & D2C Brands.</p>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Key Benefits</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-background/50 border-secondary/40">
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                  <CardTitle className="mt-4">{benefit}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">Ready for Effortless Customer Support?</h2>
          <Button asChild size="lg" className="mt-8 text-center">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Demo to See How AI Can Handle Your Customer Support</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default CustomerSupport;