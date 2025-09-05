import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="py-20 md:py-32 text-center bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          👉 Book 30-50% More Real Estate Appointments - Without Hiring an ISA
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          The AI Appointment Engine™ answers calls, chats with leads, and books meetings 24/7 - so you never miss a client again.
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <Link to="/booking">Book a Free Demo</Link>
        </Button>
      </div>
    </section>
  );
};