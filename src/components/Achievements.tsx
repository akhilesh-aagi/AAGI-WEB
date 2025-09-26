const Achievements = () => {
  return (
    <section className="py-12 bg-gray-900 relative overflow-hidden dark:bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/stats-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            What we have achieved so far
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Empowering businesses with innovative solutions and delivering
            exceptional results across various industries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              100%
            </div>
            <div className="text-gray-300 text-xs sm:text-sm">
              Transparency
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              25+
            </div>
            <div className="text-gray-300 text-xs sm:text-sm">
              Milestones
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              100+
            </div>
            <div className="text-gray-300 text-xs sm:text-sm">
              Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
