import { Zap, Wrench, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const reasons = [
  { icon: <Zap className="h-8 w-8 text-accent" />, title: "All-in-One Expertise", description: "We master every major automation platform (Make, Zapier, n8n, Voiceflow) so you get the best tool for the job, every time." },
  { icon: <Wrench className="h-8 w-8 text-accent" />, title: "Fully Custom Solutions", description: "Your business is unique. We build tailored automations designed specifically for your workflow, ensuring seamless integration and maximum impact." },
  { icon: <BarChart className="h-8 w-8 text-accent" />, title: "Revenue & Efficiency Focused", description: "We don't just build bots; we build business assets. Every system is designed to increase sales, reduce costs, or save you hundreds of hours." },
];

const HomeWhyUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Why Work With <span className="text-accent">Artificialyze?</span></h2>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3 text-left">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-6 rounded-lg">
              {reason.icon}
              <h3 className="mt-4 text-xl font-bold">{reason.title}</h3>
              <p className="mt-2 text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="mt-8">
          <Link to="/why-us">Learn More About Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default HomeWhyUs;