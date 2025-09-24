import { offers } from "@/data/offers";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const HomeServices = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <TypeAnimation
            sequence={['Our ']}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
          />
          <span className="text-accent">
            <TypeAnimation
              sequence={[300, 'AI-Powered Solutions', 2000, 'Automation Services', 2000, 'Growth Engines']}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We build custom AI systems designed to tackle your biggest business challenges, from lead generation to customer support.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3 text-left">
          {offers.map((offer) => (
            <Card key={offer.slug} className="flex flex-col bg-background/50 border-secondary/40 hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>{offer.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  {offer.description.split('.')[0] + '.'}
                </p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="ghost" className="text-accent hover:text-accent p-0">
                  <Link to={`/offer/${offer.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;