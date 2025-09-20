import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
        We Build AI Systems That Save You Time and <span className="text-accent">Grow Your Revenue</span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        From customer support to lead generation, appointment setting to social media — we design and deploy custom AI automations for your business.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link to="/book">Book a Free Consultation</Link>
      </Button>
    </section>
  );
};

export default Hero;