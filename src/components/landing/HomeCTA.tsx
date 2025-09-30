import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const HomeCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to{' '}
          <span className="text-accent">
            <TypeAnimation
              sequence={['Automate?', 2000, 'Innovate?', 2000, 'Grow?']}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Stop wasting time on manual work. Let's build an AI engine that does the heavy lifting, so you can focus on what you do best. Schedule a free, no-obligation strategy call to see how much you could save.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Strategy Call</a>
        </Button>
        <p className="mt-8 text-muted-foreground">
          Or, email our CEO directly at{' '}
          <a href="mailto:saikat@artificialyze.com" className="font-medium text-foreground underline-offset-4 hover:underline">
            saikat@artificialyze.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default HomeCTA;