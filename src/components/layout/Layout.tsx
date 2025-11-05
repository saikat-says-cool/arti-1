"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalBackgroundPaths from "./GlobalBackgroundPaths";
import DomainRedirectBanner from "../DomainRedirectBanner";
import StickyCtaBar from "../StickyCtaBar"; // Import the new sticky CTA bar

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <GlobalBackgroundPaths />
      <Header />
      <DomainRedirectBanner />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
      <StickyCtaBar /> {/* Render the sticky CTA bar */}
    </div>
  );
};

export default Layout;