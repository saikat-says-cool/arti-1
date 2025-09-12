import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="text-xl font-bold">
          Artificialyze
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/who-we-help" className="text-sm font-medium hover:text-primary transition-colors">
            Who We Help
          </Link>
        </nav>
        <Button asChild>
          <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">
            Schedule a Free Consultation
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;