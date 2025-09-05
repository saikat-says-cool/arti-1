import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const PainSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          👉 Missed Calls = Missed Deals
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-lg text-gray-600 mb-6">
              Most real estate agencies lose 40%+ of their leads because:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">❌</span>
                Calls go unanswered.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">❌</span>
                Follow-ups are too slow.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">❌</span>
                Agents are too busy showing homes.
              </li>
            </ul>
            <p className="text-lg text-gray-600 mt-6">
              The result? Lost commissions and wasted marketing spend.
            </p>
          </div>
          <Card className="bg-green-50 border-green-200 text-left">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
                The Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-green-900">
                The AI Appointment Engine™ responds instantly across phone, web chat, and social DMs - and books directly into your calendar.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};