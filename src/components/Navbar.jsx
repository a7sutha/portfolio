/* 
  File Name: Navbar.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import mailIcon from "../assets/mail.png";

/* ============================================================
   Function: Navbar
   Description:
   Renders the navigation bar with a logo, navigation links, and 
   a contact icon that links to the contact page.
   ============================================================ */
function Navbar() {
  /* ------------------------------
     Return: JSX
     Purpose: Displays navigation bar 
     with logo, nav links, and contact 
     mail icon
     ------------------------------ */
  return (
    <nav className="top-0 left-0 w-full bg-transparent px-8 flex 
    items-center z-50">
      
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-16 sm:h-28 md:h-32 lg:h-36 
            cursor-pointer hover:scale-105 transition-transform duration-300 
            flex items-center justify-center"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center gap-8 text-lg">
        <Link to="/" className="cursor-pointer hover:text-blue-600 
        transition delay-100">
          Home
        </Link>
        <Link to="/about" className="cursor-pointer hover:text-blue-600 
        transition delay-100">
          About Me
        </Link>
        <Link to="/projects" className="cursor-pointer 
        hover:text-blue-600 transition delay-100">
          Projects
        </Link>
        <Link to="/services" className="cursor-pointer 
        hover:text-blue-600 transition delay-100">
          Services
        </Link>
      </div>

      {/* Contact Icon */}
      <div className="ml-auto">
        <Link
          to="/contact"
          className="cursor-pointer hover:scale-105 transition-transform 
          duration-300 flex items-center justify-center"
        >
          <img src={mailIcon} alt="Contact" className="h-12 w-auto 
          sm:h-16 md:h-20 lg:h-24" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;





