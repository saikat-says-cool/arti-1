import { Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">Artificialyze</h3>
          <p>AI Growth Systems for Real Estate</p>
        </div>
        <div className="mb-6">
          <p>
            Contact the CEO (Saikat Dutta Chowdhury) by email directly:{" "}
            <a href="mailto:saikat@thynknext.in" className="text-primary hover:underline">
              saikat@thynknext.in
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://x.com/saikat_scales" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/saikat.scales/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/@saikat-scales_withAI" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Artificialyze. All rights reserved.</p>
      </div>
    </footer>
  );
};