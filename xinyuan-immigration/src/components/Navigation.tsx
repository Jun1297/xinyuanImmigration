import React, { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "6588128688";
    const message = encodeURIComponent(
      "你好！我想咨询移民服务。 Hello! I would like to inquire about immigration services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="h-12 flex items-center">
              <svg viewBox="0 0 350 350" className="h-12 w-auto">
                <polygon points="0,0 175,125 0,250" fill="#00B67A" />
                <polygon
                  points="175,125 350,0 350,250 175,125"
                  fill="#00B67A"
                />
                <polygon points="0,250 175,125 175,375" fill="#FFFFFF" />
                <polygon points="350,250 175,125 175,375" fill="#FFFFFF" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">
                Xinyuan Immigration
              </div>
              <div className="text-xs text-gray-600">昕垣移民</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition font-medium"
            >
              服务 Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition font-medium"
            >
              关于 About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition font-medium"
            >
              案例 Stories
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition font-medium"
            >
              常见问题 FAQ
            </button>
            <div className="w-px h-8 bg-gray-300 mx-2"></div>
            <button
              onClick={handleWhatsAppClick}
              className="px-4 py-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition font-medium flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition transform hover:scale-105 font-semibold shadow-md"
            >
              联系我们 Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium"
            >
              服务 Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium"
            >
              关于 About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium"
            >
              案例 Stories
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium"
            >
              常见问题 FAQ
            </button>
            <div className="border-t my-2"></div>
            <button
              onClick={handleWhatsAppClick}
              className="block w-full text-left px-4 py-3 text-green-600 hover:bg-green-50 rounded-lg transition font-medium flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>WhatsApp 咨询</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition"
            >
              联系我们 Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
