import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 max-sm:px-3 left-0 z-50 bg-white shadow-md px-5 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10 max-sm:w-[30vw] max-md:w-[20vw] w-[16vw] object-contain"
        />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
          Contact
        </Link>
        <Link to="/skills" className="text-gray-700 hover:text-blue-600 font-medium">
          Explore Skills
        </Link>
      </div>

      {/* Desktop Buttons + Profile Dropdown */}
      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={() => navigate('/signup')}
          className="text-blue-600 font-semibold border bg-gradient-to-r from-purple-200 to-blue-300 px-4 py-1 rounded-full hover:bg-blue-50 transition"
        >
          Sign Up
        </button>
        <button
          onClick={() => navigate('/login')}
          className="bg-gradient-to-r to-purple-200 from-blue-300 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* 👤 Avatar + Dropdown Toggle */}
        <div className="relative ml-2" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.G0-rgY-iYnZgqF_DiS-_oQHaHa?pid=Api&P=0&h=220" // Replace with user image later
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover"
            />
            <ChevronDown
              size={20}
              className={`text-purple-700 transition-transform duration-300 ${
                dropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <button
                onClick={() => {
                  navigate('/userprofile');
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100"
              >
                My Profile
              </button>
              
              <hr className="my-1" />
              <button
                onClick={() => {
                  localStorage.removeItem('email');
                  setDropdownOpen(false);
                  navigate('/login');
                }}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md py-4 px-6 space-y-4 md:hidden z-40">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </Link>
          <Link
            to="/skills"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            Explore Skills
          </Link>
          <hr />
          <button
            onClick={() => {
              navigate('/signup');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-blue-600 font-semibold border bg-gradient-to-r from-purple-200 to-blue-300 px-4 py-1 rounded-full hover:bg-blue-50 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              navigate('/login');
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-gradient-to-r to-purple-200 from-blue-300 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
