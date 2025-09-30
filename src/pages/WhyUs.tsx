import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Wrench, BarChart, ShieldCheck, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet-async";

const reasons = [
  { icon: <Zap className="h-8 w-8 text-accent" />, title: "All-in-One Expertise", description: "We master the entire AI stack-platforms, APIs, and cloud infrastructure. You get the best tool for the job, every time." },
  { icon: <Wrench className="h-8 w-8 text-accent" />, title: "Custom-Built, Not Off-the-Shelf", description: "Your business is unique. We build tailored automations for your exact workflow, ensuring maximum impact. No one-size-fits-all." },
  { icon: <BarChart className="h-8 w-8 text-accent" />, title: "Focused on Your Bottom Line", description: "We don't just build bots; we build business assets. Every system is designed for clear ROI: more sales, lower costs, and hundreds of hours saved." },
  { icon: <ShieldCheck className="h-8 w-8 text-accent" />, title: "You Own Everything", description: "You get full ownership of everything we build, with complete documentation and training. No vendor lock-in, ever." },
  { icon: <Users className="h-8 w-8 text-accent" />, title: "A True Partnership", description: "We act as an extension of your team, with a dedicated project manager and direct developer access for clear, fast communication." },
  { icon: <TrendingUp className="h-8 w-8 text-accent" />, title: "Built to Scale", description: "We design future-proof systems that grow with your business, delivering value today and adapting for tomorrow." },
];

const WhyUs = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose Artificialyze - Your AI Automation Partner</title>
        <meta name="description" content="Discover why businesses choose us for our all-in-one expertise, custom solutions, and focus on revenue and efficiency. We are your dedicated partner in AI automation." />
      </Helmet>
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Partner in{' '}
            <span className="text-accent">
              <TypeAnimation
                sequence={['Intelligent Automation', 2000, 'Sustainable Growth', 2000, 'Real ROI']}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choosing an automation partner is a critical decision. Here’s why market leaders choose Artificialyze to build their AI-powered future.
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
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Ready to see how a true automation partner can transform your business? Let's talk.</p>
          <Button asChild size="lg" className="mt-8">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Schedule Your Free Strategy Call</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default WhyUs;