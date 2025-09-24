import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";

interface Offer {
  slug: string;
  title: string;
  headline: string;
  animatedHeadline: string[];
  description: string;
  for: string;
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: { title: string; description: string; }[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

const OfferPage = ({ offer }: { offer: Offer }) => {
  return (
    <>
      <Helmet>
        <title>{offer.title} - Artificialyze</title>
        <meta name="description" content={offer.description.substring(0, 160)} />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          {offer.headline}{' '}
          <span className="text-accent">
            <TypeAnimation
              sequence={offer.animatedHeadline.flatMap(item => [item, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          {offer.description}
        </p>
        <div className="mt-8 inline-block bg-secondary/30 text-secondary-foreground py-2 px-4 rounded-full text-sm font-medium">
          {offer.for}
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{offer.benefitsTitle}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {offer.benefitsDescription}
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
            {offer.benefits.map((benefit) => (
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
          <h2 className="text-3xl md:text-4xl font-bold">{offer.ctaTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{offer.ctaDescription}</p>
          <Button asChild size="lg" className="mt-8 text-center">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">{offer.ctaButtonText}</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default OfferPage;