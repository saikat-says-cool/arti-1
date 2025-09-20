import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const caseStudies = [
  {
    client: "Thenx",
    industry: "Fitness & Technology",
    challenge: "As a leading global fitness platform, Thenx needed to deliver personalized training and support at a scale that human agents couldn't manage, facing immense demand for instant, tailored advice from their community.",
    solution: [
      "We built a custom AI-powered fitness trainer and support assistant, designed to act as a digital extension of the Thenx brand.",
      "The system delivered instant, personalized workout guidance and answered thousands of common user FAQs in real-time.",
      "It was seamlessly integrated into Thenx's existing digital platforms, ensuring a frictionless user experience."
    ],
    impact: [
      "Created a faster, more engaging, and infinitely scalable user experience for a global audience.",
      "Provided a powerful proof of concept that AI assistants can effectively scale online fitness businesses.",
      "Positioned Thenx at the forefront of AI-driven customer engagement in the competitive fitness industry."
    ]
  },
  {
    client: "Zouk",
    industry: "DTC E-Commerce",
    challenge: "This rapidly growing Indian DTC brand needed to enhance customer support efficiency to handle increasing sales volume without expanding their support team, risking slower response times.",
    solution: [
      "We developed and presented a demo of a bespoke AI customer support system tailored to Zouk's specific needs.",
      "The AI provided 24/7 instant responses to common queries about orders, shipping, and returns by integrating with backend systems.",
      "We showcased a seamless live agent handover feature for resolving complex or sensitive customer issues."
    ],
    impact: [
      "The demo clearly illustrated how AI could reduce support workload by 50-80% while improving customer satisfaction.",
      "Zouk's leadership was impressed by the system's speed, accuracy, and flexibility.",
      "The engagement validated the strong market demand for sophisticated AI support solutions in the booming DTC space."
    ]
  },
  {
    client: "Pilgrim",
    industry: "DTC Personal Care ($350M+ Valuation)",
    challenge: "A leading personal care brand, Pilgrim was slowed down by manual processes in data analysis and content creation, creating bottlenecks that hindered their ability to scale efficiently.",
    solution: [
      "We built an AI-powered Data Analyst that connected to their databases, allowing any team member to get business insights using natural language.",
      "We also developed an AI Product Visual Generator that created realistic, label-preserving product images, accelerating content production.",
    ],
    impact: [
      "Received highly positive feedback from Pilgrim’s Chief of Staff for saving the team hours of manual work.",
      "Demonstrated a dual-pronged AI strategy, enhancing both operational efficiency (data) and marketing speed (visuals).",
      "Showcased a clear path for Pilgrim to leverage AI as a competitive advantage in the DTC personal care market."
    ]
  }
];

const CaseStudies = () => {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold h-24">
          <TypeAnimation
            sequence={['Proven Systems, ']}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
          />
          <span className="text-accent">
            <TypeAnimation
              sequence={[800, 'Real Results']}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={true}
            />
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We don't just build automations; we build growth engines. See how we've helped innovative brands save time, reduce costs, and scale faster.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:gap-12">
        {caseStudies.map((study) => (
          <Card key={study.client} className="bg-secondary/20 border-secondary/40 overflow-hidden">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-3xl">{study.client}</CardTitle>
                <Badge variant="outline" className="w-fit">{study.industry}</Badge>
              </div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="font-bold text-lg text-accent mb-2">The Challenge</h3>
                <p className="text-muted-foreground">{study.challenge}</p>
              </div>
              <div className="md:col-span-2 grid gap-6">
                <div>
                  <h3 className="font-bold text-lg text-accent mb-2">The Solution</h3>
                  <ul className="space-y-2">
                    {study.solution.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 mt-1 text-green-400 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-accent mb-2">The Impact</h3>
                  <ul className="space-y-2">
                    {study.impact.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 mt-1 text-green-400 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">Ready to Write Your Success Story?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Let's discuss how our AI solutions can be tailored to your specific needs.</p>
        <Button asChild size="lg" className="mt-8">
          <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Strategy Call</a>
        </Button>
      </div>
    </div>
  );
};

export default CaseStudies;