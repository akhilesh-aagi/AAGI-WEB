import { Star, Users, Clock, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import CoreValues from "./CoreValues";
import WhyWorkWithUs from "./WhyWorkWithUs";

const About = () => {
  const sectionRef = useScrollAnimation();

  return (
    <>
      <section id="about" className="section-padding relative" ref={sectionRef}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top center pill */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-900 dark:text-white dark:ring-blue-700">
              <Star className="w-5 h-5 mr-3" /> About AATVAAS GRANGER
              INTERNATIONALS
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Image with decorative frame */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-[90%] h-[90%] border-4 border-blue-600/80 rounded-sm"></div>
              <img
                src="/AboutUs.jpg"
                alt="About AAGI"
                className="relative z-10 w-full aspect-[4/3] object-cover rounded-sm shadow-xl"
              />
            </div>

            {/* Right: Content following reference design */}
            <div className="h-full flex flex-col">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-blue-900 mb-6 font-sans dark:text-white">
                Who We Are
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-sans dark:text-gray-200">
                At AATVAAS GRANGER INTERNATIONALS, we drive innovation by
                creating state-of-the-art SaaS, financial, and digital
                solutions. Our products begin with our own vision and are
                thoughtfully refined to deliver practical, impactful solutions
                for our clients.
              </p>

              {/* Feature blocks - horizontal layout */}
              <div className="flex gap-8 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 dark:bg-blue-900 dark:text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-gray-900 text-base sm:text-lg font-sans dark:text-white">
                    Experienced Team
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 dark:bg-blue-900 dark:text-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-gray-900 text-base sm:text-lg font-sans dark:text-white">
                    Fast & Reliable Services
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Transparency in All Processes",
                  "Milestones Achieved",
                  "Solutions Implemented for Clients",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 text-gray-700 dark:text-gray-200"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 dark:text-blue-400" />
                    <span className="text-base sm:text-lg font-sans">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bordered statement / callout - centered on page */}
          <div className="text-center mt-12">
            <div className="inline-block border-4 border-blue-600 rounded-sm p-4 sm:p-6 text-center max-w-2xl dark:border-blue-400">
              <div className="text-base sm:text-lg font-bold uppercase text-gray-900 font-sans dark:text-white">
                Expertly crafted solutions, built to perform
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we have achieved so far section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/stats-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              What we have achieved so far
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
              Empowering businesses with innovative solutions and delivering
              exceptional results across various industries.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Transparency
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                25+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Milestones
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                100+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValues />

      {/* Why Work With Us Parallax Section */}
      <WhyWorkWithUs />
    </>
  );
};

export default About;
