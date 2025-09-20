import { Bot, CalendarDays, Target, Send, Phone, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { icon: <Bot className="h-8 w-8 text-accent" />, title: "AI-Powered Customer Support Agents", description: "Instant, 24/7 support for your customers, resolving queries without human intervention." },
  { icon: <CalendarDays className="h-8 w-8 text-accent" />, title: "AI Appointment Setters", description: "Automate your booking process, filling your calendar with qualified appointments." },
  { icon: <Target className="h-8 w-8 text-accent" />, title: "AI Lead Generation Systems", description: "Identify and engage potential clients, delivering a steady stream of leads." },
  { icon: <Send className="h-8 w-8 text-accent" />, title: "AI Mass Outreach Infrastructure", description: "Scale your outreach campaigns across multiple channels with personalized messaging." },
  { icon: <Phone className="h-8 w-8 text-accent" />, title: "AI Voice Callers", description: "Deploy intelligent voice agents for reminders, follow-ups, and customer surveys." },
  { icon: <Users className="h-8 w-8 text-accent" />, title: "AI Social Media Managers", description: "Automate content scheduling, comment moderation, and engagement to grow your online presence." },
];

const Services = () => {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">AI-Powered Automation, <span className="text-accent">Done For You</span></h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We help businesses replace manual, repetitive work with AI-driven systems that work 24/7. Whether you’re looking to close more sales, support your customers faster, or scale outreach — we’ve got the tech to make it happen.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="bg-secondary/20 border-secondary/40">
            <CardHeader>
              {service.icon}
              <CardTitle className="mt-4">{service.title}</CardTitle>
              <CardDescription className="mt-2">{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;