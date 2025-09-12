import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <a href="#" className="text-xl font-bold">
          Artificialyze
        </a>
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