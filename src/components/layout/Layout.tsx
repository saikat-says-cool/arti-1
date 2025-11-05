"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalBackgroundPaths from "./GlobalBackgroundPaths";
import DomainRedirectBanner from "../DomainRedirectBanner"; // Import the new banner component

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <GlobalBackgroundPaths />
      <Header />
      <DomainRedirectBanner /> {/* Render the banner right after the header */}
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;