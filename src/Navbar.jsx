import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://logoipsum.com/logo-placeholder.png"
              alt=" Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Listings
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-2 px-4 py-2">
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              Listings
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
