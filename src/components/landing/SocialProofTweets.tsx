"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";

const tweets = [
  {
    name: "Jenna Thompson",
    handle: "@JennaT_AgencyCEO",
    avatar: "JT",
    image: "https://i.pravatar.cc/150?u=jenna",
    tweet: "Mind blown. We just replaced our entire SDR tech stack (and the associated headaches) with @Artificialyze. The AI personalization is scary good. Pipeline is already looking healthier after just 2 weeks."
  },
  {
    name: "Carlos Reyes",
    handle: "@CarlosR_Growth",
    avatar: "CR",
    image: "https://i.pravatar.cc/150?u=carlos",
    tweet: "The 3-day setup from @Artificialyze is legit. We went from zero to a fully functioning, AI-powered outreach engine over a long weekend. If you run a B2B agency, you need to see this."
  },
  {
    name: "David Chen",
    handle: "@DavidChenDigital",
    avatar: "DC",
    image: "https://i.pravatar.cc/150?u=david",
    tweet: "Finally, a 'lead-gen' service that isn't just scraped lists. With @Artificialyze, we own the system. The quality of conversations is night and day compared to our old approach. Highly recommend."
  }
];

const SocialProofTweets = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Real Talk: What Your Peers Are Saying on Twitter</h2>
          <p className="mt-4 text-lg text-muted-foreground">I want you to see the unfiltered feedback. These are real leaders, just like you, sharing their genuine experiences with Artificialyze.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tweets.map((tweet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-background/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex-row items-center gap-4 pb-4">
                  <Avatar>
                    <AvatarImage src={tweet.image} alt={tweet.name} />
                    <AvatarFallback>{tweet.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{tweet.name}</p>
                    <p className="text-sm text-muted-foreground">{tweet.handle}</p>
                  </div>
                  <FaTwitter className="ml-auto h-5 w-5 text-foreground" /> {/* Changed to text-foreground */}
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground">{tweet.tweet}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialProofTweets;