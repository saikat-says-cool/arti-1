import PageLayout from "@/components/layout/PageLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2 } from "lucide-react";
import FinalCTA from "@/components/landing/FinalCTA";

const deliverables = [
  "A Custom-Trained AI Assistant that acts as your #1 salesperson.",
  "Seamless Integration with your website and CRM.",
  "A Comprehensive Analytics Dashboard to track performance and ROI.",
  "Live Agent Handoff capability for complex queries.",
  "Ongoing Performance Monitoring and Optimization from our team.",
  "Dedicated Support to ensure your AI is always at its best.",
];

const kpiCategories = [
  {
    category: "Customer Support Efficiency",
    kpis: [
      { kpi: "Average Response Time", estimate: "< 10 seconds", description: "Instant responses compared to traditional wait times of hours or a day." },
      { kpi: "First Contact Resolution Rate", estimate: "70–90%", description: "Percentage of queries resolved without human intervention." },
      { kpi: "Ticket Deflection Rate", estimate: "50–80%", description: "Percentage of support tickets handled by AI, reducing human workload." },
      { kpi: "Customer Satisfaction Score (CSAT)", estimate: "≥ 85%", description: "Measures customer satisfaction post-interaction." },
    ],
  },
  {
    category: "Sales Performance",
    kpis: [
      { kpi: "Lead Qualification Rate", estimate: "30–50%", description: "Percentage of visitors engaged by AI who are qualified leads." },
      { kpi: "Conversion Rate Improvement", estimate: "10–25%", description: "Increase in conversion rates due to AI interactions." },
      { kpi: "Average Order Value (AOV) Increase", estimate: "5–15%", description: "Increase in AOV through upselling and cross-selling by AI." },
      { kpi: "Cart Abandonment Reduction", estimate: "5–15%", description: "Reduction in cart abandonment rates due to proactive AI engagement." },
    ],
  },
  {
    category: "Operational Efficiency",
    kpis: [
      { kpi: "Human Agent Time Saved", estimate: "20–40 hours/week", description: "Reduction in human agent workload, allowing focus on complex issues." },
      { kpi: "CRM Query Response Time", estimate: "3–5 seconds", description: "Real-time integration with CRM systems for instant query responses." },
      { kpi: "24/7 Support Availability", estimate: "100%", description: "Continuous support without additional staffing costs." },
    ],
  },
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

        <div className="mt-24 max-w-5xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Measurable Results & Conservative KPIs</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We focus on delivering tangible outcomes. Here are the conservative estimates you can expect.
                </p>
            </div>
            <div className="mt-12 space-y-12">
                {kpiCategories.map((cat) => (
                    <div key={cat.category}>
                        <h3 className="text-2xl font-semibold mb-4">{cat.category}</h3>
                        <div className="border rounded-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[25%]">KPI</TableHead>
                                        <TableHead className="w-[20%]">Conservative Estimate</TableHead>
                                        <TableHead>Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {cat.kpis.map((kpi) => (
                                        <TableRow key={kpi.kpi}>
                                            <TableCell className="font-medium">{kpi.kpi}</TableCell>
                                            <TableCell className="font-semibold text-primary">{kpi.estimate}</TableCell>
                                            <TableCell>{kpi.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <FinalCTA />
    </PageLayout>
  );
};

export default WhatYouGetPage;