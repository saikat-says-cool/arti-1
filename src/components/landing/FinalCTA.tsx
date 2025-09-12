import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Automate Your Growth?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Let's discuss how an AI Sales Assistant can transform your customer support, boost your sales, and free up your time.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">
              Schedule Your Free Consultation Today
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;