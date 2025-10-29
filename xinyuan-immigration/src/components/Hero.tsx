import React from "react";
import { MessageCircle } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "6591234567";
    const message = encodeURIComponent(
      "你好！我想咨询移民服务。 Hello! I would like to inquire about immigration services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
              开启新加坡新生活
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-emerald-600 mb-6">
              Start Your New Life in Singapore
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0">
              专业的移民咨询服务，助您顺利移居新加坡
              <br />
              Professional immigration consultation for your smooth transition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                免费咨询 Free Consultation
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={24} />
                WhatsApp 咨询
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
              <img
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop"
                alt="Singapore Marina Bay Skyline"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-2xl font-bold">Your Future Awaits 🇸🇬</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
