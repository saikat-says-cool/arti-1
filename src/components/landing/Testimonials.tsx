"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    title: "Founder, Pixel & Hammer Creative",
    avatar: "SJ",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    quote: "We were stuck in the classic agency feast-or-famine cycle. Artificialyze didn't just get us leads; it built us a predictable pipeline. For the first time, I can actually forecast our growth. The system runs in the background, and we just focus on closing the high-quality meetings that land on our calendar."
  },
  {
    name: "Marcus Holloway",
    title: "Managing Director, ScaleUp Digital",
    avatar: "MH",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    quote: "I was hesitant to hire another SDR. The cost, the training, the inevitable burnout... it's a huge drain. Artificialyze replaced that entire function for less than half the cost of a junior hire. The AI personalization is leagues beyond what a human could do at scale. It's been a total game-changer for our operational efficiency."
  },
  {
    name: "Chloe Rivera",
    title: "Partner, BrandTide Marketing",
    avatar: "CR",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    quote: "We've tried other lead gen services, and it was always a flood of low-quality, poorly-targeted contacts. The difference with Artificialyze is the quality. The AI understands context, so the outreach feels genuinely personal. We're not just getting more meetings; we're getting the *right* meetings with our ideal clients."
  }
];

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">What Leaders Like You Are Saying About Their Growth</h2>
          <p className="mt-4 text-lg text-muted-foreground">Don't just take my word for it. Hear directly from agency leaders who've transformed their businesses with Artificialyze. Their success is a blueprint for *your* potential.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4 pt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;