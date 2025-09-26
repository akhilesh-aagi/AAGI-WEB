import { Code, Database, Cloud, Users, BarChart3, Zap } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const servicesData = [
  {
    title: "Digital Transformation",
    description:
      "Transform your business with cutting-edge digital solutions and modern technology stack. We help organizations modernize their operations, improve efficiency, and stay competitive in the digital age.",
    icon: Code,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "SaaS Development",
    description:
      "Custom SaaS solutions tailored to your industry needs and business requirements. From concept to deployment, we build scalable, secure, and user-friendly software-as-a-service applications.",
    icon: Database,
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Robust cloud infrastructure and deployment solutions for your SaaS applications. We ensure high availability, scalability, and security for your cloud-based services.",
    icon: Cloud,
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "User Management Systems",
    description:
      "Comprehensive user authentication, authorization, and management systems for SaaS platforms. Secure user access control with role-based permissions and multi-factor authentication.",
    icon: Users,
    color: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Advanced analytics and reporting solutions for SaaS applications. Real-time dashboards, business intelligence, and data-driven insights to help you make informed decisions.",
    icon: BarChart3,
    color: "text-red-600 dark:text-red-400",
  },
  {
    title: "API Integration",
    description:
      "Seamless API development and integration services for SaaS platforms. Connect your applications with third-party services, payment gateways, and external data sources.",
    icon: Zap,
    color: "text-yellow-600 dark:text-yellow-400",
  },
];

const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-6 sm:py-8 lg:py-10 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-900/10 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold mb-4 text-sm">
            <Code className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4 leading-tight">
            Comprehensive Solutions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            Empowering businesses with next-generation SaaS solutions and
            digital transformation services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 group p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border ${service.color} border-current group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${service.color}`} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:underline mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
