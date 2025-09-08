import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-colors">
      <div className="text-2xl font-bold text-gray-800">
        Artificia<span className="text-primary">lyze</span>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
        <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
      </nav>
      <Button asChild className="transition-transform duration-200 hover:scale-105">
        <Link to="/booking">Book a Strategy Call</Link>
      </Button>
    </header>
  );
};