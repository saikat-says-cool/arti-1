"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Credibility = () => {
  const ratings = [
    {
      platform: "G2",
      rating: "4.9/5",
      reviews: "250+ reviews",
    },
    {
      platform: "GoodFirms",
      rating: "5.0/5",
      reviews: "180+ reviews",
    },
    {
      platform: "Clutch",
      rating: "4.8/5",
      reviews: "150+ reviews",
    },
    {
      platform: "TrustRadius",
      rating: "9.2/10",
      reviews: "120+ reviews",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 justify-items-center">
          {ratings.map((item, index) => (
            <div key={index} className="flex items-center gap-4 w-full justify-center sm:justify-start md:justify-center">
              <div className="text-2xl font-bold">{item.platform}</div>
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    // Changed to primary accent
                    <Star key={i} className={`h-5 w-5 ${i < 5 ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{item.rating} from {item.reviews}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Credibility;