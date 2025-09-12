import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Database, Headphones, BarChart, Mic, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "24/7 AI Chatbot Support",
    description: "Instant responses, lead qualification, and personalized product recommendations to engage every visitor.",
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Dynamic Knowledge Base",
    description: "Integrates static documents and dynamic content, automatically structured for easy access.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-primary" />,
    title: "Seamless Live Agent Handoff",
    description: "Smoothly transitions complex queries to your human agents without missing a beat.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Advanced Analytics",
    description: "Track conversation duration, CSAT scores, and custom metrics on a comprehensive dashboard.",
  },
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: "Voice Interaction Support",
    description: "Allow customers to interact via voice with natural-sounding responses and custom voice options.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "CRM & Team Integration",
    description: "Connects with HubSpot, Salesforce, and more. Manage your team with role-based access.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">An AI Assistant Built for Growth</h2>
          <p className="mt-4 text-lg text-gray-600">
            We pack our AI with powerful features designed to enhance customer experience and drive sales for your fitness brand.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button size="lg" variant="outline" asChild>
                <Link to="/features">
                    See All Features & Integrations
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;