import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <div className="text-2xl font-bold">Xinyuan Immigration 昕垣移民</div>
        </div>
        <p className="text-gray-400 mb-4">
          专业移民服务，助您开启新加坡新生活
          <br />
          Professional immigration services for your new life in Singapore
        </p>
        <p className="text-gray-500 text-sm">
          © 2025 Xinyuan Immigration. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
