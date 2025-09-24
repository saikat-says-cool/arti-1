import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";

const benefits = [
  "Automated lead scraping and enrichment",
  "Mass personalized outreach for maximum response",
  "Performance tracking and optimization",
  "Optional appointment scheduling integration"
];

const LeadGenerationAndOutreach = () => {
  return (
    <>
      <Helmet>
        <title>AI Lead Generation & Mass Personalized Outreach - Artificialyze</title>
        <meta name="description" content="Fill Your Sales Pipeline Automatically—No Manual Work Required. For Agencies." />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter h-48 md:h-40">
          Fill Your Sales Pipeline 
          <span className="text-accent">
            <TypeAnimation
              sequence={[' Automatically', 2000, ' On Autopilot', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
          —No Manual Work Required
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Stop hunting for leads and start closing them. Our AI scrapes, enriches, and organizes leads from LinkedIn, directories, and the web. Personalized outreach campaigns run automatically, maximizing engagement and deliverability. Optional appointment automation ensures your calendar fills while your team focuses on closing deals.
        </p>
        <p className="mt-4 font-bold text-muted-foreground">For Marketing, Design, PPC, Consulting, and other Agencies.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Fill Your Pipeline?</h2>
          <Button asChild size="lg" className="mt-8 text-center">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Consultation and Start Filling Your Pipeline Automatically</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default LeadGenerationAndOutreach;