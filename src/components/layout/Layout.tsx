import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ParticlesBackground from "../utils/ParticlesBackground";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <ParticlesBackground />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};