import { Link } from "react-router-dom";
import { Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Artificialyze. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4">
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">What We Do</Link>
                <Link to="/why-us" className="text-sm text-muted-foreground hover:text-foreground">Why Us</Link>
                <a href="mailto:saikat@artificialyze.com" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
                <a href="https://x.com/saikat_scales" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/the.ecomautomation.guy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;