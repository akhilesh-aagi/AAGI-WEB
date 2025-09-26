const WhyWorkWithUs = () => {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/whybg1.jpg')",
          // transform: "translateZ(0)",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[40vh] sm:min-h-[50vh] py-6 sm:py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Why Choose AAGI
            </h1>

            {/* Sub-headline */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6">
              Digital Excellence, Engineered for Impact
            </h2>

            




{/* Description */}
<div className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
              <p className="mb-3">
              Products thoughtfully crafted to enhance efficiency and drive
              growth.
              </p>
              <p>
              Leveraging SaaS, fintech, and enterprise knowledge to deliver
              excellence.
              </p>
            </div>






            {/* CTA Button */}
            <div className="mt-6">
              <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm">
                Explore Our Solutions
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-6 w-12 h-12 border-2 border-white/20 rounded-full"></div>
    </section>
  );
};

export default WhyWorkWithUs;
