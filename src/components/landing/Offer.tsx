import { Check } from "lucide-react";

const deliverables = [
  "AI Appointment Setter (chat + voice)",
  "Google Calendar + CRM integration",
  "Automated SMS/email/voice follow-up",
  "Pre-built real estate conversation scripts",
  "30 days of optimization + team training",
];

export const Offer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            👉 Your 24/7 Appointment Setter - for Less than the Cost of a Junior Agent
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Hiring an Inside Sales Agent costs $3-5k/month. The AI Appointment Engine™ works 24/7, never takes a break, and never misses a lead.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">What You Get:</h3>
          <ul className="space-y-4">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-4">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};