import { useState } from "react";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import ContactFormModal from "./ContactFormModal";

const Products = () => {
  const sectionRef = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleProductInterest = (product: string) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section
      id="products"
      className="py-16 relative overflow-hidden bg-white dark:bg-black"
      ref={sectionRef}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 scroll-trigger">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-blue-900/10 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            Our Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-8">
            Innovative Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Revolutionary solutions designed for modern enterprises, empowering
            businesses with cutting-edge technology
          </p>
        </div>

        {/* Featured Product - AAGI-CoachCommand */}
        <div className="mb-32 scroll-trigger">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="relative">
                {/* Main image */}
                <div className="relative z-10 overflow-hidden ">
                  <img
                    src="/coachCommand.png"
                    alt="CoachCommand Bus Management Platform"
                    className="w-full aspect-[4/3] object-cover relative z-0"
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-50">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-green-600 text-sm font-semibold shadow-xl border border-green-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                  Available Now
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                  CoachCommand
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Transform your bus operations with our comprehensive SaaS
                  solution. Streamline bookings, manage fleet operations, and
                  enhance customer experience with our powerful platform.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                {[
                  "All-in-one cloud-based platform for bus operators",
                  "Smart driver and fleet management system",
                  "Real-time analytics and business intelligence",
                  "24/7 customer support and maintenance",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={() => handleProductInterest("AAGI-CoachCommand")}
                  className="magnetic-button text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  <PlayCircle className="w-5 h-5" />
                  Live Demo
                </button>
                <Link
                  to="/product/coachcommand/features"
                  className="gradient-border bg-white dark:bg-dark-300 text-gray-900 dark:text-white px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-200 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Features
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Products Header */}
        <div className="text-center mb-16 scroll-trigger">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/20 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 font-semibold mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            Coming Soon
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Upcoming Innovations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our next generation of solutions designed to revolutionize
            business operations
          </p>
        </div>

        {/* Upcoming Products Grid */}
        <div className="space-y-20 mb-20">
          {/* OhrTrueTrack */}
          <div className="group scroll-trigger">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Product Details - Left Side */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold">
                  Coming Soon
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-blue-900 dark:text-blue-100">
                  OhrTrueTrack
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Secure credibility verification online. Our comprehensive
                  credit assessment system provides instant verification and
                  detailed reports for informed decision-making.
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {[
                    "Instant credit verification",
                    "Comprehensive reports",
                    "Secure data handling",
                    "Real-time assessments",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleProductInterest("OhrTrueTrack")}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900/10 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 hover:bg-blue-900/20 dark:hover:bg-blue-900/30 transition-all font-semibold w-full sm:w-auto justify-center"
                >
                  Join Waitlist
                  <ArrowRight className="transform transition-transform group-hover:translate-x-2" />
                </button>
              </div>

              {/* Product Image - Right Side */}
              <div className="relative">
                <div className="relative">
                  {/* Main image */}
                  <div className="relative z-10 overflow-hidden">
                    <img
                      src="/ott.jpg"
                      alt="OhrTrueTrack Credit Verification"
                      className="w-full aspect-[4/3] object-cover relative z-0"
                    />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-50">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-blue-900 text-sm font-semibold shadow-xl border border-blue-200">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct("");
        }}
        source={`Products ${selectedProduct}`}
      />
    </section>
  );
};

export default Products;
