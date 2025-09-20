import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Wrench, BarChart, ShieldCheck, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const reasons = [
  { icon: <Zap className="h-8 w-8 text-accent" />, title: "All-in-One Expertise", description: "We master every major automation platform (Make, Zapier, n8n, Voiceflow, Supabase, APIs), so you get the best tool for the job, every time. No need to juggle multiple agencies or freelancers." },
  { icon: <Wrench className="h-8 w-8 text-accent" />, title: "Custom Solutions, Not Templates", description: "Your business is unique. We build tailored automations designed specifically for your workflow, ensuring seamless integration and maximum impact. We don't do one-size-fits-all." },
  { icon: <BarChart className="h-8 w-8 text-accent" />, title: "Revenue & Efficiency Focused", description: "We don't just build bots; we build business assets. Every system is designed with a clear ROI in mind, whether it's increasing sales, reducing operational costs, or saving you hundreds of hours." },
  { icon: <ShieldCheck className="h-8 w-8 text-accent" />, title: "Full Ownership & Transparency", description: "You own everything we build. We provide full documentation and training, so you're never locked into a service. You have complete control and transparency over your systems." },
  { icon: <Users className="h-8 w-8 text-accent" />, title: "Dedicated Partnership", description: "We work as an extension of your team. You get a dedicated project manager and direct access to our developers, ensuring clear communication and a smooth process from start to finish." },
  { icon: <TrendingUp className="h-8 w-8 text-accent" />, title: "Scalable & Future-Proof", description: "We build systems that grow with you. Our solutions are designed to be scalable and adaptable, ensuring they continue to deliver value as your business evolves and technology advances." },
];

const WhyUs = () => {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold h-24">
          <TypeAnimation
            sequence={['Your Partner in ']}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
          />
          <span className="text-accent">
            <TypeAnimation
              sequence={[800, 'Intelligent Automation', 2000, 'Sustainable Growth', 2000, 'Operational Excellence']}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choosing an automation partner is a big decision. Here’s why top-performing businesses choose Artificialyze to build their AI-powered future.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <Card key={reason.title} className="bg-secondary/20 border-secondary/40 text-center">
            <CardHeader className="items-center">
              {reason.icon}
              <CardTitle className="mt-4">{reason.title}</CardTitle>
              <CardDescription className="mt-2">{reason.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">Experience the Difference</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Ready to see how a true automation partner can change your business? Let's talk.</p>
        <Button asChild size="lg" className="mt-8">
          <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Schedule Your Free Consultation</a>
        </Button>
      </div>
    </div>
  );
};

export default WhyUs;