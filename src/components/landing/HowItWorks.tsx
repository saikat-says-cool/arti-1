import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Bot, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    title: "1. Discovery & Strategy Call",
    description: "We start with a free consultation to understand your brand, your customers, and your specific goals. We'll map out the perfect AI strategy for you.",
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "2. AI Training & Integration",
    description: "Our team trains your custom AI on your product catalog, FAQs, and brand voice. We then seamlessly integrate it with your website and existing tools like your CRM.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "3. Launch & Optimize",
    description: "We launch your AI Sales Assistant and monitor its performance closely. You get a dedicated dashboard to track results, and we provide ongoing optimization to ensure peak performance.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Your Path to Automated Growth</h2>
          <p className="mt-4 text-lg text-gray-600">
            Getting started with your AI Sales Assistant is a straightforward, collaborative process.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.title} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {step.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{step.title}</CardTitle>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;