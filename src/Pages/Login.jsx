import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: "url(Images/login_bg_photo.png)" }}>
      <div className="bg-white p-8 rounded-lg shadow-md w-11/12 sm:w-96">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login Form</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Enter Your Email:</label>
            <input
              type="email"
              placeholder="e.g. johnkennedy@gmail.com"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Enter Your Password:</label>
            <input
              type="password"
              placeholder="e.g. 123456789"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">Login</button>
          <p className="text-center text-xs">
            Don't Have An Account?{' '}
            <span className="text-blue-600 hover:underline cursor-pointer">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
