import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  return (
    <div className="container mx-auto py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">Proven Systems, <span className="text-accent">Trusted By Brands</span></h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        We are currently compiling our public case studies. In the meantime, we'd be happy to show you live demos of our systems in action.
      </p>
      <Button asChild size="lg" className="mt-8">
        <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">See Our Demo Systems</a>
      </Button>
    </div>
  );
};

export default CaseStudies;