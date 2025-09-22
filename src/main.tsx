import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/utils/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <App />
    </ThemeProvider>
  </HelmetProvider>
);