import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AIDemo = () => {
  const pageUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>Live AI Demo | Artificialyze</title>
        <meta name="description" content="Interact with our AI Appointment Engine™ live. See how it qualifies leads and books meetings 24/7. Get a custom AI built for your agency by booking a free demo." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Live AI Demo | Artificialyze" />
        <meta property="og:description" content="Interact with our AI Appointment Engine™ live and see how it can revolutionize your agency." />
        <meta property="twitter:title" content="Live AI Demo | Artificialyze" />
        <meta property="twitter:description" content="Interact with our AI Appointment Engine™ live and see how it can revolutionize your agency." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="p-4 sticky top-0 bg-white/80 backdrop-blur-sm z-10 border-b">
            <Button asChild variant="ghost">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
        </header>
        <main className="flex-grow flex flex-col items-center p-4 md:py-12 md:px-8 text-center">
            <div className="w-full max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                    Experience Our AI in Action
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    This is a live demo of our AI Appointment Engine™. Interact with it below.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-lg border mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-2">Want One Custom-Built For You?</h2>
                    <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
                        If you like what you see, book a free strategy call. Our CEO, Saikat, will personally design an AI appointment setter exclusively for your real estate agency.
                    </p>
                    <Button asChild size="lg" className="transition-transform duration-200 hover:scale-105">
                        <Link to="/booking">Book My Free Strategy Call</Link>
                    </Button>
                </div>
            </div>
            <div className="w-full max-w-md h-[85vh] rounded-xl shadow-2xl overflow-hidden border-4 border-gray-800 bg-gray-800 mt-8">
                <iframe
                    src="https://convocore.ai/app/eu/render/1NBpChc5vMmn9unS6hfM/iframe"
                    style={{ width: "100%", height: "100%" }}
                    frameBorder="0">
                </iframe>
            </div>
        </main>
      </div>
    </>
  );
};

export default AIDemo;