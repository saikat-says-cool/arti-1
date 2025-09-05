import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Booking = () => {
  return (
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
            Book Your Free Demo
          </h1>
          <p className="text-lg text-gray-600">
            Choose a time that works for you. I look forward to speaking with you!
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
  );
};

export default Booking;