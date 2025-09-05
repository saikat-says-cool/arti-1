import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">
              👉 Beta Offer — Limited to 5 Agencies Only
            </CardTitle>
            <CardDescription className="text-blue-200 text-lg pt-2">
              We’re onboarding our first 5 agencies at a special price.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="my-8">
              <p className="text-xl">
                <span className="text-5xl font-bold">$2,000</span> one-time setup
              </p>
              <p className="text-blue-200">(installation + customization)</p>
              <p className="text-4xl font-bold my-4">+</p>
              <p className="text-xl">
                <span className="text-5xl font-bold">$500</span>/month
              </p>
              <p className="text-blue-200">(monitoring, updates, and optimization)</p>
            </div>
            <p className="mb-8 font-semibold">
              After these 5 spots are filled, pricing doubles.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 w-full md:w-auto">
              Book a Free Demo
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};