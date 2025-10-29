import React from "react";
import { Service } from "../types";

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "工作准证 (Work Permits)",
      titleEn: "Employment Pass & Work Permits",
      description: "协助专业人士申请新加坡就业准证(EP)、S Pass等工作签证",
      descriptionEn:
        "Assistance with Employment Pass (EP), S Pass, and other work visa applications",
      icon: "💼",
    },
    {
      title: "永久居民 (PR)",
      titleEn: "Permanent Residency",
      description: "提供新加坡永久居民申请的全程指导和文件准备服务",
      descriptionEn:
        "Complete guidance and document preparation for Singapore PR applications",
      icon: "🏠",
    },
    {
      title: "家属准证 (Dependent Pass)",
      titleEn: "Dependent Pass",
      description: "协助为配偶和子女申请家属准证和长期访问准证",
      descriptionEn:
        "Assistance with Dependent Pass and Long Term Visit Pass for family members",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "创业准证 (EntrePass)",
      titleEn: "EntrePass",
      description: "帮助企业家申请新加坡创业准证，开启商业之旅",
      descriptionEn:
        "Support for entrepreneurs to obtain EntrePass and start their business journey",
      icon: "🚀",
    },
  ];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            我们的服务 Our Services
          </h2>
          <p className="text-lg text-gray-600">
            专业、高效、贴心的移民服务 / Professional and efficient immigration
            services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <h4 className="text-sm font-semibold text-emerald-600 mb-3">
                {service.titleEn}
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                {service.description}
              </p>
              <p className="text-gray-500 text-xs">{service.descriptionEn}</p>
              <div className="mt-4 pt-4 border-t border-emerald-100">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition"
                >
                  了解更多 Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
