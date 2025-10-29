import React from "react";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          关于我们 About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong className="text-gray-900">昕垣移民</strong>
              是一家专注于帮助华人移居新加坡的专业移民咨询公司。
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900">Xinyuan Immigration</strong>{" "}
              specializes in helping Chinese nationals relocate to Singapore.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600">成功案例</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-emerald-600">98%</div>
                <div className="text-sm text-gray-600">客户满意度</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">为什么选择我们？</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold">
                    专业团队 Professional Team
                  </div>
                  <div className="text-emerald-100 text-sm">
                    资深移民顾问，精通政策
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold">
                    高成功率 High Success Rate
                  </div>
                  <div className="text-emerald-100 text-sm">
                    丰富经验，成功案例众多
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
