import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FormData } from "../types";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("发送中... Sending...");

    try {
      // Replace with your actual form submission logic
      // Example: using Web3Forms or EmailJS
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your key
          subject: `New Inquiry from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus(
          "✅ 提交成功！我们会尽快联系您。 / Submitted successfully! We will contact you soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setFormStatus(
        "❌ 发送失败，请直接通过 WhatsApp 联系我们。 / Failed to send, please contact us via WhatsApp."
      );
      console.error("Form submission error:", error);
    }

    setTimeout(() => setFormStatus(""), 8000);
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            联系我们 Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            让我们开始您的移民之旅 / Let us start your immigration journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Mail className="text-emerald-600" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  发送咨询 Send Inquiry
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                填写表格，我们将在24小时内回复 / Fill the form and we will reply
                within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  姓名 Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="请输入您的姓名 / Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  电子邮件 Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  电话 Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+65 XXXX XXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  服务类型 Service Type
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                >
                  <option value="">请选择 Please select</option>
                  <option value="ep">工作准证 Employment Pass</option>
                  <option value="pr">永久居民 PR</option>
                  <option value="dp">家属准证 Dependent Pass</option>
                  <option value="entrepass">创业准证 EntrePass</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  留言 Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="告诉我们您的需求... / Tell us your requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>提交咨询 Submit Inquiry</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              {formStatus && (
                <div
                  className={`${
                    formStatus.includes("✅")
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-red-50 border-red-200 text-red-800"
                  } border px-4 py-3 rounded-lg`}
                >
                  {formStatus}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100 transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                联系信息 Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      地址 Address
                    </div>
                    <div className="text-gray-600">Singapore</div>
                    <div className="text-s text-gray-500 mt-1">
                      3 Ang Mo Kio Street 62, #07-27
                    </div>
                    <div className="text-ss text-gray-500 mt-1">
                      Singapore 569139
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      电话 Phone
                    </div>
                    <div className="text-gray-600">+65 8812 8688</div>
                    <div className="text-s text-gray-500 mt-1">
                      周一至周七 Mon-Sun : 9AM - 9PM
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      邮箱 Email
                    </div>
                    <div className="text-gray-600">
                      info@xinyuanimmigration.com
                    </div>
                    <div className="text-s text-gray-500 mt-1">
                      1小时内回复 Reply within 1hr
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">营业时间 Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur">
                  <span className="font-medium">周一至周日 Mon-Fri</span>
                  <span className="font-bold">9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
