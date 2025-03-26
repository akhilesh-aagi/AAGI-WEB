import React, { useEffect, useState } from "react";
import {
  Bus,
  Calendar,
  Users,
  Cog,
  BarChart,
  Smartphone,
  Clock,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ContactFormModal from "./ContactFormModal"; // Ensure this import is correct

const Features = () => {
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLDivElement>;
  const navigate = useNavigate(); // Add navigation hook

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Trip Management",
      description:
        "Effortlessly plan, schedule, and manage trips, ensuring smooth operations and on-time arrivals.",
      color: "blue",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Management",
      description:
        "Keep track of your customers, manage bookings, and ensure seamless communication.",
      color: "purple",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Fleet Management",
      description:
        "Monitor and manage your fleet, track vehicle availability, and optimize usage.",
      color: "green",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "HR Management",
      description:
        "Streamline employee scheduling, track working hours, and ensure compliance with labor laws.",
      color: "pink",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description:
        "Make data-driven decisions with insights into your fleet's performance, revenue, and operational efficiency.",
      color: "orange",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "User-Friendly Interface",
      description:
        "Easy-to-use platform designed for both operators and drivers, reducing training time and improving productivity.",
      color: "indigo",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App",
      description:
        "Empower your drivers with a mobile app to view schedules, check-in times, and receive real-time updates.",
      color: "teal",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-dark-100 dark:to-dark-200"
      ref={sectionRef}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-dark-200/80 backdrop-blur-xl border-b border-gray-200 dark:border-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16 scroll-trigger">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
            Comprehensive Bus Management Solution
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our SaaS App for Bus Operators is a comprehensive solution designed
            to streamline your operations and enhance efficiency across all
            aspects of your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift scroll-trigger"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-${feature.color}-100 dark:bg-${feature.color}-900/50 flex items-center justify-center mb-6 text-${feature.color}-600 dark:text-${feature.color}-400`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center scroll-trigger">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              className="magnetic-button text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 group"
              onClick={() => setIsModalOpen(true)}
            >
              Schedule Demo
              <Clock className="w-5 h-5 transform transition-transform group-hover:scale-110" />
            </button>
            <button
              className="gradient-border bg-white dark:bg-dark-300 text-gray-900 dark:text-white px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-200 transition-all"
              onClick={() => navigate("/?scrollTo=contact")} // Navigate to main page with query
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="Hero Schedule Demo"
      />
    </div>
  );
};

export default Features;
