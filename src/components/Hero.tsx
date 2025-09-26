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
            backgroundImage: "url('/HeroBack1.jpg')",
          }}
        ></div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col items-center justify-center text-center min-h-[80vh] md:min-h-screen">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-white/90 backdrop-blur-sm ring-1 ring-blue-400/30 shadow-sm mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold">
                Welcome to AAGI
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-white tracking-wide leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <span className="block font-light tracking-wider">INNOVATE. EMPOWER. DELIVER.</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-white/85 max-w-3xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            From concept to customization, we build solutions that empower progress, drive efficiency, and create lasting value.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-900 hover:bg-blue-700 text-white px-8 py-4 shadow-lg shadow-blue-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 text-white/90 hover:text-white rounded-full ring-1 ring-white/30 hover:ring-white/60 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll animated arrow at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
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
