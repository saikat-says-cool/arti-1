import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          👉 Ready For Your Custom AI Appointment Setter?
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          Book a free strategy call and our CEO, Saikat, will personally design an AI that books qualified appointments into your calendar - while you sleep.
        </p>
        <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 transition-transform duration-200 hover:scale-105">
          <Link to="/booking">Get My Custom AI Setter</Link>
        </Button>
      </div>
    </section>
  );
};