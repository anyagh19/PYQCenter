// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide">📚 PYQCenter</h1>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact Us</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About Us</Link>
          {/* <Link to="/te" className="hover:text-yellow-400 transition">TE</Link>
          <Link to="/be" className="hover:text-yellow-400 transition">BE</Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
