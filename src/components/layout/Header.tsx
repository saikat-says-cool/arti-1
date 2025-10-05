"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const ctaLink = "https://cal.com/saikat-artificialyze/15min";
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Industries", href: "#industries" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#investment" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Artificialyze Logo" className="h-16 w-auto" />
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
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

        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button>Book a Consultation</Button>
            </a>
          </motion.div>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                   <img src="/logo.png" alt="Artificialyze Logo" className="h-16 w-auto" />
                   <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                   </SheetClose>
                </div>
                <nav className="flex flex-col items-center justify-center flex-grow gap-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-2xl font-medium text-foreground transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto">
                   <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button size="lg" className="w-full">Book a Consultation</Button>
                   </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;