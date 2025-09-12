import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Database, Headphones, BarChart, Mic, Users, Wrench, Zap } from "lucide-react";
import FinalCTA from "@/components/landing/FinalCTA";

const features = [
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "24/7 AI Chatbot Support",
    points: [
      "Instant Responses: Offers immediate answers to customer inquiries, reducing wait times.",
      "Lead Qualification: Proactively engages visitors to qualify leads and guide them through the sales funnel.",
      "Product Recommendations: Provides personalized product suggestions based on customer behavior.",
      "Upselling and Cross-Selling: Identifies opportunities to recommend complementary products, boosting order value.",
    ],
  },
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "Dynamic Knowledge Base Integration",
    points: [
      "Static and Dynamic Content: Integrates documents, PDFs, and dynamic content from various sources.",
      "Automated Structuring: AI automatically organizes raw content, making it easily searchable.",
    ],
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Seamless CRM Integration",
    points: [
      "Multi-CRM Compatibility: Integrates smoothly with HubSpot, Salesforce, Google Sheets, Airtable, and more.",
      "Real-Time Data Access: Fetches live data like order status or delivery information from your CRM.",
    ],
  },
  {
    icon: <Headphones className="w-10 h-10 text-primary" />,
    title: "Live Agent Handoff",
    points: [
      "Smooth Transition: Seamlessly hands off complex queries or specific requests to a human agent.",
      "Agent Dashboard: Provides a backend dashboard for agents to view transcripts and take over chats.",
    ],
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "Analytics & Reporting",
    points: [
      "Comprehensive Metrics: Track conversation duration, response times, CSAT scores, and more.",
      "Custom Metrics: Define and track custom KPIs relevant to your business objectives.",
    ],
  },
  {
    icon: <Mic className="w-10 h-10 text-primary" />,
    title: "Voice Interaction Support",
    points: [
      "Voice Mode: Allows customers to interact with the chatbot using voice commands.",
      "Custom Voice Options: Supports custom voices to maintain brand consistency.",
    ],
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Organization Management",
    points: [
      "Role-Based Access: Assign roles and permissions to team members for secure access.",
      "Team Collaboration: Allows multiple team members to collaborate within the dashboard.",
    ],
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "Custom Functionalities",
    points: [
      "Tailored Solutions: We offer the flexibility to develop custom functionalities to meet your specific business needs.",
    ],
  },
];

const FeaturesPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Our Core Offering</h1>
          <p className="mt-4 text-lg text-gray-600">
            An AI-Powered Customer Support & Sales Assistant designed to elevate your DTC brand.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  {feature.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <FinalCTA />
    </PageLayout>
  );
};

export default FeaturesPage;