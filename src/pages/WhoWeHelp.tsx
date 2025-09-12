import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, HeartPulse, Shirt, Apple, BrainCircuit, Sparkles } from "lucide-react";

const targetSectors = [
  {
    icon: <Dumbbell className="w-8 h-8 text-primary" />,
    title: "Fitness & Exercise Products",
    items: ["Equipment & Accessories (Dumbbells, bands, mats)", "Wearables & Fitness Tech (Smartwatches, trackers)"],
  },
  {
    icon: <Apple className="w-8 h-8 text-primary" />,
    title: "Nutrition & Supplements",
    items: ["Protein powders, vitamins, supplements", "Pre-workouts, meal replacements, snacks"],
  },
  {
    icon: <Shirt className="w-8 h-8 text-primary" />,
    title: "Apparel & Accessories",
    items: ["Activewear, compression clothing", "Gym bags, water bottles, footwear"],
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: "Wellness & Recovery",
    items: ["Foam rollers, massage guns", "CBD creams, infrared therapy devices"],
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Digital Fitness Products",
    items: ["Fitness apps & programs", "Online coaching, meal planning apps"],
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Health & Lifestyle",
    items: ["Sleep aids, meditation tools", "Home saunas, eco-friendly workout gear"],
  },
];

const WhoWeHelpPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Built for Health & Fitness Brands</h1>
          <p className="mt-4 text-lg text-gray-600">
            Our AI is specifically trained to understand the nuances of the DTC health, wellness, and fitness industry. We help brands that sell:
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetSectors.map((sector) => (
            <Card key={sector.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                {sector.icon}
                <CardTitle>{sector.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  {sector.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default WhoWeHelpPage;