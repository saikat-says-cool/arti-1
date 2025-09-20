import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const Book = () => {
  return (
    <div className="container mx-auto py-16 md:py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold h-24">
          <TypeAnimation
            sequence={['Ready to ']}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
          />
          <span className="text-accent">
            <TypeAnimation
              sequence={[500, 'Automate?']}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={true}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Stop wasting time on manual work. Let AI do the heavy lifting while you focus on what you do best: growing your business. Schedule a free, no-obligation consultation to discover how much time and money you could be saving.
        </p>
        <Button size="lg" className="mt-8" asChild>
          <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
        </Button>
      </div>
    </div>
  );
};

export default Book;