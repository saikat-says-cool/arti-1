"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalBackgroundPaths from "./GlobalBackgroundPaths"; // Import the new global background component

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <GlobalBackgroundPaths /> {/* Render the global background here */}
      <Header />
      <main className="flex-grow relative z-10">{children}</main> {/* Ensure content is above background */}
      <Footer />
    </div>
  );
};

export default Layout;