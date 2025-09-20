import { Bot, CalendarDays, Target, Send, Phone, Users, BrainCircuit } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet-async";

const services = [
  { icon: <Bot className="h-8 w-8 text-accent" />, title: "AI-Powered Customer Support Agents", description: "Deploy intelligent, 24/7 AI agents that resolve customer queries instantly across chat, email, and social media, reducing your support tickets by up to 80%." },
  { icon: <CalendarDays className="h-8 w-8 text-accent" />, title: "AI Appointment Setters", description: "Automate your entire booking process. Our AI qualifies leads and schedules them directly into your calendar, ensuring you only speak to high-intent prospects." },
  { icon: <Target className="h-8 w-8 text-accent" />, title: "AI Lead Generation Systems", description: "Never worry about an empty pipeline again. We build systems that identify, engage, and nurture potential clients, delivering a consistent stream of qualified leads." },
  { icon: <Send className="h-8 w-8 text-accent" />, title: "AI Mass Outreach Infrastructure", description: "Scale your outreach campaigns across email, LinkedIn, and other channels with hyper-personalized messaging that gets responses, all managed by AI." },
  { icon: <Phone className="h-8 w-8 text-accent" />, title: "AI Voice Callers", description: "Deploy intelligent voice agents for appointment reminders, lead qualification, customer follow-ups, and surveys, freeing up your team for high-value conversations." },
  { icon: <Users className="h-8 w-8 text-accent" />, title: "AI Social Media Managers", description: "Automate content scheduling, comment moderation, and community engagement to grow your online presence and build a loyal following without the manual effort." },
  { icon: <BrainCircuit className="h-8 w-8 text-accent" />, title: "Custom AI Workflow Automation", description: "Have a unique challenge? We analyze your internal processes and build custom AI-powered workflows to automate any repetitive task, from data entry to complex reporting." },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation Services - Artificialyze</title>
        <meta name="description" content="Explore our done-for-you AI solutions, including AI customer support, appointment setting, lead generation, and custom workflow automation." />
      </Helmet>
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold h-24">
            <TypeAnimation
              sequence={['AI-Powered Automation, ']}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
            />
            <span className="text-accent">
              <TypeAnimation
                sequence={[1200, 'Done For You', 2000, 'For Your Business', 2000, 'To Drive Growth']}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We help businesses replace manual, repetitive work with AI-driven systems that work 24/7. Whether you’re looking to close more sales, support your customers faster, or scale outreach, we’ve got the tech to make it happen.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="bg-secondary/20 border-secondary/40 flex flex-col">
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription className="mt-2 flex-grow">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
         <div className="text-center mt-16">
          <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Let's discuss how our AI solutions can be tailored to your specific needs.</p>
          <Button asChild size="lg" className="mt-8">
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Strategy Call</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Services;