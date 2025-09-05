export const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              👉 Agencies Are Already Seeing the Impact
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              One of our demos showed a real estate agent cut response time from 3 hours → 1 minute.
            </p>
            <p className="text-lg text-gray-600">
              Imagine the impact that speed has on lead conversion.
            </p>
          </div>
          <div>
            <img src="/placeholder.svg" alt="Demo chat to appointment" className="rounded-lg shadow-xl border" />
          </div>
        </div>
      </div>
    </section>
  );
};