import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div className="container mx-auto py-16 md:py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Ready to <span className="text-accent">Automate?</span></h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Stop wasting time on manual work. Let AI do the heavy lifting while you focus on what you do best: growing your business. Schedule a free, no-obligation consultation to discover how much time and money you could be saving.
        </p>
        <Button size="lg" className="mt-8">
          {/* This is where a Calendly link would go */}
          <a href="#">Book a Free Consultation</a>
        </Button>
      </div>
    </div>
  );
};

export default Book;