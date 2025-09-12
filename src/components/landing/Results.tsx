const results = [
    { value: "70-90%", label: "First Contact Resolution" },
    { value: "10-25%", label: "Conversion Rate Improvement" },
    { value: "5-15%", label: "Increase in Average Order Value" },
    { value: "<10s", label: "Average Response Time" },
];

const Results = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Results You Can Measure</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our AI assistants aren't just smart—they deliver tangible improvements to your most important metrics.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {results.map((result) => (
            <div key={result.label} className="bg-gray-100 p-6 rounded-lg">
              <p className="text-4xl md:text-5xl font-extrabold text-primary">{result.value}</p>
              <p className="mt-2 text-gray-600 font-medium">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;