import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bus,
  Calendar,
  Navigation,
  Clock,
  Users,
  Map,
} from "lucide-react";
import ContactFormModal from "./ContactFormModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!animationRef.current || window.innerWidth < 768) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        animationRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      const elements = animationRef.current.querySelectorAll(".floating-icon");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const offsetX = (x - 0.5) * 30;
        const offsetY = (y - 0.5) * 30;
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-dark-100 dark:to-dark-200 transition-colors duration-300"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 animate-float"></div>
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 animate-float"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20 w-full">
            <div className="order-2 md:order-1">
              <div className="space-y-6 md:space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse mr-2"></span>
                  Welcome to AAGI
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block gradient-text">Innovating</span>
                  <span className="block gradient-text">Solutions for</span>
                  <span className="block gradient-text">Businesses</span>
                  <span className="block gradient-text">Across the Globe</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  Empowering enterprises with innovative digital solutions for
                  seamless operations and sustainable growth
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#products"
                    className="magnetic-button text-white px-6 sm:px-8 py-4 rounded-full flex items-center justify-center gap-2 group w-full sm:w-auto"
                  >
                    Explore Solutions
                    <ArrowRight className="transform transition-transform group-hover:translate-x-2" />
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="demo-button group"
                  >
                    {/* Sparkle effects */}
                    <div
                      className="sparkle absolute top-1/4 left-1/4"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="sparkle absolute top-3/4 right-1/4"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="sparkle absolute top-1/2 left-3/4"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Ripple effects */}
                    <div className="absolute left-1/2 top-1/2">
                      <div
                        className="ripple-effect"
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="ripple-effect"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="ripple-effect"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>

                    <div className="relative z-10 flex items-center gap-2">
                      <Clock className="w-5 h-5 animate-bounce" />
                      <span className="font-semibold">Schedule Demo</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={animationRef}
              className="order-1 md:order-2 relative aspect-square hidden md:block"
            >
              {/* Central Bus Route Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 backdrop-blur-xl animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 dark:from-blue-600/30 dark:to-purple-600/30 animate-spin-slow">
                    <svg
                      className="absolute inset-0 w-full h-full animate-spin-slow"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="text-blue-400/30 dark:text-blue-400/40"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white dark:bg-dark-200 shadow-2xl flex items-center justify-center">
                    <Bus className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Floating Feature Icons with Stats */}
              {[
                {
                  icon: <Calendar className="w-8 h-8" />,
                  position: "top-0 left-1/4",
                  delay: "0s",
                  label: "Transparency",
                  stat: "100%",
                  statLabel: "Transparency",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: <Navigation className="w-8 h-8" />,
                  position: "top-1/4 right-0",
                  delay: "0.2s",
                  label: "Milestones Achieved",
                  stat: " 25+",
                  statLabel: "Milestones Achieved",
                  color: "from-green-400 to-green-600",
                },
                {
                  icon: <Map className="w-8 h-8" />,
                  position: "bottom-1/4 left-0",
                  delay: "0.4s",
                  label: "System Availability",
                  stat: "100%",
                  statLabel: "System Availability",
                  color: "from-purple-400 to-purple-600",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  position: "bottom-0 right-1/4",
                  delay: "0.6s",
                  label: "Support",
                  stat: "24/7",
                  statLabel: "Support",
                  color: "from-orange-400 to-orange-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`floating-icon absolute ${item.position} group`}
                  style={{ animationDelay: item.delay }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      {/* Spinning circles */}
                      <div className="absolute inset-0 -m-4">
                        <svg
                          className="w-24 h-24 animate-spin-slow"
                          viewBox="0 0 100 100"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-gray-200 dark:text-gray-700"
                            strokeDasharray="4 4"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-gray-200 dark:text-gray-700"
                            strokeDasharray="4 4"
                          />
                        </svg>
                      </div>
                      {/* Icon container */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} shadow-xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 relative z-10`}
                      >
                        <div className="text-white">{item.icon}</div>
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

              {/* Animated Route Lines */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <path
                    d="M200,200 C 150,150 250,150 300,200 S 250,250 200,200"
                    className="stroke-blue-400/20 dark:stroke-blue-400/30"
                    strokeWidth="2"
                    fill="none"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      from="0,1000"
                      to="1000,0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>

              {/* Location Markers */}
              <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-blue-400/30 dark:bg-blue-400/40"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${
                        3 + Math.random() * 4
                      }s linear infinite`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  >
                    <div className="w-4 h-4 rounded-full bg-blue-400/20 dark:bg-blue-400/30 animate-ping"></div>
                  </div>
                ))}
              </div>
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
