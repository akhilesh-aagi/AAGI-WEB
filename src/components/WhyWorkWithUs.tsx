const WhyWorkWithUs = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed sm:bg-fixed"
        style={{
          backgroundImage: "url('/whybg1.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[60vh] sm:min-h-[70vh] py-8 sm:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto text-left">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              Why Choose AAGI
            </h1>

            {/* Sub-headline */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
              Digital Excellence Meets Enterprise Solutions
            </h2>

            {/* Description - Responsive text */}
            <div className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mb-6 sm:mb-8 px-4 sm:px-0">
              <div className="mb-2">
                Transform your business with cutting-edge SaaS solutions and
                digital innovation.
              </div>
              <div className="mb-1">
                Our expertise in financial technology, enterprise software, and
                digital transformation
              </div>
              <div>
                empowers organizations to achieve sustainable growth and
                operational excellence.
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10 px-4 sm:px-0">
              <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Explore Our Solutions
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
    </section>
  );
};

export default WhyWorkWithUs;
