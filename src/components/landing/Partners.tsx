import { TypeAnimation } from "react-type-animation";

const partners = ["Meta", "Google", "xAI", "Anthropic", "Supabase"];

const Partners = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold h-12">
          <TypeAnimation
            sequence={['Powered by ']}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
          />
          <span className="text-accent">
            <TypeAnimation
              sequence={[600, 'World-Class Technology', 2000, 'Industry-Leading AI', 2000, 'The Best Tools']}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We partner with the giants of the AI and cloud industry to build robust, scalable, and intelligent solutions for your business.
        </p>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {partners.map((partner) => (
            <div key={partner} className="text-3xl font-bold text-muted-foreground/60 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;