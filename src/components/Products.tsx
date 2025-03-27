import { useState } from "react";
import {
  Cloud,
  Lock,
  RefreshCw,
  ArrowRight,
  PlayCircle,
  Sparkles,
  BarChart as ChartBar,
  Users,
  CreditCard,
  Bus,
  Clock,
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
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[96px] opacity-20 will-change-transform"></div>
          <div
            className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[128px] opacity-20 will-change-transform"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 scroll-trigger">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-600 dark:text-blue-400 font-semibold mb-8">
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

        {/* Featured Product */}
        <div className="mb-16 sm:mb-32 scroll-trigger">
          <div className="glass-card rounded-[2rem] p-6 sm:p-8 md:p-12 hover-lift">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 font-semibold">
                  <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse mr-2"></span>
                  Available Now
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold gradient-text">
                  AAGI-CoachCommand
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transform your bus operations with our comprehensive SaaS
                  solution. Streamline bookings, manage fleet operations, and
                  enhance customer experience with our powerful platform.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <Cloud className="w-5 h-5" />,
                      text: "All-in-One Cloud-Based Platform",
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      text: "Smart Driver & Fleet Management",
                    },
                    {
                      icon: <ChartBar className="w-5 h-5" />,
                      text: "Business Analytics & Reports",
                    },
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {feature.icon}
                      </div>
                      <span className="text-sm sm:text-base">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() =>
                      handleProductInterest("SaaS App for Bus Operators")
                    }
                    className="magnetic-button text-white px-6 sm:px-8 py-4 rounded-xl flex items-center justify-center gap-2 group w-full sm:w-auto"
                  >
                    Live Demo
                    <PlayCircle className="transform transition-transform group-hover:scale-110" />
                  </button>
                  <Link
                    to="/features"
                    className="gradient-border bg-white dark:bg-dark-300 text-gray-900 dark:text-white px-6 sm:px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-200 transition-all w-full sm:w-auto text-center"
                  >
                    View More
                  </Link>
                </div>
              </div>

              {/* Interactive Product Visualization */}
              <div className="relative aspect-square hidden md:block">
                {/* Central Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-xl">
                    <Bus className="w-12 h-12 text-white" />
                  </div>
                  {/* Orbital Paths */}
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

                {/* Orbiting Features with Stats */}
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    color: "from-blue-400 to-blue-600",
                    position: "top-0 left-1/2 -translate-x-1/2",
                    stat: "100+",
                    label: " Solutions Implemented",
                  },
                  {
                    icon: <ChartBar className="w-6 h-6" />,
                    color: "from-green-400 to-green-600",
                    position: "top-1/2 right-0 -translate-y-1/2",
                    stat: "98%",
                    label: "Efficiency",
                  },
                  {
                    icon: <CreditCard className="w-6 h-6" />,
                    color: "from-purple-400 to-purple-600",
                    position: "bottom-0 left-1/2 -translate-x-1/2",
                    stat: "25+",
                    label: "Milestones Achieved",
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    color: "from-orange-400 to-orange-600",
                    position: "top-1/2 left-0 -translate-y-1/2",
                    stat: "24/7",
                    label: "Support",
                  },
                ].map((item, index) => (
                  <div key={index} className={`absolute ${item.position}`}>
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-4 shadow-lg flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:rotate-12 mb-3`}
                      >
                        {item.icon}
                      </div>
                      <div className="glass-card rounded-xl p-3 text-center backdrop-blur-lg">
                        <div className="font-bold text-lg gradient-text mb-1">
                          {item.stat}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Products Header */}
        <div className="text-center mb-12 scroll-trigger">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 font-semibold mb-6">
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

        {/* Upcoming Products */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
          {/* Digital Bill Conversion Tool */}
          <div className="group glass-card rounded-[2rem] p-6 sm:p-10 hover-lift scroll-trigger">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 sm:mb-8 transform-gpu transition-transform duration-300 group-hover:scale-110">
              <RefreshCw className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-semibold mb-4 sm:mb-6">
              Coming Soon
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 sm:mb-6">
              Digital Transform tool
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Transform your bills into digital itemized receipts. Our advanced
              conversion technology streamlines your billing process with
              AI-powered recognition and categorization.
            </p>
            <button
              onClick={() =>
                handleProductInterest("Digital Bill Conversion Tool")
              }
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20 dark:hover:from-blue-500/30 dark:hover:to-purple-500/30 transition-all font-semibold w-full sm:w-auto justify-center sm:justify-start"
            >
              Join Waitlist
              <ArrowRight className="transform transition-transform group-hover:translate-x-2" />
            </button>
          </div>

          {/* Credit Check Portal */}
          <div
            className="group glass-card rounded-[2rem] p-6 sm:p-10 hover-lift scroll-trigger"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 sm:mb-8 transform-gpu transition-transform duration-300 group-hover:scale-110">
              <Lock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 font-semibold mb-4 sm:mb-6">
              Coming Soon
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 sm:mb-6">
              OhrTrueTrack
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Secure credibility verification online. Our comprehensive credit
              assessment system provides instant verification and detailed
              reports for informed decision-making.
            </p>
            <button
              onClick={() => handleProductInterest("Credit Check Portal")}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-600 dark:text-purple-400 hover:from-purple-500/20 hover:to-pink-500/20 dark:hover:from-purple-500/30 dark:hover:to-pink-500/30 transition-all font-semibold w-full sm:w-auto justify-center sm:justify-start"
            >
              Join Waitlist
              <ArrowRight className="transform transition-transform group-hover:translate-x-2" />
            </button>
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
