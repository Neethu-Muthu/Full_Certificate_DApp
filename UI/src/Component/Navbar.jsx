import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-end items-center space-x-4">
        <a href="/" className="hover:text-blue-300 transition duration-300">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Home
          </button>
        </a>
        <a href="/issue" className="hover:text-blue-300 transition duration-300">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Issue Certificate
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
