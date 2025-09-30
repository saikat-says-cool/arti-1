import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
        We Build AI Systems That{' '}
        <span className="text-accent">
          <TypeAnimation
            sequence={['Save You Time', 2000, 'Grow Your Revenue', 2000, 'Automate Your Work']}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        We design and deploy custom AI automations that handle your repetitive tasks-from mass personalized client outreach to 24/7 customer support-so you can focus on growth.
      </p>
      <Button asChild size="lg" className="mt-8">
        <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Strategy Call</a>
      </Button>
    </section>
  );
};

export default Hero;