import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
        <TypeAnimation
          sequence={['We Build AI Systems That Save You Time and ']}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
        />
        <span className="text-accent">
          <TypeAnimation
            sequence={[2400, 'Grow Your Revenue', 2000, 'Save You Money', 2000, 'Boost Efficiency']}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        From customer support to lead generation, appointment setting to social media, we design and deploy custom AI automations for your business.
      </p>
      <Button asChild size="lg" className="mt-8">
        <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
      </Button>
    </section>
  );
};

export default Hero;