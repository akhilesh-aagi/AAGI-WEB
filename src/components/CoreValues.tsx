import { Target, Lightbulb, Zap, Shield, Heart, Globe, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CoreValues = () => {
  const sectionRef = useScrollAnimation();

  const values = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Innovation",
      description: "Pushing the boundaries of technology with forward-thinking solutions",
      bgColor: "bg-gray-600",
      image: "/innovation.jpg"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Reliability",
      description: "Building dependable products that ensure peace of mind",
      bgColor: "bg-gray-600",
      image: "/reliability.jpg"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Customer Success",
      description: "Prioritizing customer needs with the right tools and support",
      bgColor: "bg-gray-600",
      image: "/Customer Success.jpg"
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Integrity",
      description: "Operating with transparency and honesty in all relationships",
      bgColor: "bg-gray-600",
      image: "/Integrity.jpg"
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Impact",
      description: "Creating solutions that make a difference worldwide",
      bgColor: "bg-gray-600",
      image: "/globalimpact.jpg"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do",
      bgColor: "bg-gray-600",
      image: "/excellence.jpg"
    },
  ];

  return (
    <section id="core-values" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Core Values
          </div>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Values
          </h2>
        </div>

        {/* Values Cards Grid - Two Rows */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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