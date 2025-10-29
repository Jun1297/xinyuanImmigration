import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";

function App() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6591234567"; // Update with actual number
    const message = encodeURIComponent(
      "你好！我想咨询移民服务。 Hello! I would like to inquire about immigration services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl z-50 transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp 咨询
        </span>
      </button>

      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
