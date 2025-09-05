import { Button } from "@/components/ui/button";

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
        <Button size="lg" className="text-lg px-8 py-6">
          Book a Free Demo
        </Button>
        <div className="mt-12 max-w-4xl mx-auto">
          <img src="/placeholder.svg" alt="AI Appointment Engine in action" className="rounded-lg shadow-xl border" />
        </div>
      </div>
    </section>
  );
};