import PageLayout from "@/components/layout/PageLayout";
import { CheckCircle2 } from "lucide-react";

const deliverables = [
  "A Custom-Trained AI Assistant that acts as your #1 salesperson.",
  "Seamless Integration with your website and CRM.",
  "A Comprehensive Analytics Dashboard to track performance and ROI.",
  "Live Agent Handoff capability for complex queries.",
  "Ongoing Performance Monitoring and Optimization from our team.",
  "Dedicated Support to ensure your AI is always at its best.",
];

const WhatYouGetPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">A Complete Done-For-You Solution</h1>
          <p className="mt-4 text-lg text-gray-600">
            When you partner with Artificialyze, you get more than just software. You get a fully managed service dedicated to your growth.
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
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
    </PageLayout>
  );
};

export default WhatYouGetPage;