import { Zap, Wrench, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const reasons = [
  { icon: <Zap className="h-8 w-8 text-accent" />, title: "Total AI Expertise", description: "We master the entire AI stack, from leading platforms to custom code, ensuring you get the perfect solution, not just the convenient one." },
  { icon: <Wrench className="h-8 w-8 text-accent" />, title: "Custom-Built for You", description: "No templates. We design bespoke automations that fit your exact workflow for maximum impact and seamless integration." },
  { icon: <BarChart className="h-8 w-8 text-accent" />, title: "Focused on Your Bottom Line", description: "We don't just build tech; we build revenue engines. Every system is designed to increase sales, cut costs, and save you time." },
];

const HomeWhyUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The Partner You Need for{' '}
          <span className="text-accent">
            <TypeAnimation
              sequence={['Real Results', 2000, 'Smarter Growth', 2000, 'Effortless Scale']}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h2>
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