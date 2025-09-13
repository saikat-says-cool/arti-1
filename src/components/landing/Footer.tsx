import { Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 md:px-6 text-center text-gray-600">
        <div className="flex flex-col items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Artificialyze. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://x.com/saikat_scales" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Artificialyze on Twitter"
              className="hover:text-primary transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/the.ecomautomation.guy/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Artificialyze on Instagram"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p>
            To speak with the CEO directly, email:{" "}
            <a href="mailto:saikat@artificialyze.com" className="font-medium text-primary hover:underline">
              saikat@artificialyze.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;