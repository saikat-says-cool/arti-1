"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Industries = () => {
  const mainIndustries = [
    { 
      title: "Your Outreach Engine: For B2B Service-Based Businesses", 
      description: "If you're a marketing agency, financial service provider, or any B2B service-based business relying on client acquisition through outbound efforts, I'll build you a predictable, high-value client pipeline." 
    },
    { 
      title: "Your AI Appointment Setter: For Local Service-Based Businesses", 
      description: "Ideal if you run a business like a dental practice, chiropractic clinic, spa, real estate agency, or interior decor studio. We'll ensure your client engagement begins with an appointment or consultation, filling your calendar efficiently." 
    },
    { 
      title: "Your AI Customer Support & Sales Assistant: For E-commerce & SaaS", 
      description: "If you're an e-commerce brand across various niches (health, fitness, etc.) or a SaaS company, you need high-touch, conversion-oriented support and sales assistance. I'll boost your customer satisfaction and revenue." 
    },
  ];
  const otherIndustries = "Real Estate | Recruitment & Staffing | Healthcare | Education | Legal | Manufacturing | B2B E-Commerce";

  return (
    <motion.section 
      id="industries"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-12 md:py-20 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Is Artificialyze Right for Your Industry?</h2>
          <p className="mt-4 text-lg text-muted-foreground">I've designed Artificialyze to be adaptable and powerful across a wide range of sectors. Let's see where *your* business fits in:</p>
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
          <h3 className="text-2xl font-bold">And Many More: Industries Where We Empower Leaders Like You</h3>
          <p className="mt-4 text-muted-foreground max-w-4xl mx-auto">If your industry isn't explicitly listed above, chances are we can still build a transformative AI system for you. We've also empowered businesses in: {otherIndustries}.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Industries;