import { Code, Database, Shield } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-dark-100 dark:via-dark-200 dark:to-dark-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering businesses with next-generation digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="group bg-white dark:bg-dark-300 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-trigger">
            <div className="bg-blue-100 dark:bg-blue-900/50 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Digital Transformation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Transform your business with cutting-edge digital solutions and
              modern technology stack
            </p>
          </div>

          <div
            className="group bg-white dark:bg-dark-300 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-trigger"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="bg-purple-100 dark:bg-purple-900/50 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              SaaS Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Custom SaaS solutions tailored to your industry needs and business
              requirements
            </p>
          </div>

          <div
            className="group bg-white dark:bg-dark-300 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-trigger"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-green-100 dark:bg-green-900/50 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Security Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Robust security implementations and credibility verification
              systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
