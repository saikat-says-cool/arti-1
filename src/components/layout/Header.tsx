"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Industries", href: "#industries" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Results", href: "#case-results" },
    { name: "FAQ", href: "#faq" },
  ];

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

        {!isMobile && (
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}

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