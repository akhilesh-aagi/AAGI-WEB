const Endsection = () => {
  return (
    <section className="relative min-h-[50vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/corevalue/Integrity.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[50vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto text-left">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Let's Redefine What's Possible
            </h1>

            {/* Description */}
            <div className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
              <p className="mb-3">
                Growing a business is hard. Scaling it shouldn't be. Our
                platform helps teams collaborate, automate, and innovate without
                limits.
              </p>
              <p>
                Whether you're launching your first product or optimizing global
                operations, we give you the speed and flexibility to turn big
                ideas into real impact.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-sm">
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
    </section>
  );
};

export default Endsection;
