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
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {ratings.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-2xl font-bold">{item.platform}</div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
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