import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Artificialyze. All Rights Reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 md:ml-auto">
            <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">What We Do</Link>
            <Link to="/why-us" className="text-sm text-muted-foreground hover:text-foreground">Why Us</Link>
            <Link to="/book" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;