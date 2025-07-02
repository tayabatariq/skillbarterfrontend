import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // For hamburger and close icons
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 max-sm:px-3 left-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 max-sm:w-[30vw] max-md:w-[20vw] w-[16vw] object-contain" />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        <Link to="/skills" className="text-gray-700 hover:text-blue-600 font-medium">Explore Skills</Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button onClick={() => navigate("/signup")} className="text-blue-600 font-semibold border bg-gradient-to-r from-purple-200 to-blue-300 px-4 py-1 rounded-full hover:bg-blue-50 transition">
          Sign Up
        </button>
        <button onClick={() => navigate("/login")} className="bg-gradient-to-r to-purple-200 from-blue-300 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-700 transition">
          Login
        </button>
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
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          <Link to="/skills" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">Explore Skills</Link>
          <hr />
          <button onClick={() => { navigate("/signup"); setIsMobileMenuOpen(false); }} className="w-full text-blue-600 font-semibold border bg-gradient-to-r from-purple-200 to-blue-300 px-4 py-1 rounded-full hover:bg-blue-50 transition">
            Sign Up
          </button>
          <button onClick={() => { navigate("/login"); setIsMobileMenuOpen(false); }} className="w-full bg-gradient-to-r to-purple-200 from-blue-300 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
