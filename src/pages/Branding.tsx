import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Wrench, BarChart } from "lucide-react";
import { Helmet } from "react-helmet-async";

const colors = [
  { name: "Primary/Accent", hex: "#0AF2A5", description: "For calls-to-action, highlights, and key elements.", bg: "bg-[#0AF2A5]", text: "text-background" },
  { name: "Background", hex: "#111928", description: "The primary dark background for the entire site.", bg: "bg-[#111928]", text: "text-foreground" },
  { name: "Foreground", hex: "#F9FAFB", description: "For all primary body text and headings.", bg: "bg-[#F9FAFB]", text: "text-background" },
  { name: "Secondary", hex: "#1C2536", description: "For section backgrounds and cards to create depth.", bg: "bg-[#1C2536]", text: "text-foreground" },
  { name: "Muted/Border", hex: "#415A77", description: "For secondary text, borders, and subtle details.", bg: "bg-[#415A77]", text: "text-foreground" },
];

const Branding = () => {
  return (
    <>
      <Helmet>
        <title>Branding Kit - Artificialyze</title>
        <meta name="description" content="The official branding guidelines for Artificialyze, including logo, color palette, typography, and tone of voice." />
      </Helmet>
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Artificialyze Branding Kit</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your official guide to our brand identity. These guidelines help us create a consistent and recognizable brand experience.
          </p>
        </div>

        <div className="mt-16 grid gap-12">
          {/* Logo Section */}
          <Card className="bg-secondary/20 border-secondary/40">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Logo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-muted/30 p-8 rounded-lg">
                <img src="/artificialyze-logo.svg" alt="Artificialyze Logo" className="h-20" />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground">Our logo is the primary identifier of our brand. It should be used consistently across all materials.</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Maintain a clear space around the logo, free of other elements.</li>
                  <li>Do not stretch, distort, or alter the logo's colors.</li>
                  <li>Use the SVG format for scalability and clarity.</li>
                </ul>
                <a href="/artificialyze-logo.svg" download className="inline-block mt-4 text-accent font-semibold underline-offset-4 hover:underline">
                  Download Logo (SVG)
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Color Palette Section */}
          <Card className="bg-secondary/20 border-secondary/40">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Color Palette</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              {colors.map(color => (
                <div key={color.name}>
                  <div className={`h-24 w-full rounded-lg ${color.bg} flex items-center justify-center`}>
                    <span className={`font-bold ${color.text}`}>{color.hex}</span>
                  </div>
                  <h3 className="mt-2 font-bold">{color.name}</h3>
                  <p className="text-sm text-muted-foreground">{color.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Typography Section */}
          <Card className="bg-secondary/20 border-secondary/40">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Typography</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">Our brand uses the 'Comfortaa' font family for its modern, clean, and approachable feel.</p>
              <div className="space-y-4">
                <h1 className="text-5xl font-bold">Heading 1: Comfortaa Bold</h1>
                <h2 className="text-4xl font-bold">Heading 2: Comfortaa Bold</h2>
                <h3 className="text-2xl font-bold">Heading 3: Comfortaa Bold</h3>
                <p className="text-lg text-muted-foreground">Body Text: This is the standard paragraph text. It should be clear, readable, and used for most long-form content.</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Tone of Voice & Iconography */}
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-secondary/20 border-secondary/40">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Tone of Voice</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                  <li><span className="font-bold text-foreground">Expert but Accessible:</span> We are knowledgeable and confident, but we explain complex topics in a simple, understandable way.</li>
                  <li><span className="font-bold text-foreground">Innovative & Forward-Thinking:</span> We are at the forefront of AI technology and our language reflects that.</li>
                  <li><span className="font-bold text-foreground">Results-Driven:</span> We focus on the tangible benefits for our clients, like saving time, reducing costs, and growing revenue.</li>
                  <li><span className="font-bold text-foreground">Professional & Trustworthy:</span> We are a reliable partner for our clients' growth.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-secondary/20 border-secondary/40">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Iconography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">We use the <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="underline">Lucide</a> icon set for its clean, modern, and consistent style.</p>
                <div className="flex gap-8 text-accent">
                  <Zap size={48} />
                  <Wrench size={48} />
                  <BarChart size={48} />
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
};

export default Branding;