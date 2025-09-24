import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";

const benefits = [
  {
    title: "Instant, Accurate Responses",
    description: "Our AI integrates with your knowledge base to provide 24/7, immediate answers to customer questions across your website, email, and social media."
  },
  {
    title: "Automated Order Management",
    description: "Empower customers to track orders, initiate returns, and process refunds on their own, freeing up your human agents for high-value interactions."
  },
  {
    title: "Personalized Upsells",
    description: "The AI analyzes customer queries and browsing history to offer relevant product recommendations and upsells, turning support chats into sales opportunities."
  },
  {
    title: "Reduce Support Workload",
    description: "Automate up to 80% of common inquiries, allowing your support team to focus on complex issues and deliver a superior customer experience."
  }
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
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
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
          A slow or unavailable support team doesn't just frustrate customers—it costs you sales. Our AI system acts as your brand's most knowledgeable and tireless agent. It's trained on your product data to handle everything from FAQs and order tracking to returns and personalized recommendations. By providing instant, accurate support 24/7, you'll boost satisfaction, increase conversions, and build lasting loyalty.
        </p>
        <div className="mt-8 inline-block bg-secondary/30 text-secondary-foreground py-2 px-4 rounded-full text-sm font-medium">
          For E-Commerce & D2C Brands.
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Support That Sells</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Go beyond basic support. Our AI is a revenue-generating asset for your brand.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-background/50 border-secondary/40">
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                  <CardDescription className="mt-2">{benefit.description}</CardDescription>
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
          <p className="mt-4 text-lg text-muted-foreground">Discover how our AI can handle the majority of your customer inquiries, so you can focus on growing your brand.</p>
          <Button asChild size="lg" className="mt-8 text-center">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Demo to See How AI Can Handle Your Customer Support</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default CustomerSupport;