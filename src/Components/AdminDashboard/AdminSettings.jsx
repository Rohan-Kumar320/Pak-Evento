import React from 'react';
import { FaSignOutAlt, FaUserEdit, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const AdminSettings = ({ onLogout, onUpdateProfile }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-2xl w-full max-w-md mx-auto`}>
      <h2 className='text-2xl font-semibold mb-6'>Settings</h2>
      <div className='flex flex-col gap-4'>
        <button
          onClick={toggleDarkMode}
          className={`flex items-center justify-between px-4 py-2 rounded-lg transition duration-300 ${
            isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-300 text-gray-900 hover:bg-gray-400'
          }`}
        >
          {isDarkMode ? <FaSun className='text-yellow-500' /> : <FaMoon className='text-blue-500' />}
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        <button
          onClick={onUpdateProfile}
          className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300'
        >
          <FaUserEdit />
          Update Profile
        </button>
        <button
          onClick={onLogout}
          className='flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300'
        >
          <FaSignOutAlt />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
