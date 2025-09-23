const WhyWorkWithUs = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/whybg1.jpg')",
          transform: "translateZ(0)",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[60vh] sm:min-h-[70vh] py-8 sm:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Why Choose AAGI
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8">
              Digital Excellence, Engineered for Impact
            </h2>

            {/* Description - Not equally centered */}
            <div className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl mx-auto mb-8">
              <div className="mb-2">
                Products thoughtfully crafted to enhance efficiency and drive
                growth.
              </div>
              <div>
                Leveraging SaaS, fintech, and enterprise knowledge to deliver
                excellence.
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Explore Our Solutions
                <svg
                  className="w-5 h-5 ml-2"
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
      <div className="absolute top-1/2 right-8 w-16 h-16 border-2 border-white/20 rounded-full"></div>
    </section>
  );
};

export default WhyWorkWithUs;
