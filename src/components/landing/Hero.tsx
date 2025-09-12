import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gray-50">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Stop Losing Customers. Start Converting 24/7.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Artificialyze builds AI Sales Assistants for DTC Health & Fitness brands that answer questions, recommend products, and close sales while you sleep.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">
              Book Your Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;