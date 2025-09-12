import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;