import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="py-20 md:py-32 text-center bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          👉 Book 30-50% More Real Estate Appointments - Without Hiring an ISA
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          The AI Appointment Engine™ answers calls, chats with leads, and books meetings 24/7 - so you never miss a client again.
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button asChild size="lg" className="text-lg px-8 py-6 transition-transform duration-200 hover:scale-105">
            <Link to="/booking">Book a Free Demo</Link>
          </Button>
        </div>
        <div className="mt-12 max-w-4xl mx-auto rounded-lg shadow-xl border overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <iframe
            src="https://cal.com/saikat-dutta-chowdhury-udgx5a/15min"
            style={{ width: "100%", height: "700px" }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};