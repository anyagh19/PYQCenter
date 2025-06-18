// src/components/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10 shadow-inner">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} <span className="font-semibold">PYQ Explorer</span> | Built by <span className="text-yellow-400">Aniket</span>
      </p>
    </footer>
  );
}

export default Footer;
