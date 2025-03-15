import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative z-100 bg-slate-600 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 space-x-4">
        {/* Brand Name */}
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          Pak <span className="text-white">Evento</span>
        </h1>

        {/* Toggle Button for Mobile */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row md:flex items-center space-x-6 text-lg font-semibold text-white ${
            isOpen ? 'flex' : 'hidden'
          } md:space-x-6 md:space-y-0 space-y-4 absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-slate-600 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="relative group cursor-pointer" onClick={toggleDropdown}>
            <span className="hover:text-blue-600 transition duration-300">Services</span>
            {/* Dropdown Menu */}
            <ul
              className={`md:absolute md:left-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${
                isDropdownOpen ? 'block' : 'hidden'
              } group-hover:block transition-all duration-300 ease-in-out text-slate-700`}
            >
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Event Planning</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Catering</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Decorations</li>
            </ul>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            <Link to="/stories">Our Stories</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">
            <button className="p-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all duration-300">
              <Link to="/login">Sign In</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
