import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ParticlesBackground from "../utils/ParticlesBackground";

const PageLayout = () => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <ParticlesBackground />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;