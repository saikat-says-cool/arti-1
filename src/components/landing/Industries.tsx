"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Industries = () => {
  const mainIndustries = [
    { 
      title: "Outreach Engine: B2B Service-Based Businesses", 
      description: "For marketing agencies, financial services, and any B2B service-based business relying on client acquisition through outbound efforts, seeking predictable, high-value client pipelines." 
    },
    { 
      title: "AI Appointment Setter: Local Service-Based Businesses", 
      description: "Ideal for businesses like dentists, chiropractors, spas, clinics, real estate agents, and interior decor studios, where client engagement begins with an appointment or consultation, aiming to fill calendars efficiently." 
    },
    { 
      title: "AI Customer Support & Sales Assistant: E-commerce & SaaS", 
      description: "For e-commerce brands across various niches (health, fitness, etc.) and SaaS companies needing high-touch, conversion-oriented support and sales assistance to boost customer satisfaction and revenue." 
    },
  ];
  const otherIndustries = "Real Estate | Recruitment & Staffing | Healthcare | Education | Legal | Manufacturing | B2B E-Commerce"; // Keeping this as is, but it can be updated if you have specific new content for it.

  return (
    <motion.section 
      id="industries"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-12 md:py-20 bg-transparent overflow-hidden"
    >
      {/* <ParticlesBackground /> Removed */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {mainIndustries.map((industry, index) => (
            <motion.div key={index} whileHover={{ y: -8, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold">Other industries we empower</h3>
          <p className="mt-4 text-muted-foreground max-w-4xl mx-auto">{otherIndustries}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Industries;