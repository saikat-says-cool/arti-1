import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet-async";

const Book = () => {
  return (
    <>
      <Helmet>
        <title>Book a Free Consultation - Artificialyze</title>
        <meta name="description" content="Schedule a free, no-obligation consultation to discover how our AI automation solutions can save you time and grow your revenue." />
      </Helmet>
      <div className="container mx-auto py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to{' '}
            <span className="text-accent">
              <TypeAnimation
                sequence={['Automate?', 2000, 'Scale?', 2000, 'Grow?']}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop wasting time on manual work. Let's build an AI engine that does the heavy lifting, so you can focus on what you do best. Schedule a free, no-obligation strategy call to discover how much time and money you could be saving.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book Your Free Strategy Call</a>
          </Button>
          <p className="mt-8 text-muted-foreground">
            Or, email our CEO directly at{' '}
            <a href="mailto:saikat@artificialyze.com" className="font-medium text-foreground underline-offset-4 hover:underline">
              saikat@artificialyze.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Book;