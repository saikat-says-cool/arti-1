import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/features", label: "Features" },
  { to: "/who-we-help", label: "Who We Help" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/what-you-get", label: "What You Get" },
];

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="text-xl font-bold">
          Artificialyze
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col h-full p-4">
                <nav className="flex flex-col items-start gap-6 mt-8">
                  {navLinks.map((link) => (
                    <SheetClose key={link.to} asChild>
                      <Link to={link.to} className="text-lg font-medium hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button asChild className="w-full">
                    <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">
                      Schedule a Free Consultation
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;