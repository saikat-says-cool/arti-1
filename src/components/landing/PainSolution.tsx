import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const PainSolution = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <XCircle />
                The Frustrating Reality for DTC Brands
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-red-700">
              <p>Answering the same questions over and over, wasting valuable time.</p>
              <p>Losing sales to cart abandonment when a simple question goes unanswered.</p>
              <p>Missing out on leads and sales that come in after business hours.</p>
              <p>Struggling to provide personalized recommendations at scale.</p>
              <p>Watching support ticket queues grow longer and customer satisfaction drop.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <CheckCircle2 />
                Your Dream Scenario with Artificialyze
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-green-700">
              <p>Every visitor gets an instant, personalized shopping assistant, 24/7.</p>
              <p>Average Order Value increases with intelligent, automated upsells.</p>
              <p>Your support team focuses on high-value tasks, not repetitive queries.</p>
              <p>Lead qualification happens automatically, day and night.</p>
              <p>Customers feel heard and valued, boosting loyalty and repeat purchases.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PainSolution;