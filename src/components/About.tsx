import { useState } from "react";
import {
  Target,
  Lightbulb,
  Rocket,
  Zap,
  Shield,
  Heart,
  Star,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Server,
  BarChart as ChartBar,
  Clock,
  AlertTriangle,
  BellRing,
  Brain,
  Cloud,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ContactFormModal from "./ContactFormModal";

const About = () => {
  const sectionRef = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[128px] opacity-30 will-change-transform"></div>
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[96px] opacity-30 will-change-transform"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <div className="text-center mb-20 sm:mb-32 scroll-trigger">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-600 dark:text-blue-400 font-semibold mb-8">
            <Star className="w-5 h-5 mr-2" />
            About AATVAAS GRANGER INTERNATIONALS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-8">
            Who We Are
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            At AATVAAS GRANGER INTERNATIONALS, we are dedicated to driving
            innovation and delivering exceptional solutions across various
            industries. Our mission is to empower businesses and individuals
            with state-of-the-art SaaS, financial, and digital transformation
            tools.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-32">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover-lift scroll-trigger">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Transparency in All Processes
            </div>
          </div>
          <div
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover-lift scroll-trigger"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
              25+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Milestones Achieved
            </div>
          </div>
          <div
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover-lift scroll-trigger"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
              100+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Solutions Implemented for Clients
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16 scroll-trigger">
            <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-2xl sm:rounded-3xl gradient-bg mb-6">
              <Lightbulb className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                ),
                title: "Innovation",
                description:
                  "Pushing the boundaries of technology with forward-thinking solutions",
                bgColor: "bg-blue-100 dark:bg-blue-900/30",
              },
              {
                icon: (
                  <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                ),
                title: "Reliability",
                description:
                  "Building dependable products that ensure peace of mind",
                bgColor: "bg-purple-100 dark:bg-purple-900/30",
              },
              {
                icon: (
                  <Heart className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                ),
                title: "Customer Success",
                description:
                  "Prioritizing customer needs with the right tools and support",
                bgColor: "bg-pink-100 dark:bg-pink-900/30",
              },
              {
                icon: (
                  <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                ),
                title: "Integrity",
                description:
                  "Operating with transparency and honesty in all relationships",
                bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
              },
              {
                icon: (
                  <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                ),
                title: "Global Impact",
                description:
                  "Creating solutions that make a difference worldwide",
                bgColor: "bg-green-100 dark:bg-green-900/30",
              },
              {
                icon: (
                  <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                ),
                title: "Excellence",
                description:
                  "Maintaining the highest standards in everything we do",
                bgColor: "bg-orange-100 dark:bg-orange-900/30",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift scroll-trigger"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${value.bgColor} rounded-xl sm:rounded-2xl p-3 sm:p-4 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 transform-gpu transition-transform duration-300 hover:scale-110`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="glass-card rounded-[2rem] overflow-hidden scroll-trigger will-change-transform">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Vision Content */}
            <div className="p-8 sm:p-12 md:p-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-semibold mb-8">
                <Rocket className="w-5 h-5 mr-2" />
                Our Vision
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-8">
                Transforming Bus Operations
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Streamlined Fleet Management",
                  "Trip Progress Tracking",
                  "Comprehensive Analytics Dashboard",
                  "Robust Data Security Measures",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="magnetic-button text-white px-8 py-4 rounded-xl flex items-center gap-2 group"
              >
                Join Our Journey
                <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right side - Transformation Animation */}
            <div className="relative h-full p-8 sm:p-12 md:p-16 hidden md:block">
              <div className="relative aspect-square">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-xl">
                    <Brain className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  {/* Connecting Lines */}
                  <div className="absolute inset-0 -m-16">
                    <svg
                      className="w-full h-full animate-spin-slow"
                      viewBox="0 0 200 200"
                    >
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-200 dark:text-gray-700"
                        strokeDasharray="4 4"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-200 dark:text-gray-700"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Transformation Elements */}
                {[
                  {
                    icon: <AlertTriangle className="w-6 h-6" />,
                    newIcon: <ChartBar className="w-6 h-6" />,
                    color: "from-red-400 to-red-600",
                    newColor: "from-green-400 to-green-600",
                    position: "top-0 left-1/2 -translate-x-1/2",
                    label: "Trip Delays",
                    newLabel: "Optimized Routes",
                    stat: "98%",
                    statLabel: "On-time Performance",
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    newIcon: <BellRing className="w-6 h-6" />,
                    color: "from-orange-400 to-orange-600",
                    newColor: "from-blue-400 to-blue-600",
                    position: "top-1/2 right-0 -translate-y-1/2",
                    label: "Manual Updates",
                    newLabel: "Auto Notifications",
                    stat: "100%",
                    statLabel: "System Availability",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    newIcon: <Brain className="w-6 h-6" />,
                    color: "from-yellow-400 to-yellow-600",
                    newColor: "from-purple-400 to-purple-600",
                    position: "bottom-0 left-1/2 -translate-x-1/2",
                    label: "Manual Planning",
                    newLabel: "AI Assistance",
                    stat: "24/7",
                    statLabel: "Smart Planning",
                  },
                  {
                    icon: <Server className="w-6 h-6" />,
                    newIcon: <Cloud className="w-6 h-6" />,
                    color: "from-gray-400 to-gray-600",
                    newColor: "from-cyan-400 to-cyan-600",
                    position: "top-1/2 left-0 -translate-y-1/2",
                    label: "Local Storage",
                    newLabel: "Cloud Platform",
                    stat: "99.9%",
                    statLabel: "System Reliability",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.position} group transition-all duration-1000`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        {/* Before transformation icon */}
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-4 absolute inset-0 flex items-center justify-center text-white transform transition-all duration-500 group-hover:opacity-0 group-hover:scale-90`}
                        >
                          {item.icon}
                        </div>
                        {/* After transformation icon */}
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.newColor} p-4 flex items-center justify-center text-white transform transition-all duration-500 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100`}
                        >
                          {item.newIcon}
                        </div>
                      </div>
                      <div className="glass-card rounded-xl p-3 text-center backdrop-blur-lg mt-3">
                        <div className="font-bold text-lg gradient-text mb-1">
                          {item.stat}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {item.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="About Join Our Journey"
      />
    </section>
  );
};

export default About;
