import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <nav className=" sticky top-0 left-0 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src={logo} // Replace with your logo path
          alt="Logo"
          className="h-10 w-[16vw] object-contain"
        />
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link to='/' className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <Link to='/about' className="text-gray-700 hover:text-blue-600 font-medium">
          About
        </Link>
        <Link to='/contact' className="text-gray-700 hover:text-blue-600 font-medium">
          Contact
        </Link>
        <Link to='/skills' className="text-gray-700 hover:text-blue-600 font-medium">
          Skills
        </Link>
      </div>

      {/* Right: Buttons */}
      <div className="space-x-4">
        <button onClick={()=>{navigate("/signup")}} className="text-blue-600 font-semibold border bg-gradient-to-r from-purple-200 to-blue-300 px-4 py-1 rounded-full hover:bg-blue-50 transition">
          Sign Up
        </button>
        <button onClick={()=>{navigate("/login")}} className="bg-gradient-to-r to-purple-200 from-blue-300 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
