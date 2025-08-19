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
      className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-dark-100 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 rounded-full bg-blue-900/10 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold mb-6 sm:mb-8 text-sm sm:text-base">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 sm:mb-8 leading-tight">
            Comprehensive Solutions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Empowering businesses with next-generation SaaS solutions and digital transformation services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 group p-4 sm:p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border ${service.color} border-current group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.color}`} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white group-hover:underline mb-2 sm:mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
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
