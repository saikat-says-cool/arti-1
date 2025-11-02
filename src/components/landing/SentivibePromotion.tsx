"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, PlayCircle, BarChart2, Search, Users } from "lucide-react";

const SentivibePromotion = () => {
  const sentivibeLink = "https://sentivibe.online";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Introducing SentiVibe: Your Audience, Understood.</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Transform unstructured YouTube comments into a living, interactive intelligence hub. Get dynamic, conversational AI insights, automate SEO-optimized content, and ensure your audience understanding is always fresh and relevant.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
          <a href={sentivibeLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Visit SentiVibe Online <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          <Card className="bg-card/50 p-6 shadow-lg flex flex-col items-center text-center">
            <CardHeader className="pb-4">
              <PlayCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl font-bold text-foreground">Analyze a Video</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-base">
                Don't just get a report, start a conversation. Get dynamic AI insights.
              </p>
              <Button variant="outline" className="mt-6" asChild>
                <a href={`${sentivibeLink}/analyze`} target="_blank" rel="noopener noreferrer">
                  Start Analyzing
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Requires 50+ comments. Analysis may take up to 30 seconds.</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 p-6 shadow-lg flex flex-col items-center text-center">
            <CardHeader className="pb-4">
              <BarChart2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl font-bold text-foreground">Compare Videos</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-base">
                See the full picture by comparing sentiment across multiple videos.
              </p>
              <Button variant="outline" className="mt-6" asChild>
                <a href={`${sentivibeLink}/compare`} target="_blank" rel="noopener noreferrer">
                  Start Comparing
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Each video requires 50+ comments. Analysis may take up to 30 seconds per video. Note: Reliable for up to 3 videos simultaneously.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card/50 p-6 shadow-lg flex flex-col items-center text-center">
            <CardHeader className="pb-4">
              <Search className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-xl font-bold text-foreground">Explore the Library</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-base">
                Turn Audience Insight into SEO Power. Every analysis becomes a new asset.
              </p>
              <Button variant="link" className="mt-4" asChild>
                <a href={`${sentivibeLink}/library`} target="_blank" rel="noopener noreferrer">
                  View Analysis Library
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-card/50 p-6 shadow-lg flex flex-col items-center text-center">
            <CardHeader className="pb-4">
              <Users className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-xl font-bold text-foreground">Browse Comparisons</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-base">
                Browse and review past comparative video analyses.
              </p>
              <Button variant="link" className="mt-4" asChild>
                <a href={`${sentivibeLink}/comparison-library`} target="_blank" rel="noopener noreferrer">
                  View Comparison Library
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-8 bg-background/50 rounded-lg border shadow-lg max-w-3xl mx-auto">
          <p className="text-xl font-bold text-foreground">
            Get real value, right now, for free. Experience the full power of our AI, no credit card required.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6">
            <a href={sentivibeLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Try SentiVibe Free →
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="mt-12 text-sm text-muted-foreground space-y-1">
          <p>© 2025 SentiVibe. All rights reserved.</p>
          <p>SentiVibe: Your Audience, Understood. Analyses generated by AI based on public YouTube comments.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href={`${sentivibeLink}/terms`} target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of Service</a>
            <a href={`${sentivibeLink}/privacy`} target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Notice</a>
            <a href={`${sentivibeLink}/refund`} target="_blank" rel="noopener noreferrer" className="hover:underline">Refund Policy</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SentivibePromotion;