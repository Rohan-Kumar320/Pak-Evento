import React from "react";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const DashboardHeader = ({ activeTab }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-3">
      <div className="text-center md:text-left">
        <h6 className="text-sm font-semibold">
          <span className="text-gray-500 hover:text-blue-500 cursor-pointer">
            Dashboard
          </span>{" "}
          / {activeTab}
        </h6>
        <h5 className="font-semibold text-lg">{activeTab}</h5>
      </div>
      <div className="flex justify-between items-center gap-3">
        <div className="relative w-full md:w-60 lg:w-80">
          <input
            type="search"
            placeholder="Search..."
            className="px-4 py-2 w-full rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
            🔍
          </button>
        </div>
        <div className="rounded-full bg-black text-white border border-gray-500 shadow-2xl text-center w-8 h-8 flex items-center justify-center">
          R
        </div>
        <FaBell
          className="text-gray-600 hover:text-black cursor-pointer"
          size={25}
        />
        <IoMdSettings
          className="text-gray-600 hover:text-black cursor-pointer"
          size={26}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
