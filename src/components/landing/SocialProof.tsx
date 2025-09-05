import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We were losing at least 10 deals a month to missed calls. ThynkNext's AI engine plugged that leak overnight. Our appointment book has never been this full.",
    name: "Sarah K.",
    title: "Principal @ Prestige Properties",
  },
  {
    quote: "I was skeptical about AI, but this is a game-changer. It handles all the initial lead conversations flawlessly, so my agents can focus on what they do best: closing. Our cost-per-lead has dropped 30%.",
    name: "Mark R.",
    title: "Owner @ The Realty Group",
  },
  {
    quote: "The setup was surprisingly fast, and the AI was booking qualified appointments within 48 hours. It's like having the perfect ISA who works 24/7 without needing a coffee break. Best investment we've made this year.",
    name: "Jessica L.",
    title: "Broker @ Luxe Homes International",
  },
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Agencies Are Already Seeing the Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};