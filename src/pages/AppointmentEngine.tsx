import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";

const benefits = [
  "Capture and qualify leads 24/7",
  "Automatic appointment scheduling and reminders",
  "Custom workflows tailored to your business",
  "Reduce no-shows and maximize revenue"
];

const AppointmentEngine = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered Appointment Engine - Artificialyze</title>
        <meta name="description" content="Turn every lead into a booked appointment—automatically. For local service businesses." />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter h-48 md:h-40">
          Turn Every Lead Into a Booked Appointment—
          <span className="text-accent">
            <TypeAnimation
              sequence={['Automatically', 2000, '24/7', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Stop losing clients to missed calls, emails, or slow follow-ups. Our AI-powered Appointment Engine captures leads from all your channels—website, Instagram, Facebook, Google—and books appointments in real time. Personalized reminders keep clients showing up, while your team focuses on delivering your service, not chasing leads.
        </p>
        <p className="mt-4 font-bold text-muted-foreground">For Dentists, Chiropractors, Med Spas, Salons, Realtors, Plumbers, HVAC, and more.</p>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Key Benefits</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-background/50 border-secondary/40">
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                  <CardTitle className="mt-4">{benefit}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Stop Missing Appointments?</h2>
          <Button asChild size="lg" className="mt-8 text-center">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Consultation and See How Many Appointments You Could Be Missing</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AppointmentEngine;