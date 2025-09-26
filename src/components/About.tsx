import { Star, Users, Clock, CheckCircle } from "lucide-react";
import CoreValues from "./CoreValues";
import WhyWorkWithUs from "./WhyWorkWithUs";
import Achievements from "./Achievements";

const About = () => {
  return (
    <>
      <section id="about" className="py-6 relative dark:bg-black">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top center pill */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-900 dark:text-white dark:ring-blue-700 text-sm">
              <Star className="w-4 h-4 mr-2" /> About AATVAAS GRANGER
              INTERNATIONALS
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="relative order-1 -ml-6 lg:-ml-12">
              <div className="absolute -top-4 -left-4 w-[90%] h-[90%] border-2 border-blue-600/80 rounded-sm dark:border-blue-400"></div>
              <img
                src="/AboutUs.jpg"
                alt="About AAGI"
                className="relative z-10 w-full aspect-[4/3] object-cover rounded-sm shadow-lg"
              />
            </div>

            <div className="h-full flex flex-col order-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-blue-900 mb-4 dark:text-white">
                Who We Are
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-tight mb-6 dark:text-gray-200 max-w-5xl">
              At AATVAAS GRANGER INTERNATIONALS (AAGI), we drive innovation by creating advanced SaaS, financial, and digital solutions. Each product begins with our own vision and is carefully refined to address real-world challenges, delivering practical, impactful, and valuable results that help our clients grow, succeed, and stay ahead in a competitive market.
</p>

{/* <div className="max-w-xl mx-auto">
  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 dark:text-gray-200">
  At AATVAAS GRANGER INTERNATIONALS (AAGI), we drive innovation by engineering
  state-of-the-art SaaS, financial, and digital solutions. Every product begins
  with our own vision, built from the ground up by our team of skilled engineers,
  and is thoughtfully refined to deliver practical, impactful outcomes for our
  clients. By focusing on originality, quality, and adaptability, we ensure our
  solutions not only meet current demands but also create long-term value for
  businesses navigating the digital future.
  </p>
</div> */}




              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 dark:bg-blue-900 dark:text-white">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base dark:text-white">
                    Experienced Team
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 dark:bg-blue-900 dark:text-white">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base dark:text-white">
                    Fast & Reliable Services
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Transparency in All Processes",
                  "Milestones Achieved",
                  "Solutions Implemented for Clients",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-200"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 dark:text-blue-400" />
                    <span className="text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bordered statement / callout - positioned below checklist */}
              <div className="mt-2">
                <div className="inline-block border-2 border-blue-600 rounded-sm px-6 py-3 text-center dark:border-blue-400">
                  <div className="text-sm sm:text-base font-bold uppercase text-gray-900 dark:text-white whitespace-nowrap">
                    Expertly crafted solutions, built to perform
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <div className="mt-12">
        <Achievements />
      </div>

      {/* Core Values Section */}
      <CoreValues />

      {/* Why Work With Us Parallax Section */}
      <WhyWorkWithUs />
    </>
  );
};

export default About;
