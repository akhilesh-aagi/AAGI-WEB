import { Target, Zap, Shield, Heart, Globe, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const CoreValues = () => {
  const values = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Innovation",
      description:
        "Pushing the boundaries of technology with forward-thinking solutions",
      bgColor: "bg-gray-600",
      image: "/corevalue/innovation.jpg",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Reliability",
      description: "Building dependable products that ensure peace of mind",
      bgColor: "bg-gray-600",
      image: "/corevalue/reliability.jpg",
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Customer Success",
      description:
        "Prioritizing customer needs with the right tools and support",
      bgColor: "bg-gray-600",
      image: "/corevalue/CustomerSuccess .jpg",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Integrity",
      description:
        "Operating with transparency and honesty in all relationships",
      bgColor: "bg-gray-600",
      image: "/corevalue/Integrity.jpg",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Impact",
      description: "Creating solutions that make a difference worldwide",
      bgColor: "bg-gray-600",
      image: "/corevalue/globalimpact.jpg",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do",
      bgColor: "bg-gray-600",
      image: "/corevalue/Integrity.jpg",
    },
  ];

  return (
    <section id="core-values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Core Values
          </div>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Values
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="pt-6 pb-6 px-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
