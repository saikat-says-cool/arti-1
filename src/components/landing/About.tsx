import { Twitter, Instagram, Youtube } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            👉 Built by Saikat @ ThynkNext
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            I’m Saikat, founder of ThynkNext. I help real estate agencies scale with AI-powered automation - so you can focus on closing deals, not chasing leads.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Follow my journey on:
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://x.com/saikat_scales" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/saikat.scales/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/@saikat-scales_withAI" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600">
              <Youtube className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};