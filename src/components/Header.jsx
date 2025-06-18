// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide">📚 PYQ Explorer</h1>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/fe" className="hover:text-yellow-400 transition">FE</Link>
          <Link to="/se" className="hover:text-yellow-400 transition">SE</Link>
          <Link to="/te" className="hover:text-yellow-400 transition">TE</Link>
          <Link to="/be" className="hover:text-yellow-400 transition">BE</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
