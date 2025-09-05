import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Bot, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: <Phone className="w-8 h-8 text-blue-600" />,
    title: "Step 1 — Lead Reaches Out",
    description: "Phone call, website chat, or social media DM — doesn’t matter.",
  },
  {
    icon: <Bot className="w-8 h-8 text-blue-600" />,
    title: "Step 2 — AI Responds",
    description: "Answers questions, qualifies the lead, and offers appointment times instantly.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-blue-600" />,
    title: "Step 3 — Appointment Confirmed",
    description: "Lead is booked directly into your Google Calendar (and synced with your CRM).",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full p-4 w-fit mb-4">
                  {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};