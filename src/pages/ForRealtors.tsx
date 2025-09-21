import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, Bot, CalendarCheck, LayoutDashboard, BarChart4, Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";

const howItWorks = [
  {
    icon: <Bot className="h-8 w-8 text-accent" />,
    title: "Cross-Channel Lead Capture & Qualification",
    description: "The AI engine captures leads across your website, Instagram, Facebook, and phone. Each lead is automatically qualified based on budget, timeline, and status, then stored in a central CRM."
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-accent" />,
    title: "Automated Booking & Calendar Integration",
    description: "Qualified leads are seamlessly booked into your Cal.com or Calendly. The system sends automated confirmations and reminders to reduce no-shows and keep your schedule full."
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-accent" />,
    title: "Centralized Dashboard & Custom Analytics",
    description: "Get a detailed dashboard with all key metrics: new leads, qualified leads, booked consultations, and show rates. We can add custom metrics to track your campaign performance."
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-accent" />,
    title: "Ongoing Optimization & Support",
    description: "We continuously fine-tune AI conversation flows and optimize qualification scripts. Monthly performance reviews ensure the system evolves to meet your needs and maximize ROI."
  }
];

const plans = [
  {
    name: "Core",
    setup: 299,
    price: 499,
    features: ["Basic Lead Capture", "Automated Booking", "CRM Dashboard", "Standard Metrics", "Monthly AI Optimization"]
  },
  {
    name: "Growth",
    setup: 299,
    price: 800,
    recommended: true,
    features: ["Full Calendar Integration", "Advanced Qualification", "One Custom Metric", "Higher Message Throughput", "Monthly Optimization"]
  },
  {
    name: "Premium",
    setup: 499,
    price: 1499,
    features: ["Everything in Growth", "Ads-to-Bot Funnel", "Multi-Channel Voice Handling", "Weekly Optimization", "Priority Support"]
  }
];

const whyChoose = [
  { title: "Direct Revenue Impact", description: "Even a single extra consultation booked by the AI can cover the entire monthly fee." },
  { title: "Significant Time Savings", description: "Spend less time chasing and qualifying leads and more time closing deals." },
  { title: "Predictable Sales Pipeline", description: "Every lead is captured, qualified, and tracked in a single, organized system." },
  { title: "Customizable & Scalable", description: "The system is tailored to your specific market, workflow, and business goals." }
];

const testimonials = [
  {
    quote: "Before Artificialyze, my leads were a mess. Now, I wake up to a calendar full of qualified appointments. I'm spending my time closing deals, not chasing down leads. It's been a complete game-changer.",
    name: "Jessica M.",
    title: "Top Producer, Austin, TX"
  },
  {
    quote: "I was skeptical, but the AI engine booked two high-value clients in the first month. It literally paid for itself. I'm no longer losing leads that come in after hours. This is the future of real estate.",
    name: "David Chen",
    title: "Agent, Keller Williams"
  },
  {
    quote: "My clients are impressed with the instant responses and seamless booking. It makes my whole operation look more professional and efficient. The dashboard gives me a clear view of my pipeline I never had before.",
    name: "Emily R.",
    title: "Solo Agent, Miami, FL"
  }
];

const ForRealtors = () => {
  return (
    <>
      <Helmet>
        <title>AI Appointment Engine for Realtors - Artificialyze</title>
        <meta name="description" content="Helping Real Estate Agents Capture, Qualify, and Book More Consultations Automatically. Turn leads into booked consultations and closed deals." />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter h-48 md:h-40">
          <TypeAnimation
            sequence={['AI Appointment Engine for ']}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
          />
          <span className="text-accent">
            <TypeAnimation
              sequence={[1500, 'Realtors', 2000, 'Real Estate Agents']}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Helping Real Estate Agents Capture, Qualify, and Book More Consultations Automatically. Focus on selling while our AI manages the admin.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Demo</a>
        </Button>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A powerful AI-driven solution designed to turn leads into booked consultations and closed deals without adding extra hours to your day.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
            {howItWorks.map((item) => (
              <Card key={item.title} className="bg-background/50 border-secondary/40">
                <CardHeader>
                  {item.icon}
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your Plan</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Simple, transparent pricing to fit your business needs.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative flex flex-col ${plan.recommended ? 'border-accent' : 'border-secondary/40'}`}>
                {plan.recommended && <Badge className="absolute -top-3 right-4">Recommended</Badge>}
                <CardHeader className="text-left">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>/month
                    <span className="block text-sm">+ ${plan.setup} setup fee</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between text-left">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={plan.recommended ? 'default' : 'outline'} className="w-full">
                    <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">
            <b>Optional Add-On:</b> Performance bonus of $50 per qualified consultation beyond your plan's included cap.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Why Agents Choose Artificialyze</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
            {whyChoose.map((reason) => (
              <div key={reason.title} className="p-6 rounded-lg">
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="mt-2 text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Agents Are Saying</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Real results from agents who have transformed their business with our AI.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3 text-left">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-secondary/20 border-secondary/40">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Close More Deals?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let our AI assistant deliver more qualified consultations, reduce no-shows, and empower you to close more deals — all while minimizing administrative effort.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book Your Free Consultation</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ForRealtors;