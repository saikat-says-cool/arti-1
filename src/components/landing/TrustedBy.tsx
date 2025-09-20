import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const clients = ["Thenx", "Pilgrim", "Zouk"];

const TrustedBy = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Proven Systems, <span className="text-accent">Trusted By Brands</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We've had the privilege of building automation solutions for innovative companies.
        </p>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {clients.map((client) => (
            <div key={client} className="text-3xl font-bold text-muted-foreground/60 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
              {client}
            </div>
          ))}
        </div>
        <Button asChild size="lg" variant="outline" className="mt-12">
          <Link to="/case-studies">See How We Helped Them</Link>
        </Button>
      </div>
    </section>
  );
};

export default TrustedBy;