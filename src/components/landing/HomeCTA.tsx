import { Button } from "@/components/ui/button";

const HomeCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to <span className="text-accent">Automate?</span></h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Stop wasting time on manual work. Let AI do the heavy lifting while you focus on what you do best: growing your business. Schedule a free, no-obligation consultation to see how much you could save.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
        </Button>
      </div>
    </section>
  );
};

export default HomeCTA;