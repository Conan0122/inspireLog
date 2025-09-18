import React, { isValidElement, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-myindigo hover:bg-mylavender shadow-lg font-Hachi font-extrabold text-xl transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-myamber text-2xl font-bold">
          <NavLink
            to="/"
            className="font-Park font-extralight tracking-widest text-3xl transition-colors duration-300"
          >
            inspireLog
          </NavLink>
        </div>

        {/* Hamburger Button (Visible on small screens) */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center p-1 justify-evenly space-x-12 transition-all duration-300`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block md:inline-block text-myoffwhite hover:text-gray-300 transition duration-300 text-lg hover:scale-105 ${ isActive ? 'border-b-2 border-myoffwhite pb-2':''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="blogcreate"
            className={({ isActive }) =>
              `block md:inline-block text-myoffwhite hover:text-gray-300 transition duration-300 text-lg hover:scale-105 ${ isActive ? 'border-b-2 border-myoffwhite pb-2':''}`
            }
          >
            Create blog
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block md:inline-block text-myoffwhite hover:text-gray-300 transition duration-300 text-lg hover:scale-105 ${
                isActive ? "border-b-2 border-myoffwhite pb-2" : ""
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="block md:inline-block bg-myamber text-myblack px-4 py-2 rounded-full hover:bg-myamber-dark hover:scale-105 transition-all duration-300 text-lg"
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
