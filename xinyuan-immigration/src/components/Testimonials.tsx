import React from "react";
import { Testimonial } from "../types";

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "张先生",
      nameEn: "Mr. Zhang",
      role: "软件工程师",
      roleEn: "Software Engineer",
      content: "昕垣移民的专业服务让我的EP申请过程非常顺利。",
      contentEn: "Xinyuan Immigration made my EP application very smooth.",
      rating: 5,
    },
    {
      name: "李女士",
      nameEn: "Ms. Li",
      role: "金融分析师",
      roleEn: "Financial Analyst",
      content: "在昕垣的帮助下，我成功获得了新加坡PR。",
      contentEn: "With Xinyuan help, I successfully obtained Singapore PR.",
      rating: 5,
    },
    {
      name: "王先生",
      nameEn: "Mr. Wang",
      role: "企业主",
      roleEn: "Business Owner",
      content:
        "创业准证申请成功！感谢昕垣团队的专业指导和全程跟进，现在我的公司在新加坡顺利运营。",
      contentEn:
        "EntrePass application successful! Thanks to Xinyuan professional guidance, my company is now operating smoothly in Singapore.",
      rating: 5,
    },
    {
      name: "张小姐",
      nameEn: "Ms. Zhang",
      role: "教师",
      roleEn: "Tuition Teacher",
      content: "昕垣团队帮我顺利拿到了工作准证，非常感谢他们的耐心和专业。",
      contentEn:
        "The Xinyuan team helped me obtain my work pass smoothly — very grateful for their patience and professionalism.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          成功案例 Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
              <p className="text-gray-500 text-sm mt-2 italic">
                {testimonial.contentEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
