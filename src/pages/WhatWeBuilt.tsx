import PageLayout from "@/components/layout/PageLayout";
import FinalCTA from "@/components/landing/FinalCTA";

const WhatWeBuiltPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">What We've Built for Our Clients</h1>
          <p className="mt-4 text-lg text-gray-600">
            We built the following AI-powered demo for one of our clients,{" "}
            <a href="https://thenx.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
              Thenx
            </a>
            , the world's largest calisthenics community, founded by Chris Heria and Stefan Heria.
          </p>
          <p className="mt-2 text-gray-500">Interact with the demo below to see our AI in action.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-md h-[80vh] bg-white rounded-2xl shadow-2xl p-2 border">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <iframe
                src="https://convocore.ai/app/eu/render/xv5oHvEna9SfwDPJtUk0/iframe"
                className="w-full h-full"
                frameBorder="0"
                title="Thenx AI Chatbot Demo"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </PageLayout>
  );
};

export default WhatWeBuiltPage;