import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-gray-800">
        Thynk<span className="text-primary">Next</span>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
        <a href="#about" className="text-gray-600 hover:text-primary">About</a>
      </nav>
      <Button>Book a Free Demo</Button>
    </header>
  );
};