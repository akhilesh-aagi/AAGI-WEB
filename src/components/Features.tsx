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
  CreditCard,
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
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Account Management",
      description:
        "Comprehensive account management system for billing, invoicing, payment processing, and financial reporting.",
      color: "red",
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

      {/* Hero Section with Dashboard Image */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-dark-100 dark:to-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                  CoachComand
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200">
                  Complete Fleet Management Dashboard
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Experience the future of fleet management with our comprehensive
                dashboard. Monitor vehicle availability, track trip statuses,
                manage drivers, and gain real-time insights into your operations
                – all from one powerful platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="magnetic-button text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 group"
                  onClick={() => setIsModalOpen(true)}
                >
                  Try Demo
                  <Clock className="w-5 h-5 transform transition-transform group-hover:scale-110" />
                </button>
              </div>
            </div>

            {/* Big Image */}
            <div className="relative">
              <div className="relative  overflow-hidden shadow-2xl">
                <img
                  src="/coachcommand1.png"
                  alt="CoachComand Dashboard - Complete Fleet Management Interface"
                  className="w-[120%] md:w-[140%] lg:w-[160%] h-auto relative left-1/2 -translate-x-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-20 scroll-trigger">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
            Comprehensive Management Solution
          </h1>
        </div>

        {/* Features Section (no cards) */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-6 scroll-trigger"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-${feature.color}-100 dark:bg-${feature.color}-900/40 flex items-center justify-center text-${feature.color}-600 dark:text-${feature.color}-400`}
                >
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center scroll-trigger">
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
              onClick={() => navigate("/?scrollTo=contact")}
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
