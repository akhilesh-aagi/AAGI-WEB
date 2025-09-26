import {
  Target,
  Lightbulb,
  Zap,
  Shield,
  Heart,
  Globe,
  TrendingUp,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import React, { useRef } from "react";

const CoreValues = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const values = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Innovation",
      description: "Creating original products driven by our vision.",
      bgColor: "bg-gray-600",
      image: "/corevalue/innovation.jpg",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Ownership",
      description:
        "Every solution starts with us and is thoughtfully refined for clients.",
      bgColor: "bg-gray-600",
      image: "/corevalue/reliability.jpg",
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Expertise",
      description:
        "Delivering high-quality, reliable products through skillful engineering.",
      bgColor: "bg-gray-600",
      image: "/corevalue/CustomerSuccess .jpg",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Integrity",
      description: "Transparent, honest, and committed to what we build.",
      bgColor: "bg-gray-600",
      image: "/corevalue/Integrity.jpg",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Client Focus",
      description:
        "Customizing solutions to meet specific needs without compromising integrity.",
      bgColor: "bg-gray-600",
      image: "/corevalue/globalimpact.jpg",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Excellence",
      description:
        "Maintaining the highest standards in every product we engineer.",
      bgColor: "bg-gray-600",
      image: "/corevalue/excellence.jpg",
    },
  ];

  return (
    <section
      id="core-values"
      className="py-12 bg-white dark:bg-black"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 dark:text-gray-300">
            Core Values
          </div>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-4 dark:bg-orange-400"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 dark:text-white">
            Featured Values
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  style={{ filter: "brightness(0.95)" }}
                />
              </div>

              {/* Content */}
              <div className="pt-4 pb-4 px-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
