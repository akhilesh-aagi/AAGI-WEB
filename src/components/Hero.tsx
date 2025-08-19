import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[80vh] md:min-h-screen overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/HeroBack.jpg')",
          }}
        ></div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-40 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-white/90 backdrop-blur-sm ring-1 ring-blue-400/30 shadow-sm mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold">Welcome to AAGI</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              <span className="block">INNOVATE. EMPOWER. DELIVER.</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-white/85 max-w-3xl">
              Empowering enterprises with innovative digital solutions for seamless operations and sustainable growth
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-900 hover:bg-blue-700 text-white px-8 py-4 shadow-lg shadow-blue-900/30 transition-colors"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 text-white/90 hover:text-white rounded-full ring-1 ring-white/30 hover:ring-white/60 px-6 py-3 backdrop-blur-sm transition"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="Hero Schedule Demo"
      />
    </>
  );
};

export default Hero;
