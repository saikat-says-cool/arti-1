import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";

const benefits = [
  {
    title: "Automated Lead Scraping",
    description: "Our AI tirelessly scours LinkedIn, directories, and the web to find your ideal clients, building a high-quality prospect list automatically."
  },
  {
    title: "Mass Personalized Outreach",
    description: "Launch hyper-personalized email and social media campaigns at scale. Our AI crafts messages that resonate, boosting reply rates and avoiding spam filters."
  },
  {
    title: "Performance & Optimization",
    description: "Track key metrics like open rates, reply rates, and conversions. We continuously optimize your campaigns to maximize results and ROI."
  },
  {
    title: "Seamless Appointment Setting",
    description: "Integrate our Appointment Engine to automatically book meetings with interested leads, creating a seamless pipeline from outreach to sales call."
  }
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
          Manual prospecting is a numbers game that burns time and energy. Our AI-powered system transforms lead generation into a predictable, automated engine for growth. It finds your ideal clients, enriches their data for deep personalization, and launches outreach campaigns at scale. Your calendar fills with qualified prospects, allowing your sales team to focus purely on closing deals.
        </p>
        <p className="mt-4 font-bold text-muted-foreground">For Marketing, Design, PPC, Consulting, and other Agencies.</p>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">A Smarter Way to Scale Outreach</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our end-to-end system handles the entire top-of-funnel process, so you can focus on closing.
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
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Fill Your Pipeline?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Stop hunting for leads and start closing them. Let's build your automated outreach machine together.</p>
          <Button asChild size="lg" className="mt-8 text-center">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Consultation and Start Filling Your Pipeline Automatically</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default LeadGenerationAndOutreach;