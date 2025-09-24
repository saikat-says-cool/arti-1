import { Bot, CalendarDays, Target } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";

const services = [
  { icon: <Bot className="h-8 w-8 text-accent" />, title: "AI Customer Support", description: "Resolve customer queries instantly, 24/7, without human intervention." },
  { icon: <CalendarDays className="h-8 w-8 text-accent" />, title: "AI Appointment Setting", description: "Fill your calendar with qualified appointments, completely on autopilot." },
  { icon: <Target className="h-8 w-8 text-accent" />, title: "AI Lead Generation", description: "Identify and engage potential clients, delivering a steady stream of hot leads." },
];

const HomeServices = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold h-28 md:h-24">
          <TypeAnimation
            sequence={['AI-Powered Automation, ']}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
          />
          <span className="text-accent">
            <TypeAnimation
              sequence={[1200, 'Done For You', 2000, 'Built To Scale', 2000, 'Always On']}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We replace manual, repetitive work with intelligent AI systems that work around the clock. Whether you need to close more sales, support customers faster, or scale outreach—we build the solution.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="bg-background/50 border-secondary/40 text-left transition-transform duration-300 hover:-translate-y-1">
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;