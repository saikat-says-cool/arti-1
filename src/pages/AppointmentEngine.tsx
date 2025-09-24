import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Bot, CalendarCheck, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";

const benefits = [
  { 
    title: "Capture & Qualify Leads 24/7", 
    description: "Our AI works around the clock, engaging potential clients on your website, social media, and Google Business Profile the moment they show interest." 
  },
  { 
    title: "Automated Scheduling", 
    description: "The system intelligently finds open slots in your calendar and books qualified appointments in real-time, eliminating phone tag and back-and-forth emails." 
  },
  { 
    title: "Reduce No-Shows", 
    description: "Send smart, personalized appointment reminders via SMS and email, dramatically increasing attendance rates and protecting your revenue." 
  },
  { 
    title: "Custom Workflows", 
    description: "We tailor the AI's script and logic to your specific business needs, ensuring it asks the right questions and represents your brand perfectly." 
  }
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
          Every missed call, delayed email, or slow DM is a lost opportunity. Our AI-powered Appointment Engine is your 24/7 front desk, capturing leads the moment they show interest. It intelligently qualifies them, answers their questions, and books them directly into your calendar. Smart, personalized reminders ensure they show up, freeing your team to focus on what they do best: delivering exceptional service.
        </p>
        <p className="mt-4 font-bold text-muted-foreground">For Dentists, Chiropractors, Med Spas, Salons, Realtors, Plumbers, HVAC, and more.</p>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Never Miss a Client Again</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our system is designed to maximize your booking rate and operational efficiency from day one.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-background/50 border-secondary/40">
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                  <CardDescription className="mt-2">{benefit.description}</CardDescription>
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
          <p className="mt-4 text-lg text-muted-foreground">Let us show you how our AI can fill your calendar while you sleep. The consultation is free, and the insights are invaluable.</p>
          <Button asChild size="lg" className="mt-8 text-center">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Consultation and See How Many Appointments You Could Be Missing</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AppointmentEngine;