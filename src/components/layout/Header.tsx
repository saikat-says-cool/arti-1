"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">Artificialyze</span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <Button>Book a Consultation</Button>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;