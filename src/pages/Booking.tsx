import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Booking = () => {
  const pageUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>Book a Free AI Strategy Call | ThynkNext</title>
        <meta name="description" content="Schedule your free strategy call. Our CEO, Saikat, will personally design a custom AI Appointment Engine for your real estate agency." />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Book a Free AI Strategy Call | ThynkNext" />
        <meta property="og:description" content="Schedule your free strategy call and get a custom AI Appointment Engine designed for your agency." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content="Book a Free AI Strategy Call | ThynkNext" />
        <meta property="twitter:description" content="Schedule your free strategy call and get a custom AI Appointment Engine designed for your agency." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <Button asChild variant="ghost" className="mb-4 self-start">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
              Book Your Free AI Strategy Call
            </h1>
            <p className="text-lg text-gray-600">
              On this call, our CEO Saikat will personally design a custom AI Appointment Engine™ for your real estate agency. Choose a time that works for you.
            </p>
          </div>
          <div className="rounded-lg shadow-xl border overflow-hidden">
            <iframe
              src="https://cal.com/saikat-dutta-chowdhury-udgx5a/15min"
              style={{ width: "100%", height: "700px" }}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;