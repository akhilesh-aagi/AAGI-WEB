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
      className="py-8 relative overflow-hidden bg-white dark:bg-black"
      ref={sectionRef}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-trigger">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-blue-900/10 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold mb-6 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-6">
            Innovative Products
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Revolutionary solutions designed for modern enterprises, empowering
            businesses with cutting-edge technology
          </p>
        </div>

        {/* Featured Product - AAGI-CoachCommand */}
        <div className="mb-20 scroll-trigger">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
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
              <div className="absolute top-3 left-3 z-50">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-green-600 text-xs font-semibold shadow-lg border border-green-200">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mr-1.5"></span>
                  Available Now
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">
                  CoachCommand
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Transform your bus operations with our comprehensive SaaS
                  solution. Streamline bookings, manage fleet operations, and
                  enhance customer experience with our powerful platform.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {[
                  "All-in-one cloud-based platform for bus operators",
                  "Smart driver and fleet management system",
                  "Real-time analytics and business intelligence",
                  "24/7 customer support and maintenance",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => handleProductInterest("AAGI-CoachCommand")}
                  className="magnetic-button text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 group w-full sm:w-auto text-sm"
                >
                  <PlayCircle className="w-4 h-4" />
                  Live Demo
                </button>
                <Link
                  to="/product/coachcommand/features"
                  className="gradient-border bg-white dark:bg-dark-300 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-200 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Features
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Products Header */}
        <div className="text-center mb-12 scroll-trigger">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-900/20 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 font-semibold mb-4 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Coming Soon
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-3">
            Upcoming Innovations
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Discover our next generation of solutions designed to revolutionize
            business operations
          </p>
        </div>

        {/* Upcoming Products Grid */}
        <div className="space-y-12 mb-12">
          {/* OhrTrueTrack */}
          <div className="group scroll-trigger">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Product Details - Left Side */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold text-sm">
                  Coming Soon
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-blue-100">
                  OhrTrueTrack
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Secure credibility verification online. Our comprehensive
                  credit assessment system provides instant verification and
                  detailed reports for informed decision-making.
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {[
                    "Instant credit verification",
                    "Comprehensive reports",
                    "Secure data handling",
                    "Real-time assessments",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleProductInterest("OhrTrueTrack")}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/10 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 hover:bg-blue-900/20 dark:hover:bg-blue-900/30 transition-all font-semibold w-full sm:w-auto justify-center text-sm"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </button>
              </div>

              {/* Product Image - Right Side */}
              <div className="relative">
                <div className="relative">
                  {/* Main image */}
                  <div className="relative z-10 overflow-hidden rounded-lg">
                    <img
                      src="/ott.jpg"
                      alt="OhrTrueTrack Credit Verification"
                      className="w-full aspect-[2/1] object-cover relative z-0 rounded-lg"
                    />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-50">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-blue-900 text-xs font-semibold shadow-lg border border-blue-200">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Portal */}
          <div className="group scroll-trigger">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Product Image - Left Side */}
              <div className="relative">
                <div className="relative">
                  {/* Main image */}
                  <div className="relative z-10 overflow-hidden rounded-lg">
                    <img
                      src="/jobportal.jpg"
                      alt="OTT Job Portal"
                      className="w-full aspect-[2/1] object-cover relative z-0 rounded-lg"
                    />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-50">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-blue-900 text-xs font-semibold shadow-lg border border-blue-200">
                    Coming Soon
                  </div>
                </div>
              </div>

              {/* Product Details - Right Side */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold text-sm">
                  Coming Soon
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-blue-100">
                  Job Portal
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  OTT's Job Portal is exclusively for individuals verified through OhrTrueTrack (OTT). Using OTT's secure verification system, users can sign up seamlessly with their OTT credentials, explore companies and job openings, and apply confidently knowing their credentials are already verified.
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {[
                    "Verified Users Only",
                    "Seamless Sign-Up",
                    "Discover Jobs & Companies",
                    "Apply Confidently",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleProductInterest("Job Portal")}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/10 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 hover:bg-blue-900/20 dark:hover:bg-blue-900/30 transition-all font-semibold w-full sm:w-auto justify-center text-sm"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Hopelense */}
          <div className="group scroll-trigger">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Product Details - Left Side */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold text-sm">
                  Coming Soon
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-blue-100">
                  HopeLense
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Showcasing verified acts of goodness by ordinary and extraordinary people. A safe, trusted space to watch, read, or listen to inspiring real acts backed by AI and moderator verification.
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {[
                    "Verified acts of kindness & courage",
                    "Watch, read, or listen in multiple formats (3/10/25 min)",
                    "AI + Moderator backed verification",
                    "Drive-friendly audio playback",
                    "Community contributions with sources",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleProductInterest("HopeLense")}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/10 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 hover:bg-blue-900/20 dark:hover:bg-blue-900/30 transition-all font-semibold w-full sm:w-auto justify-center text-sm"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </button>
              </div>

              {/* Product Image - Right Side */}
              <div className="relative">
                <div className="relative">
                  {/* Main image */}
                  <div className="relative z-10 overflow-hidden rounded-lg">
                    <img
                      src="/hopelense.jpeg"
                      alt="HopeLense Platform"
                      className="w-full aspect-[2/1] object-cover relative z-0 rounded-lg"
                    />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-50">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-blue-900 text-xs font-semibold shadow-lg border border-blue-200">
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
