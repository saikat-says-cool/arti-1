import { CheckCircle2 } from "lucide-react";

const deliverables = [
  "A Custom-Trained AI Assistant that acts as your #1 salesperson.",
  "Seamless Integration with your website and CRM.",
  "A Comprehensive Analytics Dashboard to track performance and ROI.",
  "Live Agent Handoff capability for complex queries.",
  "Ongoing Performance Monitoring and Optimization from our team.",
  "Dedicated Support to ensure your AI is always at its best.",
];

const WhatYouGet = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">A Complete Done-For-You Solution</h2>
          <p className="mt-4 text-lg text-gray-600">
            When you partner with Artificialyze, you get more than just software. You get a fully managed service dedicated to your growth.
          </p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
            <ul className="space-y-4">
                {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-700">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;