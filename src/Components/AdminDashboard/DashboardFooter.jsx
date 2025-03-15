import React from "react";

const DashboardFooter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 mt-3 border-t border-gray-300 text-center md:text-left gap-2">
      <p className="text-gray-600 text-sm">
        © 2025, made with 💖 by <span className="font-bold">Creative Tim</span> for a better web.
      </p>
      <div className="flex flex-wrap justify-center md:justify-end gap-4">
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Creative Tim
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          About Us
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Blog
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          License
        </a>
      </div>
    </div>
  );
};

export default DashboardFooter;
