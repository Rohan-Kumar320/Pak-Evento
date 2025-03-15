import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";

import {
  FaHome,
  FaShoppingCart,
  FaClipboardList,
  FaCogs,
  FaUser,
  FaChartLine,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";
import AdminLanding from "./AdminLanding";
import AttendeesTable from "./AttendeesTable";
import ExhibitorTable from "./ExhibitorTable";
import AdminSettings from "./AdminSettings";
import { useTheme } from "./ThemeContext";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth < 1024) setIsOpen(false);
  };

  const tabs = [
    { name: "Home", icon: <FaHome size={20} /> },
    { name: "Attendees", icon: <FaPeopleGroup size={20} /> },
    { name: "Exhibitors", icon: <FaClipboardList size={20} /> },
    { name: "Users", icon: <FaUser size={20} /> },
    { name: "Analytics", icon: <FaChartLine size={20} /> },
    { name: "Settings", icon: <FaCogs size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <AdminLanding />;
      case "Attendees":
        return <AttendeesTable />;
      case "Exhibitors":
        return <ExhibitorTable />;
      case "Settings":
        return <AdminSettings />;
      default:
        return <AdminLanding />;
    }
  };

  return (
    <>
      <div className={`flex ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>        
        <div className="p-4 lg:hidden">
          <FaBars size={28} onClick={toggleSidebar} className="cursor-pointer" />
        </div>
        <div
          className={`fixed top-0 left-0 h-full shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} w-[250px] lg:w-[300px] z-50 lg:static lg:translate-x-0 lg:m-4 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
        >
          <div className={`flex justify-between items-center p-4 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"} lg:rounded-2xl`}>
            <h2 className="text-lg font-bold">Admin Panel</h2>
            <FaTimes size={20} onClick={toggleSidebar} className="cursor-pointer lg:hidden" />
          </div>
          <ul className="space-y-2 mt-2 ">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={`flex items-center p-4 pl-6 gap-3 cursor-pointer transition-colors duration-200 ${activeTab === tab.name ? (isDarkMode ? "bg-gray-700 text-white" : "bg-gray-800 text-white") : (isDarkMode ? "hover:bg-gray-600 text-white" : "hover:bg-gray-100 text-gray-900")} rounded-2xl m-1.5`}
              >
                {tab.icon}
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto h-screen">
          <DashboardHeader activeTab={activeTab} />
          <div className="mt-4">
            {renderContent()}
          </div>
          <DashboardFooter />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
